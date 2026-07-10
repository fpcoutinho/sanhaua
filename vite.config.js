import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const SELECTED_THEME = 'main'

export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: [
      {
        find: '@root',
        replacement: path.resolve(__dirname, './')
      },
      {
        find: '@theme',
        replacement: path.resolve(
          __dirname,
          `./system/themes/${SELECTED_THEME}`
        )
      },
      {
        find: '@sanhaua',
        replacement: path.resolve(__dirname, './system')
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
          @import "@theme/global/global.scss";
          @import "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:wght,GRAD@100..700,-25";
        `
      }
    }
  }
})
