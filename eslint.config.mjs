import vue from 'eslint-plugin-vue'
import storybook from 'eslint-plugin-storybook'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

export default [
  {
    ignores: [
      '**/.storybook',
      '**/storybook-static',
      '**/node_modules',
      '**/dist/',
      '**/public/',
      '**/.eslintrc.cjs',
      '**/vite.config.js'
    ]
  },
  ...compat.extends(
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:storybook/recommended'
  ),
  {
    plugins: {
      vue,
      storybook
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        process: true
      },

      ecmaVersion: 'latest',
      sourceType: 'module'
    },

    rules: {
      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'vue/multi-word-component-names': ['error'],

      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'never',
            normal: 'never',
            component: 'always'
          },

          svg: 'always',
          math: 'always'
        }
      ],

      'vue/require-default-prop': 'off'
    }
  },
  {
    files: ['**/.eslintrc.{js,cjs}'],

    languageOptions: {
      globals: {
        ...globals.node
      },

      ecmaVersion: 5,
      sourceType: 'commonjs'
    }
  }
]
