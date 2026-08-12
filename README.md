# Sanhauá

![sanhauá logo](./assets/logo.png)

Design System named after the famous river in City of Parahyba.

Check out our live **[documentation](https://fpcoutinho.github.io/sanhaua/)**.

## Component structure

Sanhaua is organized to support multiple frameworks:

- `system/components/vue`: Vue implementation and stories
- `system/components/react`: React implementation
- `system/components/wc`: Web Components implementation
- `system/components/styles`: Shared component styles used across frameworks

This allows each framework to keep its own implementation while reusing the same CSS source.

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
          @import "sanhaua/system/themes/${SELECTED_THEME}/global/global.scss";
          @import "sanhaua/system/themes/${SELECTED_THEME}/responsiveness/responsiveness.scss";
        `
      }
    }
  }
})
```

## TypeScript

The React layer (`system/components/react`, `lib/react.ts`) is written in TypeScript and
ships **generated** declarations — `dist/lib/react.d.ts` and the per-component `.d.ts`
under `dist/system/components/react/`, built by `vite-plugin-dts` from the `.tsx` source
during `npm run build`. Prop types for `UaAlert`, `UaButton`, `UaCard`, `UaInputField`, `UaInputRadio`, `UaSkeleton`, `UaTable`
and `UaToast` are therefore always in sync with the implementation — there is no
hand-maintained `.d.ts` to drift.

Vue and Web Components are still plain `.vue`/`.js`; their declarations
(`types/vue.d.ts`, `types/wc.d.ts`, `types/sanhaua.d.ts`) are written by hand and need to
be reviewed on every release that touches those components — the same caveat that used to
apply to the whole package.

Shared prop vocabulary (`ButtonAppearance`, `FieldAppearance`, `Size`, …) lives in
`system/types/tokens.ts`, read off the modifier classes that actually exist in
`system/components/styles/*.scss` — that SCSS is the source of truth, not any consumer's
copy of the types.

`npm run typecheck` runs `tsc --noEmit` over the TS layer.

## Consuming the SCSS layer

This is the part every consumer has had to reverse-engineer from `vite.config.ts` trial
and error, so it is spelled out here in full. A Vite consumer needs, in this order:

```js
// vite.config.js (consumer)
css: {
  preprocessorOptions: {
    scss: {
      additionalData: `
        @use "sass:map";
        @import "sanhaua/system/themes/main/design-tokens/design-tokens";
        @import "sanhaua/system/themes/main/responsiveness/responsiveness";
      `,
      // Sanhauá's own SCSS is entirely @import. additionalData is prepended to every
      // file the consumer compiles, so a component .scss in the consumer's codebase
      // can never open with @use — it would stop being the first statement in the
      // file and Sass would abort. Silence the resulting deprecation warnings:
      silenceDeprecations: ['import', 'global-builtin']
    }
  }
}
```

Notes:

- **`@use "sass:map";` first.** `_media-queries.scss` and `system.scss` call `map.get`
  without importing the `sass:map` module themselves — they rely on the consumer's build
  having already loaded it globally. Omit this line and any `@import` that pulls those
  files in fails.
- **Import the token files directly, not `system.scss`.** The recipe above never touches
  `system/themes/system.scss` or the `@theme` alias it uses internally
  (`@import "@theme/design-tokens/design-tokens"`) — `@theme` is a build-time alias
  configured in *this* repo's own `vite.config.js`/`vite.lib.config.js` and is not part of
  the published contract. A consumer that only needs tokens and component styles doesn't
  need to declare that alias at all; it's only relevant if you import `system.scss` itself
  (for the `.sanhaua.light`/`.sanhaua.dark` scope rules), in which case mirror the alias
  in your own `resolve.alias` pointing at `sanhaua/system/themes/main`.
- **Component styles are plain SCSS, not CSS custom properties.** Colors are Sass maps
  (`map-get($color-primary-light, "500")`), spacing is a function (`spacing(4)`), and
  typography is mixins (`@include body-1;`). Nothing emits `var(--...)`.
- Wrap your markup in an element with `class="sanhaua light"` (or `dark`) — every
  component style is scoped under `.sanhaua`, and the theme block picks the color set.

## Known gaps

- `UaTable` exists in React only. Vue and Web Components don't have a table component
  yet — no equivalent SCSS or story either.
- The React `UaInputField` covers every input `type` in one component; Vue keeps the
  older pattern of one component per type (`UaInputDate`, `UaInputEmail`,
  `UaInputPassword`, `UaInputTel`, `UaInputText`), and only `UaInputPassword` has the
  show/hide toggle. These haven't been reconciled across frameworks. Because of that,
  `styles/ua-input-field.scss` (React) and `styles/ua-input-text.scss` (Vue and Web
  Components) are near-identical duplicates today — same rules, different block class.
  Migrating Vue and Web Components to the unified format collapses the per-type sheets
  into `ua-input-field.scss`; the duplication is deliberate until then, and the note is
  repeated at the top of that file.
- `UaAlert` and `UaCard` exist in React only. `UaInputRadio` exists in React and Vue.

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
npm run docs
```

#### Run Storybook composition host in dev mode

```sh
npm run docs:host
```

#### Run Vue Storybook instance for composition refs

```sh
npm run docs:vue
```

#### Build composed Storybook docs

```sh
npm run build-docs
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
