import './ua-button.js'

export default {
  title: 'Component Library/UA-Button',
  component: 'ua-button',
  tags: ['autodocs'],
  parameters: { docs: { subtitle: "A button triggers an action or event." } },
  argTypes: {
  "type": {
    "description": "Controls the type variant.",
    "control": "select",
    "options": [
      "button",
      "submit",
      "reset"
    ]
  },
  "size": {
    "description": "Controls the size variant.",
    "control": "select",
    "options": [
      "small",
      "medium",
      "large"
    ]
  },
  "appearance": {
    "description": "Controls the appearance variant.",
    "control": "select",
    "options": [
      "primary",
      "secondary",
      "tertiary",
      "success",
      "warning",
      "danger",
      "informative",
      "ghost"
    ]
  },
  "widthBehavior": {
    "description": "Controls the widthBehavior variant.",
    "control": "select",
    "options": [
      "auto",
      "full"
    ]
  },
  "borderStyle": {
    "description": "Controls the borderStyle variant.",
    "control": "select",
    "options": [
      "square",
      "round"
    ]
  },
  "label": {
    "description": "Sets the label value.",
    "control": "text"
  }
},
  args: {
  "type": "button",
  "size": "medium",
  "appearance": "primary",
  "widthBehavior": "auto",
  "borderStyle": "square",
  "label": "Button"
}
}

const render = (args) => {
  const element = document.createElement('ua-button')
  for (const [key, value] of Object.entries(args)) {
    const attribute = key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
    if (value === false || value == null) element.removeAttribute(attribute)
    else if (value === true) element.setAttribute(attribute, '')
    else element.setAttribute(attribute, String(value))
  }
  return element
}

export const Default = { render, args: {
  "type": "button",
  "size": "medium",
  "appearance": "primary",
  "widthBehavior": "auto",
  "borderStyle": "square",
  "label": "Button"
} }

export const Secondary = { render, args: {
  "type": "button",
  "size": "medium",
  "appearance": "secondary",
  "widthBehavior": "auto",
  "borderStyle": "square",
  "label": "Button"
} }

export const Success = { render, args: {
  "type": "button",
  "size": "medium",
  "appearance": "success",
  "widthBehavior": "auto",
  "borderStyle": "square",
  "label": "Button"
} }

export const Warning = { render, args: {
  "type": "button",
  "size": "medium",
  "appearance": "warning",
  "widthBehavior": "auto",
  "borderStyle": "square",
  "label": "Button"
} }

export const Danger = { render, args: {
  "type": "button",
  "size": "medium",
  "appearance": "danger",
  "widthBehavior": "auto",
  "borderStyle": "square",
  "label": "Button"
} }

export const Small = { render, args: {
  "type": "button",
  "size": "small",
  "appearance": "primary",
  "widthBehavior": "auto",
  "borderStyle": "square",
  "label": "Button"
} }

export const Large = { render, args: {
  "type": "button",
  "size": "large",
  "appearance": "primary",
  "widthBehavior": "auto",
  "borderStyle": "square",
  "label": "Button"
} }

export const Round = { render, args: {
  "type": "button",
  "size": "medium",
  "appearance": "primary",
  "widthBehavior": "auto",
  "borderStyle": "round",
  "label": "Button"
} }

export const FullWidth = { render, args: {
  "type": "button",
  "size": "medium",
  "appearance": "primary",
  "widthBehavior": "full",
  "borderStyle": "square",
  "label": "Button"
} }
