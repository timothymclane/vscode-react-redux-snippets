# React-Redux ES6 Snippets for Visual Studio Code

React-Redux snippets for Visual Studio Code using ES6 and arrow functions.

## Snippets

| Trigger  | Content |
| -------: | ------- |
| `reducer→`   | Redux reducer skeleton |
| `container→`  | Redux container with mapStateToProps, mapDispatchToProps, mergeProps, and connect functions |
| `mapStateToProps→`  | mapStateToProps arrow function |
| `mapDispatchToProps→`  | mapDispatchToProps arrow function |
| `mapDispatchToPropsBind→`  | mapDispatchToProps arrow function using bindActionCreators |
| `mergeProps→`  | mergeProps arrow function |
| `connect→`  | export default connect function |
| `component→`  | functional React component |
| `componentReturn→`  | functional React component with implicit return |

Snippets support .js, .jsx, .ts, and .tsx extensions.

## Usage

Type part of the snippet and hit `Enter` or `Tab` and the snippet will unfold.

![container](src/client/images/container.gif)

camelCased identifiers support abbreviations, as shown below.

![abbreviations](src/client/images/abbreviation.gif)

## Settings
As of version 2.0.0, settings for loose and strict linter options are available. With loose, semicolons are generally omitted, while strict requires semicolons after every statement or function call. These settings can be accessed under reactReduxSnippets.