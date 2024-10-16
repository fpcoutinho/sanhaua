import { fn } from '@storybook/test'
import uaInputEmail from './ua-input-email.vue'

export default {
  title: 'Component Library/UA-Input-Email',
  component: uaInputEmail,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'Input elements of type email are used to let the user enter and edit an email address, or, if the multiple attribute is specified, a list of email addresses.'
    }
  },
  argTypes: {
    label: {
      name: 'label',
      type: {
        name: 'string',
        required: false
      },
      defaultValue: null,
      description: 'The label for the input field.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: null
        }
      }
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
    size: {
      name: 'size',
      type: {
        name: 'string',
        required: true
      },
      defaultValue: null,
      description: 'Defines the size of the input.',
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
        required: false
      },
      defaultValue: 'neutral',
      description: 'Defines the input appearance color styles.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'neutral'
        }
      },
      control: { type: 'select' },
      options: ['neutral', 'success', 'error']
    },
    widthBehavior: {
      name: 'width-behavior',
      type: {
        name: 'string'
      },
      defaultValue: 'auto',
      description: 'Defines if the input width should be auto or full.',
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
      description: 'Defines if the input border style should be round or square.',
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
    icon: {
      name: 'icon',
      type: {
        name: 'string',
        required: false
      },
      defaultValue: null,
      description:
        'The icon to display on the extreme left of the input, before the field and prefix.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: null
        }
      }
    },
    prefix: {
      name: 'prefix',
      type: {
        name: 'string',
        required: false
      },
      defaultValue: null,
      description: 'The prefix to display on the left of the input field.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: null
        }
      }
    },
    suffix: {
      name: 'suffix',
      type: {
        name: 'string',
        required: false
      },
      defaultValue: null,
      description: 'The suffix to display on the right of the input field.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: null
        }
      }
    },
    placeholder: {
      name: 'placeholder',
      type: {
        name: 'string',
        required: false
      },
      defaultValue: null,
      description:
        'The placeholder attribute is a string that provides a brief hint to the user as to what kind of information is expected in the field.',
      table: {
        type: {
          summary: 'string'
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
      defaultValue: false,
      description:
        'The required attribute is one which most inputs share. When present, it means that a value is required for the form to be submittable.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    disabled: {
      name: 'disabled',
      type: {
        name: 'boolean',
        required: false
      },
      defaultValue: false,
      description:
        'Prevents the user from interacting with the input: it cannot be pressed or focused.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    multiple: {
      name: 'multiple',
      type: {
        name: 'boolean',
        required: false
      },
      defaultValue: false,
      description:
        'Field will be considered valid when a single email address is entered, or when any number of email addresses separated by commas and, optionally, some number of whitespace characters are present.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    readonly: {
      name: 'readonly',
      type: {
        name: 'boolean',
        required: false
      },
      defaultValue: false,
      description:
        'A Boolean which, if present, specifies that the input field should be read-only.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    maxlength: {
      name: 'maxlength',
      type: {
        name: 'number',
        required: false
      },
      defaultValue: null,
      description:
        'The maximum string length (measured in UTF-16 code units) that the user can enter into the email input. This must be an integer value of 0 or higher.  This value must also be greater than or equal to the value of minlength.',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: {
          summary: null
        }
      }
    },
    minlength: {
      name: 'minlength',
      type: {
        name: 'number',
        required: false
      },
      defaultValue: null,
      description:
        'The minimum string length (measured in UTF-16 code units) that the user can enter into the email input. This must be a non-negative integer value smaller than or equal to the value specified by maxlength.',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: {
          summary: null
        }
      }
    },
    autocomplete: {
      name: 'autocomplete',
      type: {
        name: 'boolean',
        required: false
      },
      defaultValue: null,
      description:
        'A boolean which specifies whether the input field should have autocomplete enabled.',
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
      defaultValue: false,
      description:
        'A Boolean which, if present, specifies that the input field should automatically get focus when the page loads.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
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
      description: 'A string which specifies the name of the input field.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: null
        }
      }
    },
    inputmode: {
      name: 'inputmode',
      type: {
        name: 'string',
        required: false
      },
      defaultValue: null,
      description:
        'A string which specifies the type of data that is expected to be entered in the input field.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: null
        }
      }
    },
    pattern: {
      name: 'pattern',
      type: {
        name: 'string',
        required: false
      },
      defaultValue: null,
      description:
        'The pattern attribute, when specified, is a regular expression that the input value must match for the value to pass constraint validation. It must be a valid JavaScript regular expression, as used by the RegExp type.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: null
        }
      }
    },
    vModel: {
      name: 'v-model',
      type: {
        name: 'string',
        required: false
      },
      defaultValue: null,
      description:
        'The v-model directive creates a two-way binding on a form input element or a component.',
      table: {
        category: 'v-model',
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: null
        }
      }
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
    },
    focus: {
      name: '@focus',
      type: {
        name: 'function',
        required: false
      },
      defaultValue: null,
      description:
        'This defines the function that should be executed when the component emits the focus event.',
      table: {
        type: {
          summary: 'function'
        },
        defaultValue: {
          summary: null
        }
      }
    },
    blur: {
      name: '@blur',
      type: {
        name: 'function',
        required: false
      },
      defaultValue: null,
      description:
        'This defines the function that should be executed when the component emits the blur event.',
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
    input: fn(),
    focus: fn(),
    blur: fn()
  }
}

const Template = (args) => ({
  components: { uaInputEmail },
  setup() {
    return { args }
  },
  template: `
    <ua-input-email
      :label=args.label
      :id=args.id
      :size=args.size
      :appearance=args.appearance
      :width-behavior=args.widthBehavior
      :border-style=args.borderStyle
      :icon=args.icon
      :prefix=args.prefix
      :suffix=args.suffix
      :placeholder=args.placeholder
      :required=args.required
      :disabled=args.disabled
      :multiple=args.multiple
      :readonly=args.readonly
      :maxlength=args.maxlength
      :minlength=args.minlength
      :autocomplete=args.autocomplete
      :autofocus=args.autofocus
      :name=args.name
      :inputmode=args.inputmode
      :pattern=args.pattern
      v-model=args.vModel
      @change=args.change
      @input=args.input
      @focus=args.focus
      @blur=args.blur
    />
  `
})

export const Example = Template.bind({})
Example.args = {
  label: 'Email',
  size: 'medium',
  appearance: 'neutral',
  widthBehavior: 'auto',
  borderStyle: 'square',
  icon: 'mail',
  prefix: null,
  suffix: null,
  placeholder: 'Enter your email address',
  id: 'email',
  disabled: false,
  required: false,
  multiple: false,
  readonly: false,
  maxlength: null,
  minlength: null,
  autocomplete: true,
  autofocus: false,
  name: 'email',
  inputmode: 'email',
  pattern: null,
  vModel: ''
}

export const WithPrefixAndSuffix = Template.bind({})
WithPrefixAndSuffix.storyName = 'With prefix and suffix'
WithPrefixAndSuffix.args = {
  label: 'Email',
  id: 'email2',
  size: 'medium',
  appearance: 'neutral',
  widthBehavior: 'auto',
  borderStyle: 'square',
  icon: 'mail',
  prefix: 'email',
  suffix: '@example.com',
  placeholder: null,
  required: false,
  disabled: false,
  multiple: false,
  readonly: false,
  maxlength: null,
  minlength: null,
  autocomplete: true,
  autofocus: false,
  name: 'email2',
  inputmode: 'email',
  pattern: null,
  vModel: ''
}

export const Small = Template.bind({})
Small.args = {
  label: 'Email',
  id: 'email3',
  size: 'small',
  appearance: 'neutral',
  widthBehavior: 'auto',
  borderStyle: 'square',
  icon: null,
  prefix: null,
  suffix: null,
  placeholder: 'Enter your email address',
  required: false,
  disabled: false,
  multiple: false,
  readonly: false,
  maxlength: null,
  minlength: null,
  autocomplete: true,
  autofocus: false,
  name: 'email3',
  inputmode: 'email',
  pattern: null,
  vModel: ''
}

export const Medium = Template.bind({})
Medium.args = {
  label: 'Email',
  id: 'email4',
  size: 'medium',
  appearance: 'neutral',
  widthBehavior: 'auto',
  borderStyle: 'square',
  icon: null,
  prefix: null,
  suffix: null,
  placeholder: 'Enter your email address',
  required: false,
  disabled: false,
  multiple: false,
  readonly: false,
  maxlength: null,
  minlength: null,
  autocomplete: true,
  autofocus: false,
  name: 'email4',
  inputmode: 'email',
  pattern: null,
  vModel: ''
}

export const Large = Template.bind({})
Large.args = {
  label: 'Email',
  id: 'email5',
  size: 'large',
  appearance: 'neutral',
  widthBehavior: 'auto',
  borderStyle: 'square',
  icon: null,
  prefix: null,
  suffix: null,
  placeholder: 'Enter your email address',
  required: false,
  disabled: false,
  multiple: false,
  readonly: false,
  maxlength: null,
  minlength: null,
  autocomplete: true,
  autofocus: false,
  name: 'email5',
  inputmode: 'email',
  pattern: null,
  vModel: ''
}

export const Round = Template.bind({})
Round.args = {
  label: 'Email',
  id: 'email6',
  size: 'medium',
  appearance: 'neutral',
  widthBehavior: 'auto',
  borderStyle: 'round',
  icon: null,
  prefix: null,
  suffix: null,
  placeholder: 'Enter your email address',
  required: false,
  disabled: false,
  multiple: false,
  readonly: false,
  maxlength: null,
  minlength: null,
  autocomplete: true,
  autofocus: false,
  name: 'email6',
  inputmode: 'email',
  pattern: null,
  vModel: ''
}

export const Square = Template.bind({})
Square.args = {
  label: 'Email',
  id: 'email7',
  size: 'medium',
  appearance: 'neutral',
  widthBehavior: 'auto',
  borderStyle: 'square',
  icon: null,
  prefix: null,
  suffix: null,
  placeholder: 'Enter your email address',
  required: false,
  disabled: false,
  multiple: false,
  readonly: false,
  maxlength: null,
  minlength: null,
  autocomplete: true,
  autofocus: false,
  name: 'email7',
  inputmode: 'email',
  pattern: null,
  vModel: ''
}
