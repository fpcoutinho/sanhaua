import pluginVue from 'eslint-plugin-vue'
//import eslintPluginStorybook from 'eslint-plugin-storybook'
import eslintConfigPrettier from 'eslint-config-prettier'
import js from '@eslint/js'

export default [
  js.configs.recommended,
  eslintConfigPrettier,
  ...pluginVue.configs['flat/recommended'],
  // Eslint plugin storybook is not working with Eslint 9
  //...eslintPluginStorybook.configs['flat/recommended'],
  {
    files: ['**/*.js', '**/*.vue'],
    rules: {
      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'vue/multi-word-component-names': ['error'],

      'vue/html-self-closing': 'off',
      'vue/require-default-prop': 'off',
      'vue/max-attributes-per-line': 'off'
    },
    ignores: [
      '**/.storybook',
      '**/storybook-static',
      '**/node_modules',
      '**/dist/',
      '**/public/',
      '**/eslint.config.mjs',
      '**/vite.config.js'
    ]
  }
]
