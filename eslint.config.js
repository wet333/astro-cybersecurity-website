import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import astro from 'eslint-plugin-astro';

export default [
    {
        ignores: ['dist/**', 'node_modules/**', '.astro/**', 'public/**'],
    },
    js.configs.recommended,
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
        },
    },
    ...astro.configs['flat/recommended'],
    {
        rules: {
            'no-undef': 'off',
        },
    },
];
