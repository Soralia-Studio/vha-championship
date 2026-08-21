import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    { 
      ignores: [
        'dist/**',
        'build/**',
        'node_modules/**',
        ".next/**",
        "next-env.d.ts"
      ] 
    },

    js.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    pluginReact.configs.flat['jsx-runtime'],

    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        languageOptions: {
            globals: { ...globals.browser, ...globals.node },
        },
        settings: {
            react: { version: 'detect' },
        },
        rules: {
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'no-var': 'error',
            'prefer-const': 'warn',
        },
    },

    eslintConfigPrettier,
]);
