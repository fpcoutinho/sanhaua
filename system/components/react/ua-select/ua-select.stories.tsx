import { fn } from 'storybook/test'
import UaSelect, { type SelectOption } from './ua-select.tsx'

const options: SelectOption[] = [
  { value: 'draft', label: 'Rascunho' },
  { value: 'in_review', label: 'Em revisão' },
  { value: 'approved', label: 'Aprovado' },
  { value: 'archived', label: 'Arquivado', disabled: true }
]

export default {
  title: 'Component Library/UA-Select',
  component: UaSelect,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'A native select wearing the field anatomy of UaInputField. Native on purpose: it keeps the platform keyboard handling, type-ahead and mobile picker.'
    }
  },
  argTypes: {
    options: {
      description: 'Choices, in render order. Each has a `value`, a `label` and may be `disabled`.',
      control: false
    },
    label: {
      description:
        'Sets the field label. Omit it for a bare control and pass `aria-label` instead — the wrapper degrades from `<label>` to `<div>`.',
      control: 'text'
    },
    placeholder: {
      description: 'Adds a leading option with an empty value — the "no choice" row.',
      control: 'text'
    },
    appearance: {
      description: 'Sets the outline colour. Forced to `error` whenever `error` is set.',
      control: 'inline-radio',
      options: ['neutral', 'success', 'error']
    },
    size: {
      description: 'Sets the field size.',
      control: 'inline-radio',
      options: ['small', 'medium', 'large']
    },
    widthBehavior: {
      description: 'Sets how the field takes width.',
      control: 'inline-radio',
      options: ['auto', 'full']
    },
    borderStyle: {
      description: 'Sets the corner style.',
      control: 'inline-radio',
      options: ['square', 'round']
    },
    icon: { description: 'Material Symbols name rendered before the control.', control: 'text' },
    error: {
      description: 'Error message. Sets `aria-invalid` and announces via `role="alert"`.',
      control: 'text'
    },
    hint: { description: 'Helper text wired through `aria-describedby`.', control: 'text' },
    required: {
      description: 'Marks the field required and shows the asterisk.',
      control: 'boolean'
    },
    disabled: { description: 'Disables the control.', control: 'boolean' },
    onChange: {
      description: 'Fires when the selection changes.',
      action: 'change',
      table: { category: 'Events' }
    }
  },
  args: {
    onChange: fn()
  }
}

export const Default = {
  args: {
    label: 'Situação',
    options,
    placeholder: 'Todas as situações'
  }
}

export const WithHint = {
  args: {
    label: 'Situação',
    options,
    hint: 'Filtra a listagem pela situação do laudo.'
  }
}

export const WithError = {
  args: {
    label: 'Situação',
    options,
    error: 'Escolha uma situação.'
  }
}

export const Unlabelled = {
  args: {
    options,
    placeholder: 'Todas as situações',
    'aria-label': 'Situação',
    icon: 'filter_list'
  },
  parameters: {
    docs: {
      description: {
        story:
          'No visible label — for a filter bar or toolbar, where the surrounding context already says what the control does. `aria-label` carries the accessible name.'
      }
    }
  }
}

export const Required = {
  args: {
    label: 'Situação',
    options,
    required: true,
    icon: 'filter_list'
  }
}
