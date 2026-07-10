import './ua-skeleton.js'

export default {
  title: 'Component Library/UA-Skeleton',
  tags: ['autodocs'],
  argTypes: {
    format: { control: 'select', options: ['square', 'round', 'circle'] }
  },
  args: {
    format: 'round',
    width: '240px',
    height: '56px'
  }
}

export const Playground = {
  render: (args) => {
    const element = document.createElement('ua-skeleton')
    element.setAttribute('format', args.format)
    element.setAttribute('width', args.width)
    element.setAttribute('height', args.height)

    return element
  }
}
