export default [
    {
        rules: {
            semi: "error",
            "prefer-const": "error",
            // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
            // e.g. "@typescript-eslint/explicit-function-return-type": "off",
            "no-console": "error",
            "max-lines": ["error", { "max": 350, "skipComments": true, "skipBlankLines": true }],
            "max-lines-per-function": ["error", { "max": 300, "skipComments": true, "skipBlankLines": true }],
            "@typescript-eslint/no-unused-vars": "error",
            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/ban-types": "warn",
            "no-tabs": ["error", { "allowIndentationTabs": true }],
            "no-param-reassign": "error",
        }
    }
];
    