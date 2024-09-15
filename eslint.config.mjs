import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = [eslintPluginPrettierRecommended];
export default [
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        rules: {
                "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "prettier/prettier": "error",
        },
        extends: {
            plugin: react / jsx - runtime,
            plugin: react - hooks / recommended,
        },
        plugins: ["react-hooks", "prettier"],
    },
    {
        languageOptions: {
            globals: globals.browser,
        },
    },

    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
    eslintConfigPrettier,
];
