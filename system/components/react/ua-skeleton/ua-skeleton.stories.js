import UaSkeleton from './ua-skeleton.jsx'

export default {
  title: 'Component Library/UA-Skeleton',
  component: UaSkeleton,
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

export const Default = {
  args: {
  "format": "square",
  "width": "240px",
  "height": "56px"
}
}

export const Circle = {
  args: {
  "format": "circle",
  "width": "56px",
  "height": "56px"
}
}

export const Round = {
  args: {
  "format": "round",
  "width": "240px",
  "height": "56px"
}
}

export const Square = {
  args: {
  "format": "square",
  "width": "240px",
  "height": "56px"
}
}
