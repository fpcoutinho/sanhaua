# Sanhauá

<img src="../assets/logo.png" alt="sanhauá logo" style={{ marginBottom: 30 }} />

Design System named after the famous river in City of Parahyba.

Check out our live **[documentation](https://fpcoutinho.github.io/sanhaua/)**.

## Usage

This section describes how to import Sanhauá as an external package and use it within your project

<br>

Install Sanhauá

```sh
npm i sanhaua
```

If you need to use any component, import them as usual like:

```html
<!-- src/App.vue -->

<script>
  import { uaButton } from 'sanhaua'
</script>

<template>
  <ua-button type="button" width-behavior="full">Botaozin</ua-button>
</template>
```

Import Sanhauá's styling to your project it in you main.js file:

```js
// src/main.js

import 'sanhaua/dist/style.css'
```

If you have a bundler like [Vite](https://vitejs.dev), you can also use our design system tokens on your application. Just install [Sass](https://sass-lang.com/).
You should be able to import all tokens and properties into your own project this way:

```js
// vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const SELECTED_THEME = 'main'

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // We use sass-embedded, but if you use normal sass, just replace this with 'modern'
        additionalData: `
          @use 'sass:map';
          @import "sanhaua/system/themes/${SELECTED_THEME}/design-tokens/design-tokens.scss";
          @import "sanhaua/system/themes/${SELECTED_THEME}/web-requirements/web-requirements.scss";
        `
      }
    }
  }
})
```

## Development

Wanna play around with the design system in dev mode? Here's how to do it.

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar).

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

#### Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Compile and Minify for Production

```sh
npm run build
```

#### Run documentation in dev mode

```sh
npm run storybook
```

#### Lint with [ESLint](https://eslint.org/)

```sh
npm run eslint
```

_or_

```sh
npm run eslint:fix
```

to **force** automatic fixes.

#### Lint with [Stylelint](https://stylelint.io/)

```sh
npm run stylelint
```

_or_

```sh
npm run stylelint:fix
```

#### Format with [Prettier](https://prettier.io/)

```sh
npm run format
```
