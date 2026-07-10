import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const SELECTED_THEME = 'main'
const FRAMEWORK_PACKAGES = ['vue', 'react', 'react-dom']

function isFrameworkDependency(id) {
  return FRAMEWORK_PACKAGES.some(
    packageName =>
      id === packageName || id.startsWith(`${packageName}/`)
  )
}

export default defineConfig({
  plugins: [
    vue(),
    react({
      jsxRuntime: 'automatic'
    })
  ],

  esbuild: {
    jsx: 'automatic'
  },

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
  },

  build: {
    emptyOutDir: true,
    sourcemap: true,
    cssCodeSplit: false,

    lib: {
      entry: {
        sanhaua: path.resolve(__dirname, 'lib/sanhaua.js'),
        vue: path.resolve(__dirname, 'lib/vue.js'),
        react: path.resolve(__dirname, 'lib/react.js'),
        wc: path.resolve(__dirname, 'lib/wc.js')
      },

      formats: ['es', 'cjs'],

      fileName: (format, entryName) => {
        const extension = format === 'es' ? 'js' : 'cjs'

        return `${entryName}.${extension}`
      },

      cssFileName: 'style'
    },

    rollupOptions: {
      external: isFrameworkDependency
    }
  }
})
