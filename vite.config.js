import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { fileURLToPath } from 'url'

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
        replacement: path.resolve(__dirname, `./system/themes/${SELECTED_THEME}`)
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
        additionalData: `
          @use 'sass:map';
          @import "@theme/design-tokens/design-tokens.scss";
          @import "@theme/web-requirements/web-requirements.scss";
        `
      }
    }
  },
  build: {
    cssCodeSplit: true,
    removeComments: false,
    lib: {
      entry: [path.resolve(__dirname, './system/themes/system.scss')],
      formats: ['cjs'],
      name: 'sanhaua'
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) =>
          assetInfo.names.includes('ua-')
            ? `components/${assetInfo.names.split('/').at(-1)}`
            : assetInfo.name
      }
    }
  }
})
