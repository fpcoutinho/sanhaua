import { fn } from 'storybook/test'
import UaButtonIcon from './ua-button-icon.tsx'

export default {
  title: 'Component Library/UA-Button-Icon',
  component: UaButtonIcon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'A button that is only an icon. It exists because UaButton pads its sides more than its top and bottom, which makes an icon-only UaButton a lopsided rectangle rather than a square.'
    }
  },
  argTypes: {
    icon: { description: 'Material Symbols name.', control: 'text' },
    label: {
      description:
        'Accessible name. Required — an icon carries no text, so this becomes both `aria-label` and `title`.',
      control: 'text'
    },
    appearance: {
      description: 'Sets the colour role. Same vocabulary as UaButton.',
      control: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'ghost',
        'success',
        'danger',
        'warning',
        'informative'
      ]
    },
    size: {
      description: 'Sets the button size.',
      control: 'inline-radio',
      options: ['small', 'medium', 'large']
    },
    borderStyle: {
      description: 'Sets the corner style. `round` gives a circle.',
      control: 'inline-radio',
      options: ['square', 'round']
    },
    disabled: { description: 'Disables the button.', control: 'boolean' },
    onClick: { description: 'Fires on click.', action: 'click', table: { category: 'Events' } }
  },
  args: {
    onClick: fn()
  }
}

export const Default = {
  args: { icon: 'edit', label: 'Editar' }
}

export const Round = {
  args: { icon: 'dark_mode', label: 'Ativar tema escuro', appearance: 'ghost', borderStyle: 'round' }
}

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <UaButtonIcon icon="edit" label="Editar" size="small" />
      <UaButtonIcon icon="edit" label="Editar" size="medium" />
      <UaButtonIcon icon="edit" label="Editar" size="large" />
    </div>
  )
}
