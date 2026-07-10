import './ua-input-text.js'

export default {
  title: 'Component Library/UA-Input-Text',
  tags: ['autodocs'],
  argTypes: {
    appearance: { control: 'select', options: ['neutral', 'success', 'error'] },
    borderStyle: { control: 'select', options: ['square', 'round'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    widthBehavior: { control: 'select', options: ['auto', 'full'] }
  },
  args: {
    appearance: 'neutral',
    borderStyle: 'square',
    size: 'medium',
    widthBehavior: 'auto',
    label: 'Text',
    placeholder: 'Enter your text'
  }
}

export const Playground = {
  render: (args) => {
    const element = document.createElement('ua-input-text')
    element.setAttribute('appearance', args.appearance)
    element.setAttribute('border-style', args.borderStyle)
    element.setAttribute('size', args.size)
    element.setAttribute('width-behavior', args.widthBehavior)
    element.setAttribute('label', args.label)
    element.setAttribute('placeholder', args.placeholder)

    return element
  }
}
