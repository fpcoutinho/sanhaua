import { fn } from '@storybook/test'
import uaButton from './ua-button.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'UA-Button',
  component: uaButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'Provides an action point for the user to carry out specific actions.'
    }
  },
  argTypes: {
    type: {
      name: 'type',
      type: {
        name: 'string',
        required: true
      },
      defaultValue: null,
      description: 'Type of the button',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: null
        }
      },
      control: { type: 'select' },
      options: ['button', 'submit', 'reset']
    },
    widthBehavior: {
      name: 'width-behavior',
      type: {
        name: 'string'
      },
      defaultValue: 'auto',
      description: 'Button width behavior style',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'auto'
        }
      },
      control: { type: 'select' },
      options: ['auto', 'full']
    },
    default: {
      name: '#default',
      description: 'The default slot of the button',
      control: { type: 'text' },
      table: {
        category: 'Slots',
        type: {
          summary: 'html'
        }
      }
    }
    // onClick: {
    //   name: '@click',
    //   type: {
    //     name: 'function',
    //     required: false
    //   },
    //   defaultValue: null,
    //   description:
    //     'This defines the function that should be executed when the component emits the click event.',
    //   table: {
    //     type: {
    //       summary: 'function'
    //     },
    //     defaultValue: {
    //       summary: null
    //     }
    //   }
    // }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    click: fn()
  }
}

const Template = (args) => ({
  components: { uaButton },
  setup() {
    return { args }
  },
  template: `
    <ua-button
      :type=args.type
      :width-behavior=args.widthBehavior
      @click=args.click
    >
      {{ args.default }}
    </ua-button>
  `
})

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = Template.bind({})
Example.args = {
  type: 'button',
  widthBehavior: 'auto',
  default: 'Button'
}
