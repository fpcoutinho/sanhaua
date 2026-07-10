import { fn } from '@storybook/test'
import './ua-toast.js'

export default {
  title: 'Component Library/UA-Toast',
  component: 'ua-toast',
  tags: ['autodocs'],
  parameters: {
    docs: { subtitle: 'A non-modal message with semantic appearance and a dismiss action.' }
  },
  argTypes: {
    appearance: {
      description: 'Sets appearance.',
      control: 'select',
      options: ['neutral', 'success', 'warning', 'danger', 'informative']
    },
    title: {
      description: 'Sets title.',
      control: 'text'
    },
    message: {
      description: 'Sets message.',
      control: 'text'
    },
    dismiss: {
      description: 'Handles the dismiss event.',
      action: 'dismiss',
      table: {
        category: 'Events'
      }
    }
  },
  args: {
    appearance: 'neutral',
    title: 'Default Toast',
    message: 'This is a default toast message.',
    dismiss: fn()
  }
}

const render = (args) => {
  const element = document.createElement('ua-toast')
  const events = {
    dismiss: 'dismiss'
  }
  for (const [key, value] of Object.entries(args)) {
    if (key in events) {
      element.addEventListener(events[key], value)
      continue
    }
    const attribute = key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
    if (value === false || value == null) element.removeAttribute(attribute)
    else if (value === true) element.setAttribute(attribute, '')
    else element.setAttribute(attribute, String(value))
  }
  return element
}

export const Default = {
  render,
  args: {
    appearance: 'neutral',
    title: 'Default Toast',
    message: 'This is a default toast message.'
  }
}

export const Success = {
  render,
  args: {
    appearance: 'success',
    title: 'Success Toast',
    message: 'The operation completed successfully.'
  }
}

export const Warning = {
  render,
  args: {
    appearance: 'warning',
    title: 'Warning Toast',
    message: 'Review this information before continuing.'
  }
}

export const Danger = {
  render,
  args: {
    appearance: 'danger',
    title: 'Danger Toast',
    message: 'The operation could not be completed.'
  }
}

export const Info = {
  render,
  args: {
    appearance: 'informative',
    title: 'Info Toast',
    message: 'Here is some useful information.'
  }
}
