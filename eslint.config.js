import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import testingLibrary from "eslint-plugin-testing-library";
import jestDom from "eslint-plugin-jest-dom";
import { fixupPluginRules, fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";

const flatCompat = new FlatCompat();

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  },
  {
    files: ["**/*.test.{ts,tsx}"],
    plugins: {
      "testing-library": fixupPluginRules(testingLibrary),
      "jest-dom": fixupPluginRules(jestDom),
    },
    rules: {
      ...jestDom.configs["flat/recommended"].rules,
      ...testingLibrary.configs["flat/react"].rules,
    },
  },
  ...fixupConfigRules(flatCompat.extends("plugin:storybook/recommended")),
);
