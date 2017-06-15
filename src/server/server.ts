'use strict';

import {
	IPCMessageReader, IPCMessageWriter,
	createConnection, IConnection, TextDocumentSyncKind,
	TextDocuments, TextDocument, Diagnostic, DiagnosticSeverity,
	InitializeParams, InitializeResult, TextDocumentPositionParams,
	CompletionItem, CompletionItemKind
} from 'vscode-languageserver';
import snippets from './snippets';

let connection: IConnection = createConnection(new IPCMessageReader(process), new IPCMessageWriter(process));

let documents: TextDocuments = new TextDocuments();
documents.listen(connection);

let workspaceRoot: string;
connection.onInitialize((params): InitializeResult => {
	workspaceRoot = params.rootPath;
	return {
		capabilities: {
			completionProvider: {
				resolveProvider: true
			}
		}
	}
});

interface Settings {
	reactReduxSnippets: LinterSettings;
}

interface LinterSettings {
	LinterRules: string;
}

let linterRules: string;
let es6Snippets: Array<Snippet>;

interface Snippet {
	prefix: string,
	body: Array<string>,
	description: string
}

connection.onDidChangeConfiguration((change) => {
	let settings = <Settings>change.settings;
	linterRules = settings.reactReduxSnippets.LinterRules;
	if (linterRules == "Loose") {
		es6Snippets = snippets.loose;
	}
	else if (linterRules == "Strict") {
		es6Snippets = snippets.strict;
	}
});

connection.onCompletion((textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
	return snippets.snippets.map(item => {
		return {
			label: item.label,
			kind: CompletionItemKind.Snippet,
			data: item.data
		}
	});
});

function getSnippet(snippet: Snippet): string {
	return snippet.body.join("\n");
}

connection.onCompletionResolve((item: CompletionItem): CompletionItem => {
	const es6Snippet = es6Snippets.filter(snippet => snippet.prefix == item.data);
	if (es6Snippet.length > 0) {
		item.insertText = getSnippet(es6Snippet[0]);
		item.insertTextFormat = 2;
		item.documentation = es6Snippet[0].description
	}
	return item;
});

connection.listen();