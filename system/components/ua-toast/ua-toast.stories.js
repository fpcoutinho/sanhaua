import { fn } from '@storybook/test'
import uaToast from './ua-toast.vue'

export default {
  title: 'Component Library/UA-Toast',
  component: uaToast,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'A toast is a non-modal, unobtrusive window element used to display brief, auto-expiring messages to the user.'
    }
  },
  decorators: [() => ({ template: '<div style="width: 300px;"><story/></div>' })],
  argTypes: {
    appearance: {
      name: 'appearance',
      type: {
        name: 'string',
        required: true
      },
      defaultValue: null,
      description: 'Defines the toast appearance color styles.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: null
        }
      },
      control: { type: 'select' },
      options: ['neutral', 'success', 'warning', 'danger', 'info']
    },
    title: {
      name: 'title',
      type: {
        name: 'string',
        required: true
      },
      defaultValue: null,
      description: 'The title of the toast.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: null
        }
      }
    },
    message: {
      name: 'message',
      type: {
        name: 'string',
        required: true
      },
      defaultValue: null,
      description: 'The message of the toast.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: null
        }
      }
    },
    dismiss: {
      name: '@dismiss',
      type: {
        name: 'function',
        required: false
      },
      defaultValue: null,
      description: 'The function to dismiss the toast.',
      table: {
        type: {
          summary: 'function'
        },
        defaultValue: {
          summary: null
        }
      }
    }
  },
  args: {
    dismiss: fn()
  }
}

const Template = (args) => ({
  components: { uaToast },
  setup() {
    return { args }
  },
  template: `
    <ua-toast
      :appearance="args.appearance"
      :title="args.title"
      :message="args.message"
      @dismiss="args.dismiss"
    />
    `
})

export const Default = Template.bind({})
Default.args = {
  appearance: 'neutral',
  title: 'Default Toast',
  message: 'This is a default toast message.'
}

export const Success = Template.bind({})
Success.args = {
  appearance: 'success',
  title: 'Success Toast',
  message: 'This is a success toast message.'
}

export const Warning = Template.bind({})
Warning.args = {
  appearance: 'warning',
  title: 'Warning Toast',
  message: 'This is a warning toast message.'
}

export const Danger = Template.bind({})
Danger.args = {
  appearance: 'danger',
  title: 'Danger Toast',
  message: 'This is a danger toast message.'
}

export const Info = Template.bind({})
Info.args = {
  appearance: 'info',
  title: 'Info Toast',
  message: 'This is an info toast message.'
}
