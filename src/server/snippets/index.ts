import looseSnippets from './loose';
import strictSnippets from './strict';

class SnippetData {
    constructor(public snippet) {
        this.label = <string>snippet.prefix;
        this.data = <string>snippet.prefix;
    }
    label: string;
    data: string;
}

const snippetData =
    looseSnippets.map(element => {
        return new SnippetData(element)
    });

export default {
    loose: looseSnippets,
    strict: strictSnippets,
    snippets: snippetData
}