import { mergeConfig } from 'vite'
import path from 'node:path'

const SELECTED_THEME = 'main'

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    '../../system/components/react/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-a11y'
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {}
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      esbuild: {
        jsx: 'automatic'
      },

      resolve: {
        alias: [
          {
            find: '@root',
            replacement: path.resolve(process.cwd(), './')
          },
          {
            find: '@theme',
            replacement: path.resolve(
              process.cwd(),
              `./system/themes/${SELECTED_THEME}`
            )
          },
          {
            find: '@sanhaua',
            replacement: path.resolve(process.cwd(), './system')
          }
        ]
      },

      css: {
        preprocessorOptions: {
          scss: {
            api: 'modern-compiler',
            silenceDeprecations: ['import'],
            additionalData: `
              @use 'sass:map';
              @import "@theme/design-tokens/design-tokens.scss";
              @import "@theme/responsiveness/responsiveness.scss";
            `
          }
        }
      }
    })
  },

  staticDirs: ['../../assets'],

  previewHead: head => `
    ${head}
    <style>
      @import "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:wght,GRAD@100..700,-25";
      @import "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200..800&display=swap";

      body * {
        font-family: "Plus Jakarta Sans", sans-serif !important;
      }

      .material-symbols-rounded {
        font-family: 'Material Symbols Rounded' !important;
        font-weight: normal;
        font-style: normal;
        font-size: 24px;
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        -webkit-font-smoothing: antialiased;
      }
    </style>
  `,

  managerHead: head => `
    ${head}
    <link rel="shortcut icon" href="./favicon.ico" />
    <style>
      @import "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200..800&display=swap";

      body * {
        font-family: "Plus Jakarta Sans", sans-serif !important;
      }
    </style>
  `
}

export default config
