import { fn } from '@storybook/test'
import './ua-button.js'
import { createPublicSource } from '../story-source.js'

export default {
  title: 'Component Library/UA-Button',
  component: 'ua-button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: { language: 'html', transform: createPublicSource('ua-button', ['click']) },
      subtitle:
        'A button triggers an action. It supports semantic types, visual appearances, icons, sizes and fluid width.'
    }
  },
  argTypes: {
    type: {
      description: 'Sets type.',
      control: 'select',
      options: ['button', 'submit', 'reset']
    },
    size: {
      description: 'Sets size.',
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    appearance: {
      description: 'Sets appearance.',
      control: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'success',
        'warning',
        'danger',
        'informative',
        'ghost'
      ]
    },
    widthBehavior: {
      description: 'Sets widthBehavior.',
      control: 'select',
      options: ['auto', 'full']
    },
    borderStyle: {
      description: 'Sets borderStyle.',
      control: 'select',
      options: ['square', 'round']
    },
    label: {
      description: 'Sets label.',
      control: 'text'
    },
    leftIcon: {
      description: 'Sets leftIcon.',
      control: 'text'
    },
    rightIcon: {
      description: 'Sets rightIcon.',
      control: 'text'
    },
    disabled: {
      description: 'Sets disabled.',
      control: 'boolean'
    },
    autofocus: {
      description: 'Sets autofocus.',
      control: 'boolean'
    },
    click: {
      description: 'Handles the click event.',
      action: 'click',
      table: {
        category: 'Events'
      }
    }
  },
  args: {
    type: 'button',
    size: 'medium',
    appearance: 'primary',
    widthBehavior: 'auto',
    borderStyle: 'square',
    label: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
    autofocus: false,
    click: fn()
  }
}

const render = (args) => {
  const element = document.createElement('ua-button')
  const events = {
    click: 'click'
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

export const Example = {
  render,
  args: {
    type: 'button',
    size: 'medium',
    appearance: 'primary',
    widthBehavior: 'auto',
    borderStyle: 'square',
    label: 'Button',
    leftIcon: 'rocket_launch',
    rightIcon: 'arrow_forward',
    disabled: false,
    autofocus: false
  }
}

export const Secondary = {
  render,
  args: {
    type: 'button',
    size: 'medium',
    appearance: 'secondary',
    widthBehavior: 'auto',
    borderStyle: 'square',
    label: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
    autofocus: false
  }
}

export const Tertiary = {
  render,
  args: {
    type: 'button',
    size: 'medium',
    appearance: 'tertiary',
    widthBehavior: 'auto',
    borderStyle: 'square',
    label: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
    autofocus: false
  }
}

export const Ghost = {
  render,
  args: {
    type: 'button',
    size: 'medium',
    appearance: 'ghost',
    widthBehavior: 'auto',
    borderStyle: 'square',
    label: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
    autofocus: false
  }
}

export const Success = {
  render,
  args: {
    type: 'button',
    size: 'medium',
    appearance: 'success',
    widthBehavior: 'auto',
    borderStyle: 'square',
    label: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
    autofocus: false
  }
}

export const Warning = {
  render,
  args: {
    type: 'button',
    size: 'medium',
    appearance: 'warning',
    widthBehavior: 'auto',
    borderStyle: 'square',
    label: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
    autofocus: false
  }
}

export const Danger = {
  render,
  args: {
    type: 'button',
    size: 'medium',
    appearance: 'danger',
    widthBehavior: 'auto',
    borderStyle: 'square',
    label: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
    autofocus: false
  }
}

export const Info = {
  render,
  args: {
    type: 'button',
    size: 'medium',
    appearance: 'informative',
    widthBehavior: 'auto',
    borderStyle: 'square',
    label: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
    autofocus: false
  }
}

export const Round = {
  render,
  args: {
    type: 'button',
    size: 'medium',
    appearance: 'primary',
    widthBehavior: 'auto',
    borderStyle: 'round',
    label: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
    autofocus: false
  }
}

export const Square = {
  render,
  args: {
    type: 'button',
    size: 'medium',
    appearance: 'primary',
    widthBehavior: 'auto',
    borderStyle: 'square',
    label: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
    autofocus: false
  }
}

export const Small = {
  render,
  args: {
    type: 'button',
    size: 'small',
    appearance: 'primary',
    widthBehavior: 'auto',
    borderStyle: 'square',
    label: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
    autofocus: false
  }
}

export const Medium = {
  render,
  args: {
    type: 'button',
    size: 'medium',
    appearance: 'primary',
    widthBehavior: 'auto',
    borderStyle: 'square',
    label: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
    autofocus: false
  }
}

export const Large = {
  render,
  args: {
    type: 'button',
    size: 'large',
    appearance: 'primary',
    widthBehavior: 'auto',
    borderStyle: 'square',
    label: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
    autofocus: false
  }
}

export const Auto = {
  render,
  args: {
    type: 'button',
    size: 'medium',
    appearance: 'primary',
    widthBehavior: 'auto',
    borderStyle: 'square',
    label: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
    autofocus: false
  }
}

export const Full = {
  render,
  args: {
    type: 'button',
    size: 'medium',
    appearance: 'primary',
    widthBehavior: 'full',
    borderStyle: 'square',
    label: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
    autofocus: false
  }
}

export const Disabled = {
  render,
  args: {
    type: 'button',
    size: 'medium',
    appearance: 'primary',
    widthBehavior: 'auto',
    borderStyle: 'square',
    label: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: true,
    autofocus: false
  }
}
