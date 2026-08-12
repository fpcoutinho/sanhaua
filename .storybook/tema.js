import { create } from 'storybook/theming'

export default create({
  base: 'dark',
  brandTitle: 'Sanhauá',
  brandImage:
    'https://raw.githubusercontent.com/fpcoutinho/sanhaua/refs/heads/main/assets/logo.png',
  brandTarget: '_self',

  // Typography
  fontBase: '"Plus Jakarta Sans", sans-serif',
  fontCode: 'monospace',

  // Base Colors — primary-400 / primary-500 (Cyber-Tectônico, ciano-arco)
  colorPrimary: '#028699',
  colorSecondary: '#50B6CA',

  // UI — neutral-100 / neutral-200 (obsidiana mineral)
  appBg: '#0F0F15',
  appContentBg: '#1D1E26',
  appPreviewBg: '#FFFFFF',
  appBorderColor: '#0F0F15',
  appBorderRadius: 4,

  // Text colors — neutral-700 / primary-100
  textColor: '#BCBDC5',
  textInverseColor: '#003740',

  // Toolbar default and active colors — neutral-700 / primary-600 / primary-700
  barTextColor: '#BCBDC5',
  barSelectedColor: '#70CADC',
  barHoverColor: '#93DDEC',
  barBg: '#0F0F15',

  // Form colors
  inputBg: '#0F0F15',
  inputBorder: '#028699',
  inputTextColor: '#BCBDC5',
  inputBorderRadius: 2
})
