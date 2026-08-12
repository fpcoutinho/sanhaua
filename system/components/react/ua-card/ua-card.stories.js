import { fn } from 'storybook/test'
import UaCard from './ua-card.tsx'

export default {
  title: 'Component Library/UA-Card',
  component: UaCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'A surface container. It only paints the surface — content and typography are up to the consumer.'
    }
  },
  argTypes: {
    behavior: {
      description: 'Sets the rendered element: `div`, `button` or `a`.',
      control: 'inline-radio',
      options: ['container', 'button', 'link']
    },
    children: {
      description: 'Sets the card content. Structure and typography are the consumer’s call.',
      control: 'text'
    },
    href: {
      description: 'Sets the link target. Only used when `behavior` is `link`.',
      control: 'text'
    },
    target: {
      description: 'Sets the anchor `target`. Only used when `behavior` is `link`.',
      control: 'text'
    },
    disabled: {
      description: 'Disables the card. Only used when `behavior` is `button`.',
      control: 'boolean'
    },
    className: {
      description: 'Appends custom classes to the root element.',
      control: 'text'
    },
    onClick: {
      description: 'Handles the click event for the `button` and `link` behaviors.',
      action: 'click',
      table: {
        category: 'Events'
      }
    }
  },
  args: {
    behavior: 'container',
    children: 'Card content.',
    onClick: fn()
  }
}

export const Default = {}

export const AsButton = {
  args: {
    behavior: 'button',
    children: 'O card inteiro é clicável e emite onClick.'
  }
}

export const AsButtonDisabled = {
  args: {
    behavior: 'button',
    disabled: true,
    children: 'Desabilitado: não emite onClick.'
  }
}

export const AsLink = {
  args: {
    behavior: 'link',
    href: '#',
    children: 'Navega para o href.'
  }
}

export const LongContent = {
  args: {
    children:
      'O card não impõe título, espaçamento interno entre blocos nem tipografia — quem usa monta o conteúdo com os tokens que precisar.'
  }
}
