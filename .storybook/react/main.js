import { mergeConfig } from 'vite'
import path from 'path'

const SELECTED_THEME = 'main'

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../../system/components/react/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
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
  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: [
          {
            find: '@root',
            replacement: path.resolve(process.cwd(), './')
          },
          {
            find: '@theme',
            replacement: path.resolve(process.cwd(), `./system/themes/${SELECTED_THEME}`)
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
  previewHead: (head) => `
    ${head}
    <style>
      @import "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:wght,GRAD@100..700,-25";
      @import "https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap";

      body * {
        font-family: "Lato", sans-serif !important;
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
  managerHead: (head) => `
    ${head}
    <link rel="shortcut icon" href="/favicon.ico" />
    <style>
      @import "https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap";

      body * {
        font-family: "Lato", sans-serif !important;
      }
    </style>
  `
}

export default config
