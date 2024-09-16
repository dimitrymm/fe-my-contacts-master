import { default as js, default as pluginJs } from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

export default [
    js.configs.recommended,
    {
        rules: {
            'react/react-in-jsx-scope': '1',
            'no-unused-vars': 'error',
            'no-undef': 'error',
            semi: 'error',
            'prefer-const': 'error',
        },
    },
    {
        files: ['**/*.{js,mjs,cjs,jsx}'],
    },
    {
        languageOptions: {
            globals: globals.browser,
        },
    },

    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
    eslintConfigPrettier,
    eslintPluginPrettierRecommended,
];
