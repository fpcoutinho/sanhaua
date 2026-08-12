import { fn } from 'storybook/test'
import UaButton from './ua-button.tsx'

export default {
  title: 'Component Library/UA-Button',
  component: UaButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'A button triggers an action. It supports semantic types, visual appearances, icons, sizes and fluid width.'
    }
  },
  argTypes: {
    behavior: {
      description: 'Renders the component as a <button> or as an <a> styled like a button.',
      control: 'select',
      options: ['button', 'link']
    },
    href: {
      description: 'Sets href. Only used when behavior is "link".',
      control: 'text'
    },
    target: {
      description: 'Sets target. Only used when behavior is "link".',
      control: 'select',
      options: [undefined, '_self', '_blank', '_parent', '_top']
    },
    rel: {
      description:
        'Sets rel. Only used when behavior is "link". Defaults to "noopener noreferrer" when target is "_blank".',
      control: 'text'
    },
    download: {
      description: 'Sets download. Only used when behavior is "link".',
      control: 'text'
    },
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
    children: {
      description: 'Sets children.',
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
    autoFocus: {
      description: 'Sets autoFocus.',
      control: 'boolean'
    },
    onClick: {
      description: 'Handles the click event.',
      action: 'click',
      table: {
        category: 'Events'
      }
    }
  },
  args: {
    behavior: 'button',
    type: 'button',
    size: 'medium',
    appearance: 'primary',
    widthBehavior: 'auto',
    borderStyle: 'square',
    children: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
    autoFocus: false,
    onClick: fn()
  }
}

export const Link = {
  args: {
    behavior: 'link',
    href: 'https://example.com',
    target: '_blank',
    size: 'medium',
    appearance: 'primary',
    widthBehavior: 'auto',
    borderStyle: 'square',
    children: 'Link',
    leftIcon: null,
    rightIcon: 'open_in_new',
    disabled: false
  }
}

export const LinkDisabled = {
  args: {
    behavior: 'link',
    href: 'https://example.com',
    size: 'medium',
    appearance: 'primary',
    widthBehavior: 'auto',
    borderStyle: 'square',
    children: 'Link',
    leftIcon: null,
    rightIcon: null,
    disabled: true
  }
}

export const Example = {
  args: {
    type: 'button',
    size: 'medium',
    appearance: 'primary',
    widthBehavior: 'auto',
    borderStyle: 'square',
    children: 'Button',
    leftIcon: 'rocket_launch',
    rightIcon: 'arrow_forward',
    disabled: false,
    autoFocus: false
  }
}

export const Secondary = {
  args: {
    type: 'button',
    size: 'medium',
    appearance: 'secondary',
    widthBehavior: 'auto',
    borderStyle: 'square',
    children: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
    autoFocus: false
  }
}

export const Tertiary = {
  args: {
    type: 'button',
    size: 'medium',
    appearance: 'tertiary',
    widthBehavior: 'auto',
    borderStyle: 'square',
    children: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
    autoFocus: false
  }
}

export const Ghost = {
  args: {
    type: 'button',
    size: 'medium',
    appearance: 'ghost',
    widthBehavior: 'auto',
    borderStyle: 'square',
    children: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
    autoFocus: false
  }
}

export const Success = {
  args: {
    type: 'button',
    size: 'medium',
    appearance: 'success',
    widthBehavior: 'auto',
    borderStyle: 'square',
    children: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
    autoFocus: false
  }
}

export const Warning = {
  args: {
    type: 'button',
    size: 'medium',
    appearance: 'warning',
    widthBehavior: 'auto',
    borderStyle: 'square',
    children: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
    autoFocus: false
  }
}

export const Danger = {
  args: {
    type: 'button',
    size: 'medium',
    appearance: 'danger',
    widthBehavior: 'auto',
    borderStyle: 'square',
    children: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
    autoFocus: false
  }
}

export const Info = {
  args: {
    type: 'button',
    size: 'medium',
    appearance: 'informative',
    widthBehavior: 'auto',
    borderStyle: 'square',
    children: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
    autoFocus: false
  }
}

export const Round = {
  args: {
    type: 'button',
    size: 'medium',
    appearance: 'primary',
    widthBehavior: 'auto',
    borderStyle: 'round',
    children: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
    autoFocus: false
  }
}

export const Square = {
  args: {
    type: 'button',
    size: 'medium',
    appearance: 'primary',
    widthBehavior: 'auto',
    borderStyle: 'square',
    children: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
    autoFocus: false
  }
}

export const Small = {
  args: {
    type: 'button',
    size: 'small',
    appearance: 'primary',
    widthBehavior: 'auto',
    borderStyle: 'square',
    children: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
    autoFocus: false
  }
}

export const Medium = {
  args: {
    type: 'button',
    size: 'medium',
    appearance: 'primary',
    widthBehavior: 'auto',
    borderStyle: 'square',
    children: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
    autoFocus: false
  }
}

export const Large = {
  args: {
    type: 'button',
    size: 'large',
    appearance: 'primary',
    widthBehavior: 'auto',
    borderStyle: 'square',
    children: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
    autoFocus: false
  }
}

export const Auto = {
  args: {
    type: 'button',
    size: 'medium',
    appearance: 'primary',
    widthBehavior: 'auto',
    borderStyle: 'square',
    children: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
    autoFocus: false
  }
}

export const Full = {
  args: {
    type: 'button',
    size: 'medium',
    appearance: 'primary',
    widthBehavior: 'full',
    borderStyle: 'square',
    children: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: false,
    autoFocus: false
  }
}

export const Disabled = {
  args: {
    type: 'button',
    size: 'medium',
    appearance: 'primary',
    widthBehavior: 'auto',
    borderStyle: 'square',
    children: 'Button',
    leftIcon: null,
    rightIcon: null,
    disabled: true,
    autoFocus: false
  }
}
