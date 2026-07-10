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
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
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
            additionalData: `
              @use 'sass:map';
              @import "@theme/design-tokens/design-tokens.scss";
              @import "@theme/responsiveness/responsiveness.scss";
              @import "@theme/global/global.scss";
              @import "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:wght,GRAD@100..700,-25";
            `
          }
        }
      }
    })
  },

  staticDirs: ['../../assets'],

  previewHead: head => `
    ${head}
  `,

  managerHead: head => `
    ${head}
  `
}

export default config
