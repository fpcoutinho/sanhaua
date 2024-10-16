import { fn } from '@storybook/test'
import uaInputTel from './ua-input-tel.vue'

export default {
  title: 'Component Library/UA-Input-Tel',
  component: uaInputTel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'Input elements of type tel are used to let the user enter and edit a telephone number.'
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
        'The maximum string length (measured in UTF-16 code units) that the user can enter into the tel input. This must be an integer value of 0 or higher.  This value must also be greater than or equal to the value of minlength.',
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
        'The minimum string length (measured in UTF-16 code units) that the user can enter into the tel input. This must be a non-negative integer value smaller than or equal to the value specified by maxlength.',
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
        name: 'string',
        required: false
      },
      defaultValue: true,
      description:
        'Hint for form autofill feature. The name of the attribute specifies what kind of information the input field expects.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'true'
        }
      },
      control: { type: 'select' },
      options: [
        'on',
        'off',
        'address-line1',
        'address-line2',
        'address-line3',
        'address-level1',
        'address-level2',
        'address-level3',
        'address-level4',
        'street-address',
        'country',
        'country-name',
        'postal-code',
        'name',
        'additional-name',
        'family-name',
        'given-name',
        'honoric-prefix',
        'honoric-suffix',
        'nickname',
        'organization-title',
        'username',
        'new-password',
        'current-password',
        'bday',
        'bday-day',
        'bday-month',
        'bday-year',
        'sex',
        'one-time-code',
        'organization',
        'cc-name',
        'cc-given-name',
        'cc-additional-name',
        'cc-family-name',
        'cc-number',
        'cc-exp',
        'cc-exp-month',
        'cc-exp-year',
        'cc-csc',
        'cc-type',
        'transaction-currency',
        'transaction-amount',
        'language',
        'url',
        'email',
        'photo',
        'tel',
        'tel-country-code',
        'tel-national',
        'tel-area-code',
        'tel-local',
        'tel-local-prefix',
        'tel-local-suffix',
        'tel-extension',
        'impp'
      ]
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
  components: { uaInputTel },
  setup() {
    return { args }
  },
  template: `
    <ua-input-tel
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
  label: 'Phone number',
  size: 'medium',
  appearance: 'neutral',
  widthBehavior: 'auto',
  borderStyle: 'square',
  icon: 'call',
  prefix: null,
  suffix: null,
  placeholder: 'Ex: (83) 90000-0000',
  id: 'tel',
  disabled: false,
  required: false,
  readonly: false,
  maxlength: null,
  minlength: null,
  autocomplete: null,
  autofocus: false,
  name: 'tel',
  inputmode: 'tel',
  pattern: null,
  vModel: ''
}

export const WithPrefixAndSuffix = Template.bind({})
WithPrefixAndSuffix.storyName = 'With prefix and suffix'
WithPrefixAndSuffix.args = {
  label: 'Phone number',
  id: 'tel1',
  size: 'medium',
  appearance: 'neutral',
  widthBehavior: 'auto',
  borderStyle: 'square',
  icon: 'call',
  prefix: '(83) 9',
  suffix: 'mobile',
  placeholder: null,
  required: false,
  disabled: false,
  readonly: false,
  maxlength: null,
  minlength: null,
  autocomplete: null,
  autofocus: false,
  name: 'tel1',
  inputmode: 'tel',
  pattern: null,
  vModel: ''
}

export const Small = Template.bind({})
Small.args = {
  label: 'Phone number',
  id: 'tel2',
  size: 'small',
  appearance: 'neutral',
  widthBehavior: 'auto',
  borderStyle: 'square',
  icon: null,
  prefix: null,
  suffix: null,
  placeholder: 'Ex: (11) 99999-9999',
  required: false,
  disabled: false,
  readonly: false,
  maxlength: null,
  minlength: null,
  autocomplete: null,
  autofocus: false,
  name: 'tel2',
  inputmode: 'tel',
  pattern: null,
  vModel: ''
}

export const Medium = Template.bind({})
Medium.args = {
  label: 'Phone number',
  id: 'tel3',
  size: 'medium',
  appearance: 'neutral',
  widthBehavior: 'auto',
  borderStyle: 'square',
  icon: null,
  prefix: null,
  suffix: null,
  placeholder: 'Ex: (11) 99999-9999',
  required: false,
  disabled: false,
  readonly: false,
  maxlength: null,
  minlength: null,
  autocomplete: null,
  autofocus: false,
  name: 'tel3',
  inputmode: 'tel',
  pattern: null,
  vModel: ''
}

export const Large = Template.bind({})
Large.args = {
  label: 'Phone number',
  id: 'tel4',
  size: 'large',
  appearance: 'neutral',
  widthBehavior: 'auto',
  borderStyle: 'square',
  icon: null,
  prefix: null,
  suffix: null,
  placeholder: 'Ex: (11) 99999-9999',
  required: false,
  disabled: false,
  readonly: false,
  maxlength: null,
  minlength: null,
  autocomplete: null,
  autofocus: false,
  name: 'tel4',
  inputmode: 'tel',
  pattern: null,
  vModel: ''
}

export const Round = Template.bind({})
Round.args = {
  label: 'Phone number',
  id: 'tel5',
  size: 'medium',
  appearance: 'neutral',
  widthBehavior: 'auto',
  borderStyle: 'round',
  icon: null,
  prefix: null,
  suffix: null,
  placeholder: 'Ex: (11) 99999-9999',
  required: false,
  disabled: false,
  readonly: false,
  maxlength: null,
  minlength: null,
  autocomplete: null,
  autofocus: false,
  name: 'tel5',
  inputmode: 'tel',
  pattern: null,
  vModel: ''
}

export const Square = Template.bind({})
Square.args = {
  label: 'Phone number',
  id: 'tel6',
  size: 'medium',
  appearance: 'neutral',
  widthBehavior: 'auto',
  borderStyle: 'square',
  icon: null,
  prefix: null,
  suffix: null,
  placeholder: 'Ex: (11) 99999-9999',
  required: false,
  disabled: false,
  readonly: false,
  maxlength: null,
  minlength: null,
  autocomplete: null,
  autofocus: false,
  name: 'tel6',
  inputmode: 'tel',
  pattern: null,
  vModel: ''
}
