import { create } from '@storybook/theming'

export default create({
  base: 'dark',
  brandTitle: 'Sanhauá',
  brandImage:
    'https://raw.githubusercontent.com/fpcoutinho/sanhaua/refs/heads/main/assets/logo.png',
  brandTarget: '_self',

  // Typography
  fontBase: '"Lato", sans-serif',
  fontCode: 'monospace',

  // Base Colors
  colorPrimary: '#1E4950',
  colorSecondary: '#027C9B',

  // UI
  appBg: '#09141B',
  appContentBg: '#0C1A24',
  appPreviewBg: '#FFFFFF',
  appBorderColor: '#09141B',
  appBorderRadius: 4,

  // Text colors
  textColor: '#C9CDCF',
  textInverseColor: '#17384C',

  // Toolbar default and active colors
  barTextColor: '#C9CDCF',
  barSelectedColor: '#50A3B5',
  barHoverColor: '#1BBCDD',
  barBg: '#09141B',

  // Form colors
  inputBg: '#09141B',
  inputBorder: '#1E4950',
  inputTextColor: '#C9CDCF',
  inputBorderRadius: 2
})
