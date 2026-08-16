import { fn } from 'storybook/test'
import UaCheckbox from './ua-checkbox.tsx'

export default {
  title: 'Component Library/UA-Checkbox',
  component: UaCheckbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'A checkbox lets the user turn a single option on or off. Put several of them inside a `UaInputGroup` when they answer the same question.'
    }
  },
  decorators: [(Story) => <div style={{ width: '240px' }}>{Story()}</div>],
  argTypes: {
    size: {
      description: 'Sets the size of the checkbox.',
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    mode: {
      description: '`normal` puts the label after the checkbox, `reverse` puts it before.',
      control: 'inline-radio',
      options: ['normal', 'reverse']
    },
    label: {
      description: 'Sets the label. Without it, only the checkbox is rendered.',
      control: 'text'
    },
    value: {
      description: 'Sets the value submitted with the form when the checkbox is checked.',
      control: 'text'
    },
    name: {
      description: 'Sets the field name. Checkboxes sharing a `name` post as a list of values.',
      control: 'text'
    },
    id: {
      description: 'Sets the input id. Generated with `useId` when omitted.',
      control: 'text'
    },
    checked: {
      description: 'Controls the checkbox. Pair it with `onChange`; use `defaultChecked` instead.',
      control: 'boolean'
    },
    indeterminate: {
      description:
        'Shows the mixed state — the "some children checked" parent. Visual only: the posted value still follows `checked`.',
      control: 'boolean'
    },
    disabled: { description: 'Prevents interaction and dims the label.', control: 'boolean' },
    required: {
      description: 'Requires the checkbox to be checked before submitting.',
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
    label: 'Checkbox Label',
    value: 'on',
    name: 'checkbox',
    indeterminate: false,
    disabled: false,
    required: false,
    onChange: fn(),
    onInput: fn()
  }
}

export const Default = {}

export const Checked = {
  args: { defaultChecked: true }
}

export const Indeterminate = {
  name: 'Mixed state',
  args: { indeterminate: true }
}

export const Reverse = {
  name: 'With label on the left',
  args: { mode: 'reverse' }
}

export const Disabled = {
  args: { disabled: true }
}

export const Small = {
  args: { size: 'small' }
}

export const Medium = {
  args: { size: 'medium' }
}

export const Large = {
  args: { size: 'large' }
}
