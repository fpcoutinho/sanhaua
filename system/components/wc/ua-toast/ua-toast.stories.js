import './ua-toast.js'

export default {
  title: 'Component Library/UA-Toast',
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      control: 'select',
      options: ['neutral', 'success', 'warning', 'danger', 'informative']
    }
  },
  args: {
    appearance: 'neutral',
    title: 'Neutral toast',
    message: 'This is a toast content example.'
  }
}

export const Playground = {
  render: (args) => {
    const element = document.createElement('ua-wc-toast')
    element.setAttribute('appearance', args.appearance)
    element.setAttribute('title', args.title)
    element.setAttribute('message', args.message)

    return element
  }
}
