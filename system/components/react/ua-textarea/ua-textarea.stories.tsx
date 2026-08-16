import { fn } from 'storybook/test'
import UaTextarea from './ua-textarea.tsx'

export default {
  title: 'Component Library/UA-Textarea',
  component: UaTextarea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'Multi-line text field. Wears the same anatomy and accessibility wiring as `UaInputField` — `aria-invalid`, `aria-describedby`, `role="alert"` — so the two behave alike on the same screen.'
    }
  },
  decorators: [(Story) => <div style={{ width: '360px' }}>{Story()}</div>],
  argTypes: {
    label: {
      description:
        'Sets the field label. Omit it for a bare control and pass `aria-label` instead — the wrapper degrades from `<label>` to `<div>`.',
      control: 'text'
    },
    placeholder: { description: 'Sets the placeholder text.', control: 'text' },
    rows: { description: 'Sets the visible number of lines.', control: 'number' },
    resize: {
      description: 'Sets which directions the user may drag the field.',
      control: 'inline-radio',
      options: ['none', 'vertical', 'both']
    },
    appearance: {
      description: 'Sets the outline colour. Forced to `error` whenever `error` is set.',
      control: 'inline-radio',
      options: ['neutral', 'success', 'error']
    },
    size: {
      description: 'Sets the field padding and type scale.',
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
    error: {
      description: 'Error message. Sets `aria-invalid` and announces via `role="alert"`.',
      control: 'text'
    },
    hint: { description: 'Helper text wired through `aria-describedby`.', control: 'text' },
    maxLength: { description: 'Caps the number of characters.', control: 'number' },
    required: {
      description: 'Marks the field required and shows the asterisk.',
      control: 'boolean'
    },
    disabled: { description: 'Disables the control.', control: 'boolean' },
    readOnly: { description: 'Blocks edits but keeps the text selectable.', control: 'boolean' },
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
    label: 'Observações',
    placeholder: 'Descreva o que foi observado',
    rows: 3,
    resize: 'vertical',
    appearance: 'neutral',
    size: 'medium',
    widthBehavior: 'full',
    borderStyle: 'square',
    required: false,
    disabled: false,
    readOnly: false,
    onChange: fn(),
    onInput: fn()
  }
}

export const Default = {}

export const WithHint = {
  name: 'With hint',
  args: { hint: 'Máximo de 500 caracteres.', maxLength: 500 }
}

export const WithError = {
  name: 'With error',
  args: { error: 'Descreva a observação antes de enviar.', required: true }
}

export const NoResize = {
  name: 'Fixed height',
  args: { resize: 'none', rows: 6 }
}

export const Disabled = {
  args: { disabled: true, value: 'Conteúdo bloqueado para edição.' }
}

export const Small = {
  args: { size: 'small' }
}

export const Large = {
  args: { size: 'large' }
}
