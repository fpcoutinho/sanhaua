import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'
import js from '@eslint/js'

export default [
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/storybook-static/**', '**/public/**']
  },
  js.configs.recommended,
  eslintConfigPrettier,
  ...pluginVue.configs['flat/recommended'],
  {
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
  },
  {
    files: ['**/.storybook/**/*.js', 'vite*.config.js'],
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: {
        process: 'readonly'
      }
    }
  }
]
