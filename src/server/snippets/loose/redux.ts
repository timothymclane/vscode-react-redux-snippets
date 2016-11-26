const snippets = [
    {
		"prefix": "reducer",
		"body": [
			"const {{name}}InitialState = {}",
			"{{export }}const {{name}} = (state = {{name}}InitialState, action) => {",
			"\tswitch (action.type) {",
			"\t\tcase {{ACTION_TYPE_1}}:",
			"\t\t\treturn state",
			"\t\tcase {{ACTION_TYPE_2}}:",
			"\t\t\treturn state",
			"\t\tdefault:",
			"\t\t\treturn state",
			"\t}",
			"}"
		],
		"description": "A Redux reducer using arrow function notation"
	},
	{
		"prefix": "container",
		"body": [
			"import { connect } from 'react-redux'",
			"import {{component}} from '{{componentPath}}'",
			"import {{{actionCreator}}} from '{{actionCreatorPath}}'",
			"",
			"const mapStateToProps = (state, ownProps) => {",
			"\treturn {",
			"\t\t{{id:prop}}: state.{{prop}}",
			"\t}",
			"}",
			"",
			"const mapDispatchToProps = (dispatch, ownProps) => {",
			"\treturn {",
			"\t\t{{dispatch1}}: () => {",
			"\t\t\tdispatch({{actionCreator}})",
			"\t\t}",
			"\t}",
			"}",
			"",
			"const mergeProps = (stateProps, dispatchProps, ownProps) => {",
			"\treturn {",
			"\t\t{{mergeProp}}: {{mergePropVal}}",
			"\t}",
			"}",
			"",
			"export default connect(mapStateToProps, mapDispatchToProps, mergeProps)({{component}})"
		],
		"description": "A Redux container component"
	},
	{
		"prefix": "mapStateToProps",
		"body": [
			"const mapStateToProps = (state, ownProps) => {",
			"\treturn {",
			"\t\t{{id:prop}}: state.{{prop}}",
			"\t}",
			"}"
		],
		"description": "A Redux mapStateToProps function"
	},
	{
		"prefix": "mapDispatchToProps",
		"body": [
			"const mapDispatchToProps = (dispatch, ownProps) => {",
			"\treturn {",
			"\t\t{{dispatch1}}: () => {",
			"\t\t\tdispatch({{actionCreator}})",
			"\t\t}",
			"\t}",
			"}"
		],
		"description": "A Redux mapDispatchToProps function"
	},
	{
		"prefix": "mapDispatchToPropsBind",
		"body": [
			"const mapDispatchToProps = (dispatch) => ({",
			"\t...bindActionCreators({{actionCreators}}, dispatch),",
			"});"
		],
		"description": "A Redux mapDispatchToProps function using bindActionCreators"
	},
	{
		"prefix": "mergeProps",
		"body": [
			"const mergeProps = (stateProps, dispatchProps, ownProps) => {",
			"\treturn {",
			"\t\t{{mergeProp}}: {{mergePropVal}}",
			"\t}",
			"}"
		],
		"description": "A Redux mergeProps function"
	},
	{
		"prefix": "connect",
		"body": [
			"export default connect(mapStateToProps, mapDispatchToProps, mergeProps)({{component}})"
		],
		"description": "A Redux connect function"
	}
]
export default snippets;