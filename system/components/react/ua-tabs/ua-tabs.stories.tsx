import { useState } from 'react'
import { fn } from 'storybook/test'
import UaTabs, { type TabItem, type UaTabsProps } from './ua-tabs.tsx'

const items: TabItem[] = [
  { id: 'personal', label: 'Dados pessoais', panelId: 'personal-panel' },
  { id: 'security', label: 'Acesso e segurança', panelId: 'security-panel' },
  { id: 'billing', label: 'Cobrança', panelId: 'billing-panel', disabled: true }
]

const panels: Record<string, string> = {
  personal: 'Nome, título profissional e tema.',
  security: 'E-mail e troca de senha.',
  billing: 'Este item está desabilitado.'
}

function Controlled({ onChange, ...args }: UaTabsProps) {
  const [value, setValue] = useState(args.value)
  const selected = args.items.find((item) => item.id === value)

  return (
    <>
      <UaTabs
        {...args}
        value={value}
        onChange={(id) => {
          setValue(id)
          onChange(id)
        }}
      />

      {selected?.panelId === undefined ? null : (
        <div
          aria-labelledby={`${selected.panelId}-tab`}
          id={selected.panelId}
          role="tabpanel"
          tabIndex={0}
        >
          <p>{panels[selected.id]}</p>
        </div>
      )}
    </>
  )
}

export default {
  title: 'Component Library/UA-Tabs',
  component: UaTabs,
  tags: ['autodocs'],
  render: Controlled,
  parameters: {
    docs: {
      subtitle:
        'A tablist, and nothing else — the panel is the caller\'s markup. Controlled: the selected id comes in as `value` and every change goes out through `onChange`. The tablist is a single tab stop; arrow keys, Home and End move between tabs and skip disabled ones.'
    }
  },
  argTypes: {
    items: {
      description:
        "Tabs, in render order. Each has an `id` and a `label`, and may carry an `icon`, a `panelId` and `disabled`. `panelId` wires `aria-controls` and gives the tab the id `${panelId}-tab`, which the panel points back at with `aria-labelledby`.",
      control: false
    },
    value: { description: 'Id of the selected tab.', control: false },
    label: { description: 'Accessible name of the tablist. Required.', control: 'text' },
    appearance: {
      description:
        '`underlined` rules the selected tab from below. `pill` sits the tabs in a track and fills the selected one.',
      control: 'inline-radio',
      options: ['underlined', 'pill']
    },
    activation: {
      description:
        '`automatic` selects whatever the arrow keys focus. `manual` only moves focus — selection waits for Enter, Space or a click, which is what a panel holding an unsaved form wants.',
      control: 'inline-radio',
      options: ['automatic', 'manual']
    },
    size: { control: 'inline-radio', options: ['small', 'medium', 'large'] },
    widthBehavior: {
      description: '`full` splits the available width evenly between the tabs.',
      control: 'inline-radio',
      options: ['auto', 'full']
    },
    className: { description: 'Appended to the root class list.', control: 'text' },
    onChange: {
      description: 'Fires with the id of the tab being selected.',
      action: 'change',
      table: { category: 'Events' }
    }
  },
  args: {
    items,
    value: 'personal',
    label: 'Seções do perfil',
    onChange: fn()
  }
}

export const Underlined = {}

export const Pill = {
  args: { appearance: 'pill' }
}

export const FullWidth = {
  args: { appearance: 'pill', widthBehavior: 'full' }
}

export const ManualActivation = {
  args: { activation: 'manual' }
}

export const WithIcons = {
  args: {
    items: items.map((item, index) => ({
      ...item,
      icon: ['person', 'lock', 'credit_card'][index]
    }))
  }
}
