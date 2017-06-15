
const snippets = [
    {
        prefix: "componentReturn",
        body: [
            "import React from 'react'",
            "",
            "${1:export }const ${2:Component} = (props) => (",
            "\t<div>",
            "\t\t{props.${3:children}}",
            "\t</div>",
            ")",
            "",
            "export default ${2:Component}"
        ],

        description: "A functional React component with implicit return using arrow function notation"
    },
    {
        prefix: "component",
        body:
        [
            "import React from 'react'",
            "",
            "${1:export }const ${2:Component} = (props) => {",
            "\treturn(",
            "\t\t<div>",
            "\t\t\t{props.${3:children}}",
            "\t\t</div>",
            "\t)",
            "}",
            "",
            "export default ${2:Component}"
        ],
        description: "A functional React component with explicit return using arrow function notation"
    }
]

export default snippets;