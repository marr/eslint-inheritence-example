module.exports = {
    extends: ["plugin:react/recommended"],
    parserOptions: {
        ecmaVersion: 8
    },
    plugins: ["import", "react"],
    rules: {
        "import/no-anonymous-default-export": [2, { allowAnonymousFunction: true, allowObject: true }],
    }
};
