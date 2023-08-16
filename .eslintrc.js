module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:react/recommended",
        "airbnb",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:storybook/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        babelOptions: {
            presets: ["@babel/preset-react"],
        },
        ecmaVersion: "latest",
        requireConfigFile: false,
        sourceType: "module",
    },
    plugins: ["react", "prettier", "react-hooks", "@typescript-eslint"],
    rules: {
        "prettier/prettier": 2,
        "react/jsx-filename-extension": 0,
        "import/prefer-default-export": 0,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "import/extensions": 0,
        "react/require-default-props": 0,
        "react/jsx-no-constructed-context-values": 0,
        "react/function-component-definition": 0,
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".ts", ".jsx", ".tsx"],
            },
        },
    },
};
