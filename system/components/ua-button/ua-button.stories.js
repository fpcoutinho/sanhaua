import { fn } from '@storybook/test'
import uaButton from './ua-button.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'UA-Button',
  component: uaButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'An interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology. Once activated, it then performs an action, such as submitting a form or opening a dialog.'
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
      description: 'The default behavior of the button.',
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
    size: {
      name: 'size',
      type: {
        name: 'string',
        required: true
      },
      defaultValue: null,
      description: 'Defines the size of the button.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: null
        }
      },
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    },
    appearance: {
      name: 'appearance',
      type: {
        name: 'string',
        required: true
      },
      defaultValue: null,
      description: 'Defines the button appearance color styles.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: null
        }
      },
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'info', 'ghost']
    },
    widthBehavior: {
      name: 'width-behavior',
      type: {
        name: 'string'
      },
      defaultValue: 'auto',
      description: 'Defines if the button width should be auto or full.',
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
    borderStyle: {
      name: 'border-style',
      type: {
        name: 'string'
      },
      defaultValue: 'square',
      description: 'Defines if the button border style should be round or square.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'square'
        }
      },
      control: { type: 'select' },
      options: ['round', 'square']
    },
    leftIcon: {
      name: 'left-icon',
      type: {
        name: 'string'
      },
      defaultValue: null,
      description: 'Icon to be inserted to the left of the button text.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: null
        }
      }
    },
    rightIcon: {
      name: 'right-icon',
      type: {
        name: 'string'
      },
      defaultValue: null,
      description: 'Icon to be inserted to the right of the button text.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: null
        }
      }
    },
    disabled: {
      name: 'disabled',
      type: {
        name: 'boolean'
      },
      defaultValue: false,
      description:
        'Prevents the user from interacting with the button: it cannot be pressed or focused.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    autofocus: {
      name: 'autofocus',
      type: {
        name: 'boolean'
      },
      defaultValue: false,
      description:
        'Specifies that the button should have input focus when the page loads. Only one element in a document can have this attribute.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    value: {
      name: 'value',
      type: {
        name: 'string'
      },
      defaultValue: null,
      description:
        'Defines the value associated with the button name when it is submitted with the form data. This value is passed to the server in params when the form is submitted using this button.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: null
        }
      }
    },
    name: {
      name: 'name',
      type: {
        name: 'string'
      },
      defaultValue: null,
      description:
        'The name of the button, submitted as a pair with the button value as part of the form data, when that button is used to submit the form.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: null
        }
      }
    },
    form: {
      name: 'form',
      type: {
        name: 'string'
      },
      defaultValue: null,
      description:
        'The form element to associate the button with. The value of this attribute must be the id of a form in the same document.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: null
        }
      }
    },
    default: {
      name: '#default',
      description: 'The default slot of the button, used to insert the button text.',
      control: { type: 'text' },
      table: {
        category: 'Slots',
        type: {
          summary: 'html'
        }
      }
    },
    click: {
      name: '@click',
      type: {
        name: 'function',
        required: false
      },
      defaultValue: null,
      description:
        'This defines the function that should be executed when the component emits the click event.',
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
      :size=args.size
      :appearance=args.appearance
      :width-behavior=args.widthBehavior
      :border-style=args.borderStyle
      :left-icon=args.leftIcon
      :right-icon=args.rightIcon
      :disabled=args.disabled
      :autofocus=args.autofocus
      :value=args.value
      :name=args.name
      :form=args.form
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
  size: 'medium',
  appearance: 'primary',
  widthBehavior: 'auto',
  borderStyle: 'square',
  leftIcon: null,
  rightIcon: null,
  disabled: false,
  autofocus: false,
  value: null,
  name: null,
  form: null,
  default: 'Button'
}

export const Round = Template.bind({})
Round.args = {
  type: 'button',
  size: 'medium',
  appearance: 'primary',
  widthBehavior: 'auto',
  borderStyle: 'round',
  leftIcon: null,
  rightIcon: null,
  disabled: false,
  autofocus: false,
  value: null,
  name: null,
  form: null,
  default: 'Button'
}

export const Square = Template.bind({})
Square.args = {
  type: 'button',
  size: 'medium',
  appearance: 'primary',
  widthBehavior: 'auto',
  borderStyle: 'square',
  leftIcon: null,
  rightIcon: null,
  disabled: false,
  autofocus: false,
  value: null,
  name: null,
  form: null,
  default: 'Button'
}

export const Small = Template.bind({})
Small.args = {
  type: 'button',
  size: 'small',
  appearance: 'primary',
  widthBehavior: 'auto',
  borderStyle: 'square',
  leftIcon: null,
  rightIcon: null,
  disabled: false,
  autofocus: false,
  value: null,
  name: null,
  form: null,
  default: 'Button'
}

export const Medium = Template.bind({})
Medium.args = {
  type: 'button',
  size: 'medium',
  appearance: 'primary',
  widthBehavior: 'auto',
  borderStyle: 'square',
  leftIcon: null,
  rightIcon: null,
  disabled: false,
  autofocus: false,
  value: null,
  name: null,
  form: null,
  default: 'Button'
}

export const Large = Template.bind({})
Large.args = {
  type: 'button',
  size: 'large',
  appearance: 'primary',
  widthBehavior: 'auto',
  borderStyle: 'square',
  leftIcon: null,
  rightIcon: null,
  disabled: false,
  autofocus: false,
  value: null,
  name: null,
  form: null,
  default: 'Button'
}

export const Auto = Template.bind({})
Auto.args = {
  type: 'button',
  size: 'medium',
  appearance: 'primary',
  widthBehavior: 'auto',
  borderStyle: 'square',
  leftIcon: null,
  rightIcon: null,
  disabled: false,
  autofocus: false,
  value: null,
  name: null,
  form: null,
  default: 'Button'
}

export const Full = Template.bind({})
Full.args = {
  type: 'button',
  size: 'medium',
  appearance: 'primary',
  widthBehavior: 'full',
  borderStyle: 'square',
  leftIcon: null,
  rightIcon: null,
  disabled: false,
  autofocus: false,
  value: null,
  name: null,
  form: null,
  default: 'Button'
}
