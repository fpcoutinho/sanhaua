import {
  applyTemplateMode,
  globalTypes,
  parameters
} from '../preview.shared.js'

const withThemeProvider = (Story, context) => {
  applyTemplateMode(context)

  return Story()
}

/** @type { import('@storybook/web-components').Preview } */
const preview = {
  parameters,
  globalTypes,
  decorators: [withThemeProvider]
}

export default preview
