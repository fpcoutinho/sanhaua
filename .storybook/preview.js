/** @type { import('@storybook/vue3').Preview } */

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      },
      sort: 'requiredFirst'
    },
    html: {
      prettier: {
        tabWidth: 4,
        useTabs: true,
        htmlWhitespaceSensitivity: 'strict'
      }
    }
  },
  globalTypes: {
    templateMode: {
      description: 'Template mode',
      defaultValue: 'light',
      toolbar: {
        title: 'Template mode',
        icon: 'mirror',
        items: [
          {
            value: 'light',
            title: 'Light'
          },
          {
            value: 'dark',
            title: 'Dark'
          }
        ],
        dynamicTitle: true
      }
    }
  }
}

const WithThemeProvider = (Story, context) => {
  const canvasElement = context.canvasElement
  canvasElement.classList.remove('light', 'dark')
  canvasElement.classList.add('sanhaua', context.globals.templateMode)
  return Story()
}

export const decorators = [WithThemeProvider]

export default preview
