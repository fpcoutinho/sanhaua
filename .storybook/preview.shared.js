export const parameters = {
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
}

export const globalTypes = {
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

export function applyTemplateMode(context) {
  const canvasElement = context.canvasElement

  if (!canvasElement) {
    return
  }

  const templateMode = context.globals?.templateMode ?? 'light'

  canvasElement.classList.remove('light', 'dark')
  canvasElement.classList.add('sanhaua', templateMode)
}
