import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact, { rules } from "eslint-plugin-react";
import plugin from "eslint-plugin-react";

export default [
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        rules: {
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
        },
        extends: {
            plugin: react / jsx - runtime,
            plugin: react - hooks / recommended,
        },
        plugins: ["react-hooks"],
    },
    {
        languageOptions: {
            globals: globals.browser,
        },
    },

    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
];
