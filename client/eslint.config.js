import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import eslintReact from '@eslint-react/eslint-plugin'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      '@stylistic': stylistic,
      '@eslint-react': eslintReact,
    },
    rules: {
      "@stylistic/jsx-max-props-per-line": ["error", { "maximum": 1, "when": "always" }],
      "@stylistic/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
      "quotes": ["warn", "double"],
      "semi": ["error", "always"],
      "indent": ["warn", 2],
      "@eslint-react/no-missing-key": "warn",
    }
  },
])
