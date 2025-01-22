import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended,

    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "indent": "error",
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      /* --- TypeScript-specific Rules --- */
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-empty-function": "warn",
      /* --- React-specific Rules --- */
      "react/prop-types": "off", // We don’t need prop-types with TypeScript
      "react/jsx-uses-react": "off", // React 17+ doesn’t require 'import React'
      "react/react-in-jsx-scope": "off", // React 17+ JSX doesn’t require React in scope

      /* --- General Best Practices --- */
      "no-console": "warn", // Console logs should be warned during production
      "no-debugger": "error", // Disable debugger in production
      "eqeqeq": ["error", "always"], // Use strict equality checks
      "curly": ["error", "all"], // Enforce curly braces for blocks
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": ["error"], // Avoid shadowing variable declarations
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": ["error"],

      /* --- React Hooks --- */
      "react-hooks/rules-of-hooks": "error", // Enforce the rules of Hooks
      "react-hooks/exhaustive-deps": "warn", // Warn for missing dependencies in hooks

      /* --- Semicolon Rule --- */
      "semi": ["error", "always"],

      /* Indentation rule for 2 spaces */
      "indent": [
        "error", 2, {
          "SwitchCase": 1,
          "VariableDeclarator": 1,
          "outerIIFEBody": 1,
          "MemberExpression": 1,
          "FunctionDeclaration": {
            "parameters": "first",
            "body": 1
          },
          "FunctionExpression": {
            "parameters": "first",
            "body": 1
          },
          "CallExpression": { "arguments": "first" },
          "ArrayExpression": "first",
          "ObjectExpression": "first",
          "ImportDeclaration": "first",
          "flatTernaryExpressions": false,
          "ignoreComments": false
        }
      ],


      /* Prevent more than 1 empty line */
      "no-multiple-empty-lines": [
        "error",
        {
          "max": 1,         /* Maximum number of consecutive empty lines */
          "maxEOF": 0,      /* No empty lines at the end of the file */
          "maxBOF": 0       /* No empty lines at the beginning of the file */
        }
      ],

      /* Disallow the use of console.log */
      "no-console": ["error", { "allow": ["warn", "error"] }],
      /* Enforce double quotes */
      "quotes": ["error", "double"]
    },
    "settings": {
      "react": {
        "version": "detect" // Automatically detects the React version
      }
    }
  },
)
