import { useState } from 'react'
import UaInputText from './ua-input-text.jsx'

export default {
  title: 'Component Library/UA-Input-Text',
  component: UaInputText,
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

    return <UaInputText {...args} value={value} onInput={(event) => setValue(event.target.value)} />
  }
}
