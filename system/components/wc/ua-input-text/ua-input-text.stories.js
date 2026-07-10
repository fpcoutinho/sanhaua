import './ua-input-text.js'

export default {
  title: 'Component Library/UA-Input-Text',
  component: 'ua-input-text',
  tags: ['autodocs'],
  parameters: { docs: { subtitle: "A text input lets the user enter and edit plain text." } },
  argTypes: {
  "appearance": {
    "description": "Controls the appearance variant.",
    "control": "select",
    "options": [
      "neutral",
      "success",
      "error"
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
  "size": {
    "description": "Controls the size variant.",
    "control": "select",
    "options": [
      "small",
      "medium",
      "large"
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
  "label": {
    "description": "Sets the label value.",
    "control": "text"
  },
  "placeholder": {
    "description": "Sets the placeholder value.",
    "control": "text"
  },
  "value": {
    "description": "Sets the value value.",
    "control": "text"
  }
},
  args: {
  "appearance": "neutral",
  "borderStyle": "square",
  "size": "medium",
  "widthBehavior": "auto",
  "label": "Text",
  "placeholder": "Enter your text",
  "value": ""
}
}

const render = (args) => {
  const element = document.createElement('ua-input-text')
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
  "borderStyle": "square",
  "size": "medium",
  "widthBehavior": "auto",
  "label": "Text",
  "placeholder": "Enter your text",
  "value": ""
} }

export const WithIcon = { render, args: {
  "appearance": "neutral",
  "borderStyle": "square",
  "size": "medium",
  "widthBehavior": "auto",
  "label": "Text",
  "placeholder": "Enter your text",
  "value": "",
  "icon": "search"
} }

export const WithPrefixAndSuffix = { render, args: {
  "appearance": "neutral",
  "borderStyle": "square",
  "size": "medium",
  "widthBehavior": "auto",
  "label": "Text",
  "placeholder": "Enter your text",
  "value": "",
  "prefix": "R$",
  "suffix": "BRL"
} }

export const Success = { render, args: {
  "appearance": "success",
  "borderStyle": "square",
  "size": "medium",
  "widthBehavior": "auto",
  "label": "Text",
  "placeholder": "Enter your text",
  "value": ""
} }

export const Error = { render, args: {
  "appearance": "error",
  "borderStyle": "square",
  "size": "medium",
  "widthBehavior": "auto",
  "label": "Text",
  "placeholder": "Enter your text",
  "value": ""
} }

export const Disabled = { render, args: {
  "appearance": "neutral",
  "borderStyle": "square",
  "size": "medium",
  "widthBehavior": "auto",
  "label": "Text",
  "placeholder": "Enter your text",
  "value": "",
  "disabled": true
} }

export const Small = { render, args: {
  "appearance": "neutral",
  "borderStyle": "square",
  "size": "small",
  "widthBehavior": "auto",
  "label": "Text",
  "placeholder": "Enter your text",
  "value": ""
} }

export const Large = { render, args: {
  "appearance": "neutral",
  "borderStyle": "square",
  "size": "large",
  "widthBehavior": "auto",
  "label": "Text",
  "placeholder": "Enter your text",
  "value": ""
} }

export const Round = { render, args: {
  "appearance": "neutral",
  "borderStyle": "round",
  "size": "medium",
  "widthBehavior": "auto",
  "label": "Text",
  "placeholder": "Enter your text",
  "value": ""
} }
