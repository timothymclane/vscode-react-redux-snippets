
const snippets = [
    {
        prefix: "componentReturn",
        body: [
            "import React from 'react'",
            "",
            "{{export }}const {{component}} = (props) => (",
            "\t<div>",
            "\t\t{{{children}}}",
            "\t</div>",
            ")",
            "",
            "export default {{component}}"
        ],

        description: "A functional React component with implicit return using arrow function notation"
    },
    {
        prefix: "component",
        body:
        [
            "import React from 'react'",
            "",
            "const {{component}} = (props) => {",
            "\treturn(",
            "\t\t<div>",
            "\t\t\t{{{children}}}",
            "\t\t</div>",
            "\t)",
            "}",
            "",
            "export default {{component}}"
        ],
        description: "A functional React component with explicit return using arrow function notation"
    }
]

export default snippets;