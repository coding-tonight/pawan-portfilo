module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "prettier",
        "plugin:prettier/recommended",
        "plugin:import/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [ "error" ],
    "react/jsx-filename-extension": [ "warn", { "extensions": [ ".tsx" ] } ],
    "import/extensions": [ "error", "ignorePackages", { "ts": "never", "tsx": "never" } ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": [ "error" ],
    "@typescript-eslint/explicit-function-return-type": [ "error", { "allowExpressions": true } ],
    "max-len": [ "warn", { "code": 100, "ignoreComments": true, "ignoreUrls": true } ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "prettier/prettier": [ "error", { "endOfLine": "auto" } ]
    }
}
