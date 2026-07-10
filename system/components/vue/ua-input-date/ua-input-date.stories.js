import { fn } from '@storybook/test'
import uaInputDate from './ua-input-date.vue'

export default {
  title: 'Component Library/UA-Input-Date',
  component: uaInputDate,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'Input elements of type "date" create input fields that let the user enter a date. The appearance of the date picker input UI varies based on the browser and operating system. The value is normalized to the format yyyy-mm-dd.'
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
    max: {
      name: 'max',
      type: {
        name: 'number',
        required: false
      },
      defaultValue: null,
      description: `The latest date to accept. If the value entered into the element occurs afterward, the element fails constraint validation. If the value of the max attribute isn't a possible date string in the format yyyy-mm-dd, then the element has no maximum date value.
        If both the max and min attributes are set, this value must be a date string later than or equal to the one in the min attribute.`,
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: {
          summary: null
        }
      }
    },
    min: {
      name: 'min',
      type: {
        name: 'number',
        required: false
      },
      defaultValue: null,
      description: `The earliest date to accept. If the value entered into the element occurs beforehand, the element fails constraint validation. If the value of the min attribute isn't a possible date string in the format yyyy-mm-dd, then the element has no minimum date value.
      If both the max and min attributes are set, this value must be a date string earlier than or equal to the one in the max attribute.`,
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: {
          summary: null
        }
      }
    },
    step: {
      name: 'step',
      type: {
        name: ['number', 'string'],
        required: false
      },
      defaultValue: null,
      description: `The step attribute is a number that specifies the granularity that the value must adhere to, or the special value any, which is described below. Only values which are equal to the basis for stepping (min if specified, value otherwise, and an appropriate default value if neither of those is provided) are valid.
      For date inputs, the value of step is given in days; and is treated as a number of milliseconds equal to 86,400,000 times the step value (the underlying numeric value is in milliseconds). The default value of step is 1, indicating 1 day.`,
      table: {
        type: {
          summary: ['number', 'string']
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
  components: { uaInputDate },
  setup() {
    return { args }
  },
  template: `
    <ua-input-date
      :label=args.label
      :id=args.id
      :size=args.size
      :appearance=args.appearance
      :width-behavior=args.widthBehavior
      :border-style=args.borderStyle
      :icon=args.icon
      :prefix=args.prefix
      :required=args.required
      :disabled=args.disabled
      :readonly=args.readonly
      :max=args.max
      :min=args.min
      :autocomplete=args.autocomplete
      :autofocus=args.autofocus
      :name=args.name
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
  label: 'Date',
  size: 'medium',
  appearance: 'neutral',
  widthBehavior: 'auto',
  borderStyle: 'square',
  icon: null,
  prefix: null,
  id: 'date1',
  disabled: false,
  required: false,
  readonly: false,
  max: null,
  min: null,
  autocomplete: true,
  autofocus: false,
  name: 'date1',
  vModel: ''
}

export const WithPrefix = Template.bind({})
WithPrefix.storyName = 'With prefix'
WithPrefix.args = {
  label: 'Date',
  id: 'date2',
  size: 'medium',
  appearance: 'neutral',
  widthBehavior: 'auto',
  borderStyle: 'square',
  icon: null,
  prefix: 'João Pessoa, ',
  placeholder: null,
  required: false,
  disabled: false,
  readonly: false,
  max: null,
  min: null,
  autocomplete: true,
  autofocus: false,
  name: 'date2',
  vModel: ''
}

export const Small = Template.bind({})
Small.args = {
  label: 'Date',
  id: 'date3',
  size: 'small',
  appearance: 'neutral',
  widthBehavior: 'auto',
  borderStyle: 'square',
  icon: null,
  prefix: null,
  required: false,
  disabled: false,
  readonly: false,
  max: null,
  min: null,
  autocomplete: true,
  autofocus: false,
  name: 'date3',
  vModel: ''
}

export const Medium = Template.bind({})
Medium.args = {
  label: 'Date',
  id: 'date4',
  size: 'medium',
  appearance: 'neutral',
  widthBehavior: 'auto',
  borderStyle: 'square',
  icon: null,
  prefix: null,
  required: false,
  disabled: false,
  readonly: false,
  max: null,
  min: null,
  autocomplete: true,
  autofocus: false,
  name: 'date4',
  vModel: ''
}

export const Large = Template.bind({})
Large.args = {
  label: 'Date',
  id: 'date5',
  size: 'large',
  appearance: 'neutral',
  widthBehavior: 'auto',
  borderStyle: 'square',
  icon: null,
  prefix: null,
  required: false,
  disabled: false,
  readonly: false,
  max: null,
  min: null,
  autocomplete: true,
  autofocus: false,
  name: 'date5',
  vModel: ''
}

export const Round = Template.bind({})
Round.args = {
  label: 'Date',
  id: 'date6',
  size: 'medium',
  appearance: 'neutral',
  widthBehavior: 'auto',
  borderStyle: 'round',
  icon: null,
  prefix: null,
  required: false,
  disabled: false,
  readonly: false,
  max: null,
  min: null,
  autocomplete: true,
  autofocus: false,
  name: 'date6',
  vModel: ''
}

export const Square = Template.bind({})
Square.args = {
  label: 'Date',
  id: 'date7',
  size: 'medium',
  appearance: 'neutral',
  widthBehavior: 'auto',
  borderStyle: 'square',
  icon: null,
  prefix: null,
  required: false,
  disabled: false,
  readonly: false,
  max: null,
  min: null,
  autocomplete: true,
  autofocus: false,
  name: 'date7',
  vModel: ''
}
