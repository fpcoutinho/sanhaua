import './ua-toast.js'

export default {
  title: 'Component Library/UA-Toast',
  component: 'ua-toast',
  tags: ['autodocs'],
  parameters: { docs: { subtitle: "A toast displays a brief, unobtrusive message to the user." } },
  argTypes: {
  "appearance": {
    "description": "Controls the appearance variant.",
    "control": "select",
    "options": [
      "neutral",
      "success",
      "warning",
      "danger",
      "informative"
    ]
  },
  "title": {
    "description": "Sets the title value.",
    "control": "text"
  },
  "message": {
    "description": "Sets the message value.",
    "control": "text"
  }
},
  args: {
  "appearance": "neutral",
  "title": "Default Toast",
  "message": "This is a default toast message."
}
}

const render = (args) => {
  const element = document.createElement('ua-toast')
  for (const [key, value] of Object.entries(args)) {
    const attribute = key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
    if (value === false || value == null) element.removeAttribute(attribute)
    else if (value === true) element.setAttribute(attribute, '')
    else element.setAttribute(attribute, String(value))
  }
  return element
}

export const Default = { render, args: {
  "appearance": "neutral",
  "title": "Default Toast",
  "message": "This is a default toast message."
} }

export const Success = { render, args: {
  "appearance": "success",
  "title": "Success Toast",
  "message": "This is a default toast message."
} }

export const Warning = { render, args: {
  "appearance": "warning",
  "title": "Warning Toast",
  "message": "This is a default toast message."
} }

export const Danger = { render, args: {
  "appearance": "danger",
  "title": "Danger Toast",
  "message": "This is a default toast message."
} }

export const Info = { render, args: {
  "appearance": "informative",
  "title": "Info Toast",
  "message": "This is a default toast message."
} }
