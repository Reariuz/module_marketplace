import react from 'eslint-plugin-react';
import globals from 'globals';
import babelParser from '@babel/eslint-parser'; // Verwende den Babel-Parser
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    ...compat.extends('eslint:recommended', 'plugin:react/recommended'),
    {
        languageOptions: {
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false, // Deaktivieren, falls keine Babel-Konfigurationsdatei vorhanden ist
                ecmaVersion: 2020,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true // JSX aktivieren
                }
            },
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },
        plugins: {
            react: react
        },
        rules: {
            'react/react-in-jsx-scope': 'off', // Optional: Wenn du React 17+ verwendest
            'no-console': 'off',
            'indent': ['error', 4],
            'quotes': ['error', 'single'],
            'semi': ['error', 'always']
        },
        settings: {
            react: {
                version: 'detect' // Automatische Erkennung der React-Version
            }
        }
    }
];
