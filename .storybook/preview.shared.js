import { addons } from '@storybook/preview-api'

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
      values: [
        {
          name: 'light',
          value: THEME_BACKGROUND_MAP.light
        },
        {
          name: 'dark',
          value: THEME_BACKGROUND_MAP.dark
        }
      ]
    }
  },
  initialGlobals: {
    backgrounds: {
      value: THEME_BACKGROUND_MAP.light
    }
  },
  globalTypes: {
    templateMode: {
      description: 'Template mode',
      defaultValue: 'light',
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
      const currentThemeBackground = THEME_BACKGROUND_MAP[templateMode]

      if (backgrounds?.value !== currentThemeBackground) {
        addons.getChannel().emit('updateGlobals', {
          globals: {
            backgrounds: {
              value: currentThemeBackground
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
