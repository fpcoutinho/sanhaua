import { fn } from 'storybook/test'
import UaAccordion, { type AccordionItem } from './ua-accordion.tsx'

const items: AccordionItem[] = [
  {
    id: 'what',
    title: 'O que é um laudo de inspeção elétrica?',
    content: <p>Um registro técnico da conformidade de uma instalação com a NBR 5410.</p>
  },
  {
    id: 'who',
    title: 'Quem pode emitir?',
    content: <p>Profissional habilitado, com registro no conselho competente.</p>
  },
  {
    id: 'soon',
    title: 'Em breve',
    content: <p>Este item está desabilitado.</p>,
    disabled: true
  }
]

export default {
  title: 'Component Library/UA-Accordion',
  component: UaAccordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'A disclosure list. Closed panels are unmounted rather than hidden, so their content stays out of the tab order and the accessibility tree.'
    }
  },
  argTypes: {
    items: {
      description:
        'Panels, in render order. Each has an `id`, a `title`, `content` and may be `disabled`.',
      control: false
    },
    appearance: {
      description:
        '`boxed` frames the whole list. `underlined` drops the frame and separates items with a single rule under each one.',
      control: 'inline-radio',
      options: ['boxed', 'underlined']
    },
    allowMultiple: {
      description: 'Allows more than one panel open at a time.',
      control: 'boolean'
    },
    defaultOpen: {
      description: 'Ids open on first render. Ignored afterwards — the component owns the state.',
      control: false
    },
    className: { description: 'Appended to the root class list.', control: 'text' },
    onToggle: {
      description: 'Fires with the panel id and its next open state.',
      action: 'toggle',
      table: { category: 'Events' }
    }
  },
  args: {
    onToggle: fn()
  }
}

export const Boxed = {
  args: { items, defaultOpen: ['what'] }
}

export const Underlined = {
  args: { items, appearance: 'underlined', defaultOpen: ['what'] }
}

export const AllowMultiple = {
  args: { items, allowMultiple: true, defaultOpen: ['what', 'who'] }
}
