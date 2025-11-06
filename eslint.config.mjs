import js from "@eslint/js";
import globals from "globals";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    ignores: ["public/lib/requirejs/require.js"],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jquery,
        ...globals.amd,
      },
    },
    rules: {
      // eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      camelcase: ["warn", { properties: "never" }],
      quotes: ["error", "single", { avoidEscape: true }],
      indent: ["error", 2],
      "no-unused-vars": ["off"],
      "no-trailing-spaces": "error",
      // 'strict': ['error', 'function'],
      "new-cap": ["error", { newIsCap: true, capIsNew: false }],
      "no-bitwise": "warn",
    },
  },
  prettierConfig,
];
