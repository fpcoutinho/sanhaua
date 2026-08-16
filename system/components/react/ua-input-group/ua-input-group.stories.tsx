import UaCheckbox from '../ua-checkbox/ua-checkbox.tsx'
import UaRadio from '../ua-radio/ua-radio.tsx'
import UaInputGroup from './ua-input-group.tsx'

export default {
  title: 'Component Library/UA-Input-Group',
  component: UaInputGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'A capsule for controls that answer the same question. It renders a real `fieldset`/`legend`, which is what makes a screen reader announce the question before each option, and owns the shared hint and error message.'
    }
  },
  decorators: [(Story) => <div style={{ width: '320px' }}>{Story()}</div>],
  argTypes: {
    legend: {
      description: 'The question the group answers. Rendered as the `<legend>`.',
      control: 'text'
    },
    orientation: {
      description: 'Stacks the options in a column or lays them out in a wrapping row.',
      control: 'inline-radio',
      options: ['vertical', 'horizontal']
    },
    hint: { description: 'Helper text wired through `aria-describedby`.', control: 'text' },
    error: {
      description: 'Error message. Sets `aria-invalid` and announces via `role="alert"`.',
      control: 'text'
    },
    required: { description: 'Shows the asterisk next to the legend.', control: 'boolean' },
    disabled: {
      description: 'Disables every control inside — native `fieldset` behaviour.',
      control: 'boolean'
    },
    id: {
      description: 'Sets the fieldset id and the base of the hint/error ids.',
      control: 'text'
    },
    children: { description: 'The controls themselves.', control: false }
  },
  args: {
    legend: 'Quais exames foram solicitados?',
    orientation: 'vertical',
    required: false,
    disabled: false
  }
}

const checkboxes = [
  { value: 'hemograma', label: 'Hemograma' },
  { value: 'glicemia', label: 'Glicemia' },
  { value: 'colesterol', label: 'Colesterol' }
]

export const Default = {
  render: (args) => (
    <UaInputGroup {...args}>
      {checkboxes.map((option) => (
        <UaCheckbox key={option.value} label={option.label} name="exames" value={option.value} />
      ))}
    </UaInputGroup>
  )
}

export const WithHint = {
  name: 'With hint',
  ...Default,
  args: { hint: 'Selecione todos os que se aplicam.' }
}

export const WithError = {
  name: 'With error',
  ...Default,
  args: { error: 'Escolha pelo menos um exame.', required: true }
}

export const Horizontal = {
  ...Default,
  args: { orientation: 'horizontal' }
}

export const Disabled = {
  ...Default,
  args: { disabled: true }
}

export const WithRadios = {
  name: 'Wrapping radios',
  args: {
    legend: 'Qual o turno da coleta?',
    role: 'radiogroup',
    orientation: 'horizontal'
  },
  render: (args) => (
    <UaInputGroup {...args}>
      <UaRadio label="Manhã" name="turno" value="manha" />
      <UaRadio label="Tarde" name="turno" value="tarde" />
      <UaRadio label="Noite" name="turno" value="noite" />
    </UaInputGroup>
  )
}
