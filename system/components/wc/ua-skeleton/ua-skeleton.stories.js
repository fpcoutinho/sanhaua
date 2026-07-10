import './ua-skeleton.js'

export default {
  title: 'Component Library/UA-Skeleton',
  component: 'ua-skeleton',
  tags: ['autodocs'],
  parameters: { docs: { subtitle: "A placeholder representing content while it loads, with square, rounded and circular formats." } },
  argTypes: {
  "format": {
    "description": "Sets format.",
    "control": "select",
    "options": [
      "square",
      "round",
      "circle"
    ]
  },
  "width": {
    "description": "Sets width.",
    "control": "text"
  },
  "height": {
    "description": "Sets height.",
    "control": "text"
  }
},
  args: {
  "format": "square",
  "width": "240px",
  "height": "56px"
}
}

const render = (args) => {
  const element = document.createElement('ua-skeleton')
  const events = {}
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
  "format": "square",
  "width": "240px",
  "height": "56px"
}
}

export const Circle = {
  render,
  args: {
  "format": "circle",
  "width": "56px",
  "height": "56px"
}
}

export const Round = {
  render,
  args: {
  "format": "round",
  "width": "240px",
  "height": "56px"
}
}

export const Square = {
  render,
  args: {
  "format": "square",
  "width": "240px",
  "height": "56px"
}
}
