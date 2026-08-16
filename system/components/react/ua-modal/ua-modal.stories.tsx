import { useState } from 'react'
import { fn } from 'storybook/test'
import UaButton from '../ua-button/ua-button.tsx'
import UaModal from './ua-modal.tsx'

export default {
  title: 'Component Library/UA-Modal',
  component: UaModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      subtitle:
        'A dialog over a dimmed overlay, with three optional regions — header, content and footer. Below the `sm` breakpoint it always renders as a bottom sheet, whatever `mode` says. Closes on the overlay, on `Escape` and on the X.',
      // The overlay is `position: fixed`, so it anchors to the viewport of whatever
      // document it lives in. Rendered inline, every open story would stack on top of
      // the docs page. Each story gets its own frame instead.
      story: { inline: false, height: '420px' }
    }
  },
  argTypes: {
    isOpen: { description: 'Controls visibility. Nothing renders while false.', control: 'boolean' },
    onClose: {
      description: 'Called by the overlay, `Escape` and the close button.',
      action: 'close',
      table: { category: 'Events' }
    },
    mode: {
      description:
        'Desktop placement: centred or docked to the bottom. Ignored below the `sm` breakpoint, where the modal is always a bottom sheet.',
      control: 'inline-radio',
      options: ['centered', 'bottom']
    },
    size: {
      description: 'Caps the dialog width from the `sm` breakpoint up.',
      control: 'inline-radio',
      options: ['small', 'medium', 'large']
    },
    title: {
      description: 'Renders the default header and wires `aria-labelledby`.',
      control: 'text'
    },
    header: {
      description: 'Replaces the whole header region. Takes precedence over `title`.',
      control: false
    },
    footer: {
      description: 'Footer region — usually the actions. Not rendered when empty.',
      control: false
    },
    children: {
      description: 'Content region. Scrolls vertically when it outgrows the dialog.',
      control: false
    },
    showClose: { description: 'Shows the X in the top-right corner.', control: 'boolean' },
    closeLabel: { description: 'Accessible name of the close button.', control: 'text' },
    closeOnOverlay: { description: 'Closes when the overlay is clicked.', control: 'boolean' },
    closeOnEscape: { description: 'Closes when `Escape` is pressed.', control: 'boolean' }
  },
  args: {
    isOpen: true,
    mode: 'centered',
    size: 'medium',
    title: 'Confirmar envio do laudo',
    showClose: true,
    closeLabel: 'Fechar',
    closeOnOverlay: true,
    closeOnEscape: true,
    onClose: fn(),
    children: <p>Depois de enviado, o laudo não pode mais ser editado.</p>
  }
}

const paragraphs = Array.from({ length: 8 }, (_, index) => (
  <p key={`filler-${index}`}>
    Depois de enviado, o laudo não pode mais ser editado. Revise os dados antes de confirmar.
  </p>
))

const actions = (
  <>
    <UaButton appearance="tertiary">Cancelar</UaButton>
    <UaButton appearance="primary">Confirmar</UaButton>
  </>
)

export const Default = {}

export const WithFooter = {
  name: 'With footer actions',
  args: { footer: actions }
}

export const ScrollingContent = {
  name: 'Scrolling content',
  args: { children: paragraphs, footer: actions }
}

export const BottomSheet = {
  name: 'Bottom mode',
  args: {
    mode: 'bottom',
    children: <p>No mobile este é o layout de qualquer modal.</p>
  }
}

export const ContentOnly = {
  name: 'Content only',
  args: {
    title: undefined,
    children: <p>Sem header e sem footer: só a região de conteúdo vai para a DOM.</p>
  }
}

export const Small = {
  args: { size: 'small', footer: actions }
}

export const Large = {
  args: { size: 'large', footer: actions }
}

export const WithTrigger = {
  name: 'Opening from a trigger',
  parameters: {
    docs: {
      description: {
        story:
          'The real wiring: the modal is a controlled component, so the page owns `isOpen`. Every other story pins it open to show the layout.'
      }
    }
  },
  args: { isOpen: false },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen)

    return (
      <div style={{ padding: '16px' }}>
        <UaButton onClick={() => setIsOpen(true)}>Abrir modal</UaButton>
        <UaModal
          {...args}
          isOpen={isOpen}
          onClose={() => {
            args.onClose?.()
            setIsOpen(false)
          }}
        />
      </div>
    )
  }
}
