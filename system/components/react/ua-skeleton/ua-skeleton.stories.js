import UaSkeleton from './ua-skeleton.jsx'

export default {
  title: 'Component Library/UA-Skeleton',
  component: UaSkeleton,
  tags: ['autodocs'],
  parameters: { docs: { subtitle: "A placeholder that represents the shape of content while it loads." } },
  argTypes: {
  "format": {
    "description": "Controls the format variant.",
    "control": "select",
    "options": [
      "square",
      "round",
      "circle"
    ]
  },
  "width": {
    "description": "Sets the width value.",
    "control": "text"
  },
  "height": {
    "description": "Sets the height value.",
    "control": "text"
  }
},
  args: {
  "format": "square",
  "width": "240px",
  "height": "56px"
}
}

export const Default = { args: {
  "format": "square",
  "width": "240px",
  "height": "56px"
} }

export const Circle = { args: {
  "format": "circle",
  "width": "56px",
  "height": "56px"
} }

export const Round = { args: {
  "format": "round",
  "width": "240px",
  "height": "56px"
} }

export const Square = { args: {
  "format": "square",
  "width": "240px",
  "height": "56px"
} }
