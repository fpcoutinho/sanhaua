import { fn } from 'storybook/test'
import UaRadio from './ua-radio.tsx'

export default {
  title: 'Component Library/UA-Radio',
  component: UaRadio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'A radio button lets the user pick a single option out of a set of mutually exclusive ones.'
    }
  },
  decorators: [(Story) => <div style={{ width: '200px' }}>{Story()}</div>],
  argTypes: {
    size: {
      description: 'Sets the size of the radio.',
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    mode: {
      description: '`normal` puts the label after the radio, `reverse` puts it before.',
      control: 'inline-radio',
      options: ['normal', 'reverse']
    },
    label: {
      description: 'Sets the label. Without it, only the radio is rendered.',
      control: 'text'
    },
    value: {
      description: 'Sets the value submitted with the form when this radio is the checked one.',
      control: 'text'
    },
    name: {
      description:
        'Groups radios together: radios sharing a `name` are mutually exclusive. Required for a real radio group.',
      control: 'text'
    },
    id: {
      description: 'Sets the input id. Generated with `useId` when omitted.',
      control: 'text'
    },
    checked: {
      description: 'Controls the radio. Pair it with `onChange`; use `defaultChecked` instead.',
      control: 'boolean'
    },
    disabled: {
      description: 'Prevents interaction and dims the label.',
      control: 'boolean'
    },
    required: {
      description: 'Requires one radio of the group to be checked before submitting.',
      control: 'boolean'
    },
    onChange: {
      description: 'Handles the change event.',
      action: 'change',
      table: { category: 'Events' }
    },
    onInput: {
      description: 'Handles the input event.',
      action: 'input',
      table: { category: 'Events' }
    }
  },
  args: {
    size: 'medium',
    mode: 'normal',
    label: 'Radio Label',
    value: 'on',
    name: 'radio',
    disabled: false,
    required: false,
    onChange: fn(),
    onInput: fn()
  }
}

export const Default = {}

export const Checked = {
  args: {
    defaultChecked: true
  }
}

export const Reverse = {
  name: 'With label on the left',
  args: {
    mode: 'reverse'
  }
}

export const Disabled = {
  args: {
    disabled: true
  }
}

export const Small = {
  args: {
    size: 'small'
  }
}

export const Medium = {
  args: {
    size: 'medium'
  }
}

export const Large = {
  args: {
    size: 'large'
  }
}
