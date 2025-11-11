// eslint.config.js (ESLint v9 flat config)
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier, // turns off rules that conflict with Prettier
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    ignores: ["dist", "node_modules", ".husky"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    // Register the plugin under the "prettier" key
    plugins: { prettier: eslintPluginPrettier },
    rules: {
      // Make formatting issues fail lint
      "prettier/prettier": ["error", { endOfLine: "auto" }],
    },
  },
);
