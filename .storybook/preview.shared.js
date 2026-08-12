import { addons } from 'storybook/preview-api'

const THEME_BACKGROUND_MAP = {
  light: '#FFFFFF',
  dark: '#000000'
}

export default {
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
    },
    backgrounds: {
      options: {
        light: {
          name: 'Light',
          value: THEME_BACKGROUND_MAP.light
        },
        dark: {
          name: 'Dark',
          value: THEME_BACKGROUND_MAP.dark
        }
      }
    },
    docs: { 
      codePanel: true
    }
  },
  initialGlobals: {
    templateMode: 'light',
    backgrounds: {
      value: 'light'
    }
  },
  globalTypes: {
    templateMode: {
      description: 'Template mode',
      toolbar: {
        title: 'Template mode',
        icon: 'cloudhollow',
        items: [
          {
            value: 'light',
            title: 'Light',
            icon: 'sun'
          },
          {
            value: 'dark',
            title: 'Dark',
            icon: 'moon'
          }
        ],
        dynamicTitle: true
      }
    }
  },
  decorators: [
    (Story, context) => {
      const { templateMode, backgrounds } = context.globals

      if (backgrounds?.value !== templateMode) {
        addons.getChannel().emit('updateGlobals', {
          globals: {
            backgrounds: {
              value: templateMode
            }
          }
        })
      }

      const canvas = context.canvasElement
      if (canvas) {
        canvas.classList.remove('light', 'dark')
        canvas.classList.add('sanhaua', templateMode)
      }

      return Story()
    }
  ]
}
