import UaToast from './ua-toast.jsx'

export default {
  title: 'Component Library/UA-Toast',
  component: UaToast,
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

export const Default = { args: {
  "appearance": "neutral",
  "title": "Default Toast",
  "message": "This is a default toast message."
} }

export const Success = { args: {
  "appearance": "success",
  "title": "Success Toast",
  "message": "This is a default toast message."
} }

export const Warning = { args: {
  "appearance": "warning",
  "title": "Warning Toast",
  "message": "This is a default toast message."
} }

export const Danger = { args: {
  "appearance": "danger",
  "title": "Danger Toast",
  "message": "This is a default toast message."
} }

export const Info = { args: {
  "appearance": "informative",
  "title": "Info Toast",
  "message": "This is a default toast message."
} }
