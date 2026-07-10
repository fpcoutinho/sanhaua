import UaInputText from './ua-input-text.jsx'

export default {
  title: 'Component Library/UA-Input-Text',
  component: UaInputText,
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

export const Default = { args: {
  "appearance": "neutral",
  "borderStyle": "square",
  "size": "medium",
  "widthBehavior": "auto",
  "label": "Text",
  "placeholder": "Enter your text",
  "value": ""
} }

export const WithIcon = { args: {
  "appearance": "neutral",
  "borderStyle": "square",
  "size": "medium",
  "widthBehavior": "auto",
  "label": "Text",
  "placeholder": "Enter your text",
  "value": "",
  "icon": "search"
} }

export const WithPrefixAndSuffix = { args: {
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

export const Success = { args: {
  "appearance": "success",
  "borderStyle": "square",
  "size": "medium",
  "widthBehavior": "auto",
  "label": "Text",
  "placeholder": "Enter your text",
  "value": ""
} }

export const Error = { args: {
  "appearance": "error",
  "borderStyle": "square",
  "size": "medium",
  "widthBehavior": "auto",
  "label": "Text",
  "placeholder": "Enter your text",
  "value": ""
} }

export const Disabled = { args: {
  "appearance": "neutral",
  "borderStyle": "square",
  "size": "medium",
  "widthBehavior": "auto",
  "label": "Text",
  "placeholder": "Enter your text",
  "value": "",
  "disabled": true
} }

export const Small = { args: {
  "appearance": "neutral",
  "borderStyle": "square",
  "size": "small",
  "widthBehavior": "auto",
  "label": "Text",
  "placeholder": "Enter your text",
  "value": ""
} }

export const Large = { args: {
  "appearance": "neutral",
  "borderStyle": "square",
  "size": "large",
  "widthBehavior": "auto",
  "label": "Text",
  "placeholder": "Enter your text",
  "value": ""
} }

export const Round = { args: {
  "appearance": "neutral",
  "borderStyle": "round",
  "size": "medium",
  "widthBehavior": "auto",
  "label": "Text",
  "placeholder": "Enter your text",
  "value": ""
} }
