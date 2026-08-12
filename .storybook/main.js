/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ['../docs/**/*.mdx'],
  addons: ['@storybook/addon-links', '@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  refs: {
    vue: {
      title: 'Vue',
      url: process.env.NODE_ENV === 'production' ? './vue/' : 'http://localhost:6007'
    },
    react: {
      title: 'React',
      url: process.env.NODE_ENV === 'production' ? './react/' : 'http://localhost:6008'
    },
    wc: {
      title: 'Web Components',
      url: process.env.NODE_ENV === 'production' ? './wc/' : 'http://localhost:6009'
    }
  },
  staticDirs: ['../assets'],
  previewHead: (head) => `
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
  managerHead: (head) => `
    ${head}
    <link rel="shortcut icon" href="/favicon.ico" />
    <style>
      @import "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200..800&display=swap";

      body * {
        font-family: "Plus Jakarta Sans", sans-serif !important;
      }
    </style>
  `
}
export default config
