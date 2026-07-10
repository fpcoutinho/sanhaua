import './ua-button.js'

export default {
  title: 'Component Library/UA-Button',
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    appearance: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'informative', 'ghost']
    },
    widthBehavior: { control: 'select', options: ['auto', 'full'] },
    borderStyle: { control: 'select', options: ['square', 'round'] }
  },
  args: {
    type: 'button',
    size: 'medium',
    appearance: 'primary',
    widthBehavior: 'auto',
    borderStyle: 'square',
    label: 'Button'
  }
}

export const Playground = {
  render: (args) => {
    const element = document.createElement('ua-wc-button')
    element.setAttribute('type', args.type)
    element.setAttribute('size', args.size)
    element.setAttribute('appearance', args.appearance)
    element.setAttribute('width-behavior', args.widthBehavior)
    element.setAttribute('border-style', args.borderStyle)
    element.setAttribute('label', args.label)

    return element
  }
}
