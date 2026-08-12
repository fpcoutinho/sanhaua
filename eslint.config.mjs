// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [{
  ignores: ['**/node_modules/**', '**/dist/**', '**/storybook-static/**', '**/public/**']
}, js.configs.recommended, eslintConfigPrettier, ...pluginVue.configs['flat/recommended'], ...tseslint.configs.recommended.map(config => ({
  ...config,
  files: ['**/*.{ts,tsx}']
})), {
  files: ['**/*.{js,jsx,vue}'],
  languageOptions: {
    parserOptions: { ecmaFeatures: { jsx: true } },
    globals: {
      document: 'readonly',
      window: 'readonly',
      HTMLElement: 'readonly',
      customElements: 'readonly',
      CustomEvent: 'readonly'
    }
  },
  rules: {
    semi: ['error', 'never'],
    'vue/multi-word-component-names': 'error',
    'vue/html-self-closing': 'off',
    'vue/require-default-prop': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off'
  }
}, {
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    parserOptions: { ecmaFeatures: { jsx: true } },
    globals: {
      document: 'readonly',
      window: 'readonly',
      HTMLElement: 'readonly'
    }
  },
  rules: {
    semi: ['error', 'never'],
    '@typescript-eslint/no-unused-vars': 'error'
  }
}, {
  files: ['**/.storybook/**/*.js', 'vite*.config.js', 'vite*.config.ts'],
  languageOptions: {
    parserOptions: { ecmaFeatures: { jsx: true } },
    globals: {
      process: 'readonly'
    }
  }
}, ...storybook.configs["flat/recommended"]];
