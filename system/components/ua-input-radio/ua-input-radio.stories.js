import { fn } from '@storybook/test'
import uaInputRadio from './ua-input-radio.vue'

export default {
  title: 'UA-Input-Radio',
  component: uaInputRadio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'A radio button is a graphical control element that allows the user to choose only one of a predefined set of mutually exclusive options.'
    }
  },
  decorators: [() => ({ template: '<div style="width: 120px;"><story/></div>' })],
  argTypes: {
    size: {
      name: 'size',
      type: {
        name: 'string',
        required: true
      },
      defaultValue: null,
      description: 'Defines the size of the input radio.',
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
    value: {
      name: 'value',
      type: {
        name: 'string',
        required: true
      },
      defaultValue: null,
      description:
        'When a form is submitted, only radio buttons which are currently checked are submitted to the server, and the reported value is the value of the value attribute. If the value is not otherwise specified, it is the string on by default.',
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
        name: 'string',
        required: false
      },
      defaultValue: null,
      description:
        'Used to define a radio group. If more than one radio has the same name, they will belong to the same radio group. Once a radio group is established, selecting any radio button in that group automatically deselects any currently-selected radio button in the same group.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: null
        }
      }
    },
    label: {
      name: 'label',
      type: {
        name: 'string',
        required: false
      },
      defaultValue: null,
      description: 'Defines the label for the input radio.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: null
        }
      }
    },
    mode: {
      name: 'mode',
      type: {
        name: 'string',
        required: false
      },
      defaultValue: null,
      description:
        'If normal, the label is placed after the input radio. If reverse, the label is placed before the input radio.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: null
        }
      },
      control: { type: 'select' },
      options: ['normal', 'reverse']
    },
    id: {
      name: 'id',
      type: {
        name: 'string',
        required: false
      },
      defaultValue: null,
      description:
        'The id global attribute defines an identifier (ID) which must be unique in the whole document.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: null
        }
      }
    },
    checked: {
      name: 'checked',
      type: {
        name: 'boolean',
        required: false
      },
      defaultValue: null,
      description:
        'A Boolean attribute which, if present, indicates that this radio button selected by default.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: null
        }
      }
    },
    disabled: {
      name: 'disabled',
      type: {
        name: 'boolean',
        required: false
      },
      defaultValue: null,
      description:
        'Prevents the user from interacting with the radio: it cannot be pressed or focused.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: null
        }
      }
    },
    required: {
      name: 'required',
      type: {
        name: 'boolean',
        required: false
      },
      defaultValue: null,
      description:
        'The required attribute is one which most inputs share. If any radio button in a same-named group of radio buttons has the required attribute, a radio button in that group must be checked, although it does not have to be the one with the attribute applied.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: null
        }
      }
    },
    autofocus: {
      name: 'autofocus',
      type: {
        name: 'boolean',
        required: false
      },
      defaultValue: null,
      description:
        'Specifies that the radio should have input focus when the page loads. Only one element in a document can have this attribute.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: null
        }
      }
    },
    modelValue: {
      name: 'v-model',
      type: {
        name: 'string',
        required: false
      },
      defaultValue: null,
      description:
        'The v-model directive creates a two-way binding on a form input element or a component.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: null
        }
      },
      control: { type: 'modelValue' }
    },
    change: {
      name: '@change',
      type: {
        name: 'function',
        required: false
      },
      defaultValue: null,
      description:
        'This defines the function that should be executed when the component emits the change event.',
      table: {
        type: {
          summary: 'function'
        },
        defaultValue: {
          summary: null
        }
      }
    },
    input: {
      name: '@input',
      type: {
        name: 'function',
        required: false
      },
      defaultValue: null,
      description:
        'This defines the function that should be executed when the component emits the input event.',
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
    change: fn(),
    input: fn()
  }
}

const Template = (args) => ({
  components: { uaInputRadio },
  setup() {
    return { args }
  },
  template: `
    <ua-input-radio
      :size=args.size
      :value=args.value
      :name=args.name
      :label=args.label
      :mode=args.mode
      :id=args.id
      :checked=args.checked
      :disabled=args.disabled
      :required=args.required
      :autofocus=args.autofocus
      v-model=${args.modelValue}
      @change=args.change
      @input=args.input
    />
  `
})

export const Default = Template.bind({})
Default.args = {
  size: 'medium',
  value: 'on',
  label: 'Radio Label',
  mode: 'normal',
  name: 'radio',
  id: 'radio',
  modelValue: 'on',
  checked: false,
  disabled: false,
  required: false,
  autofocus: false
}

export const Reverse = Template.bind({})
Reverse.storyName = 'With label on the left'
Reverse.args = {
  size: 'medium',
  value: 'on',
  label: 'Radio Label',
  mode: 'reverse',
  name: 'reverse',
  id: 'reverse',
  modelValue: 'on',
  checked: false,
  disabled: false,
  required: false,
  autofocus: false
}

export const Checked = Template.bind({})
Checked.args = {
  size: 'medium',
  value: 'on',
  label: 'Radio Label',
  mode: 'normal',
  name: 'checked',
  id: 'checked',
  modelValue: 'on',
  checked: true,
  disabled: false,
  required: false,
  autofocus: false
}

export const Disabled = Template.bind({})
Disabled.args = {
  size: 'medium',
  value: 'on',
  label: 'Radio Label',
  mode: 'normal',
  name: 'disabled',
  id: 'disabled',
  modelValue: 'on',
  checked: false,
  disabled: true,
  required: false,
  autofocus: false
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  value: 'on',
  label: 'Radio Label',
  mode: 'normal',
  name: 'small',
  id: 'small',
  modelValue: 'on',
  checked: false,
  disabled: false,
  required: false,
  autofocus: false
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
  value: 'on',
  label: 'Radio Label',
  mode: 'normal',
  name: 'medium',
  id: 'medium',
  modelValue: 'on',
  checked: false,
  disabled: false,
  required: false,
  autofocus: false
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  value: 'on',
  label: 'Radio Label',
  mode: 'normal',
  name: 'large',
  id: 'large',
  modelValue: 'on',
  checked: false,
  disabled: false,
  required: false,
  autofocus: false
}
