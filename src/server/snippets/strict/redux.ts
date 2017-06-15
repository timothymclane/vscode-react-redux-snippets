const snippets = [
    {
		"prefix": "reducer",
		"body": [
			"const ${1:name}InitialState = {};",
			"${export }const ${1:name} = (state = ${1:name}InitialState, action) => {",
			"\tswitch (action.type) {",
			"\t\tcase ${2:ACTION_TYPE_1}:",
			"\t\t\treturn state;",
			"\t\tcase ${3:ACTION_TYPE_2}:",
			"\t\t\treturn state;",
			"\t\tdefault:",
			"\t\t\treturn state;",
			"\t}",
			"};"
		],
		"description": "A Redux reducer using arrow function notation"
	},
	{
		"prefix": "container",
		"body": [
			"import { connect } from 'react-redux';",
			"import ${1:component} from '${2:componentPath}';",
			"import {${3:actionCreator}} from '${4:actionCreatorPath}';",
			"",
			"const mapStateToProps = (state, ownProps) => {",
			"\treturn {",
			"\t\t${5:prop}: state.${6:prop}",
			"\t};",
			"};",
			"",
			"const mapDispatchToProps = (dispatch, ownProps) => {",
			"\treturn {",
			"\t\t${7:dispatch1}: () => {",
			"\t\t\tdispatch(${3:actionCreator});",
			"\t\t}",
			"\t};",
			"};",
			"",
			"const mergeProps = (stateProps, dispatchProps, ownProps) => {",
			"\treturn {",
			"\t\t${8:mergeProp}: ${9:mergePropVal}",
			"\t};",
			"};",
			"",
			"export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(${1:component});"
		],
		"description": "A Redux container component"
	},
	{
		"prefix": "mapStateToProps",
		"body": [
			"const mapStateToProps = (state, ownProps) => {",
			"\treturn {",
			"\t\t${1:prop}: state.${2:prop}",
			"\t};",
			"};"
		],
		"description": "A Redux mapStateToProps function"
	},
	{
		"prefix": "mapDispatchToProps",
		"body": [
			"const mapDispatchToProps = (dispatch, ownProps) => {",
			"\treturn {",
			"\t\t${1:dispatch1}: () => {",
			"\t\t\tdispatch(${2:actionCreator});",
			"\t\t}",
			"\t};",
			"};"
		],
		"description": "A Redux mapDispatchToProps function"
	},
	{
		"prefix": "mapDispatchToPropsBind",
		"body": [
			"const mapDispatchToProps = (dispatch) => ({",
			"\t...bindActionCreators(${1:actionCreators}, dispatch),",
			"});"
		],
		"description": "A Redux mapDispatchToProps function using bindActionCreators"
	},
	{
		"prefix": "mergeProps",
		"body": [
			"const mergeProps = (stateProps, dispatchProps, ownProps) => {",
			"\treturn {",
			"\t\t${1:mergeProp}: ${2:mergePropVal}",
			"\t};",
			"};"
		],
		"description": "A Redux mergeProps function"
	},
	{
		"prefix": "connect",
		"body": [
			"export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(${1:component});"
		],
		"description": "A Redux connect function"
	}
]
export default snippets;