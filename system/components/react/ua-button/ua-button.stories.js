import UaButton from './ua-button.jsx'

export default {
  title: 'Component Library/UA-Button',
  component: UaButton,
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

export const Default = { args: {
  "type": "button",
  "size": "medium",
  "appearance": "primary",
  "widthBehavior": "auto",
  "borderStyle": "square",
  "label": "Button"
} }

export const Secondary = { args: {
  "type": "button",
  "size": "medium",
  "appearance": "secondary",
  "widthBehavior": "auto",
  "borderStyle": "square",
  "label": "Button"
} }

export const Success = { args: {
  "type": "button",
  "size": "medium",
  "appearance": "success",
  "widthBehavior": "auto",
  "borderStyle": "square",
  "label": "Button"
} }

export const Warning = { args: {
  "type": "button",
  "size": "medium",
  "appearance": "warning",
  "widthBehavior": "auto",
  "borderStyle": "square",
  "label": "Button"
} }

export const Danger = { args: {
  "type": "button",
  "size": "medium",
  "appearance": "danger",
  "widthBehavior": "auto",
  "borderStyle": "square",
  "label": "Button"
} }

export const Small = { args: {
  "type": "button",
  "size": "small",
  "appearance": "primary",
  "widthBehavior": "auto",
  "borderStyle": "square",
  "label": "Button"
} }

export const Large = { args: {
  "type": "button",
  "size": "large",
  "appearance": "primary",
  "widthBehavior": "auto",
  "borderStyle": "square",
  "label": "Button"
} }

export const Round = { args: {
  "type": "button",
  "size": "medium",
  "appearance": "primary",
  "widthBehavior": "auto",
  "borderStyle": "round",
  "label": "Button"
} }

export const FullWidth = { args: {
  "type": "button",
  "size": "medium",
  "appearance": "primary",
  "widthBehavior": "full",
  "borderStyle": "square",
  "label": "Button"
} }
