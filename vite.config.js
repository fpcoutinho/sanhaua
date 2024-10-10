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
          @import "@theme/global/global.scss";
        `
      }
    }
  },
  build: {
    cssCodeSplit: false,
    removeComments: false,
    sourcemap: true,
    emptyOutDir: true,
    plugins: [vue()],
    lib: {
      entry: [
        path.resolve(__dirname, 'system/themes/system.scss'),
        path.resolve(__dirname, 'lib/sanhaua.js')
      ],
      name: 'Sanhaua'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
