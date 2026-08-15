import UaBadge from './ua-badge.tsx'

export default {
  title: 'Component Library/UA-Badge',
  component: UaBadge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'A compact status label. It is a label, not a control — if it needs to do something, reach for UaButton instead.'
    }
  },
  argTypes: {
    children: { description: 'Sets the badge text.', control: 'text' },
    appearance: {
      description: 'Sets the colour role. Same vocabulary as UaToast and UaAlert.',
      control: 'inline-radio',
      options: ['neutral', 'success', 'warning', 'danger', 'informative']
    },
    size: {
      description: 'Sets the badge size.',
      control: 'inline-radio',
      options: ['small', 'medium', 'large']
    },
    icon: { description: 'Material Symbols name rendered before the text.', control: 'text' },
    className: { description: 'Appended to the root class list.', control: 'text' }
  }
}

export const Default = {
  args: { children: 'Rascunho' }
}

export const Appearances = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <UaBadge appearance="neutral">Rascunho</UaBadge>
      <UaBadge appearance="informative">Em revisão</UaBadge>
      <UaBadge appearance="success">Aprovado</UaBadge>
      <UaBadge appearance="warning">Pendente</UaBadge>
      <UaBadge appearance="danger">Reprovado</UaBadge>
    </div>
  )
}

export const WithIcon = {
  args: { children: 'Aprovado', appearance: 'success', icon: 'check_circle' }
}
