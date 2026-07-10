import { useState } from 'react'
import UaInputTextReact from './ua-input-text.jsx'

export default {
  title: 'Component Library/UA-Input-Text',
  component: UaInputTextReact,
  tags: ['autodocs'],
  args: {
    appearance: 'neutral',
    borderStyle: 'square',
    size: 'medium',
    widthBehavior: 'auto',
    label: 'Text',
    placeholder: 'Enter your text'
  }
}

export const Playground = {
  render: (args) => {
    const [value, setValue] = useState('')

    return <UaInputTextReact {...args} value={value} onInput={(event) => setValue(event.target.value)} />
  }
}
