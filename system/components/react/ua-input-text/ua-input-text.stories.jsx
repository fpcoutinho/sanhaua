import { useEffect, useState } from 'react'
import { fn } from '@storybook/test'
import UaInputText from './ua-input-text.jsx'

export default {
  title: 'Component Library/UA-Input-Text',
  component: UaInputText,
  tags: ['autodocs'],
  parameters: { docs: { subtitle: "A single-line text field with label, icons, prefix/suffix, validation appearances and native input behavior." } },
  argTypes: {
  "label": {
    "description": "Sets label.",
    "control": "text"
  },
  "id": {
    "description": "Sets id.",
    "control": "text"
  },
  "size": {
    "description": "Sets size.",
    "control": "select",
    "options": [
      "small",
      "medium",
      "large"
    ]
  },
  "appearance": {
    "description": "Sets appearance.",
    "control": "select",
    "options": [
      "neutral",
      "success",
      "error"
    ]
  },
  "widthBehavior": {
    "description": "Sets widthBehavior.",
    "control": "select",
    "options": [
      "auto",
      "full"
    ]
  },
  "borderStyle": {
    "description": "Sets borderStyle.",
    "control": "select",
    "options": [
      "square",
      "round"
    ]
  },
  "icon": {
    "description": "Sets icon.",
    "control": "text"
  },
  "prefix": {
    "description": "Sets prefix.",
    "control": "text"
  },
  "suffix": {
    "description": "Sets suffix.",
    "control": "text"
  },
  "placeholder": {
    "description": "Sets placeholder.",
    "control": "text"
  },
  "required": {
    "description": "Sets required.",
    "control": "boolean"
  },
  "disabled": {
    "description": "Sets disabled.",
    "control": "boolean"
  },
  "readonly": {
    "description": "Sets readonly.",
    "control": "boolean"
  },
  "maxlength": {
    "description": "Sets maxlength.",
    "control": "text"
  },
  "minlength": {
    "description": "Sets minlength.",
    "control": "text"
  },
  "autocomplete": {
    "description": "Sets autocomplete.",
    "control": "select",
    "options": [
      "on",
      "off"
    ]
  },
  "autocorrect": {
    "description": "Sets autocorrect.",
    "control": "select",
    "options": [
      "on",
      "off"
    ]
  },
  "autofocus": {
    "description": "Sets autofocus.",
    "control": "boolean"
  },
  "name": {
    "description": "Sets name.",
    "control": "text"
  },
  "inputmode": {
    "description": "Sets inputmode.",
    "control": "select",
    "options": [
      "text",
      "search",
      "email",
      "tel",
      "url",
      "numeric",
      "decimal",
      "none"
    ]
  },
  "pattern": {
    "description": "Sets pattern.",
    "control": "text"
  },
  "spellcheck": {
    "description": "Sets spellcheck.",
    "control": "boolean"
  },
  "value": {
    "description": "Sets value.",
    "control": "text"
  },
  "onInput": {
    "description": "Handles the input event.",
    "action": "input",
    "table": {
      "category": "Events"
    }
  },
  "onChange": {
    "description": "Handles the change event.",
    "action": "change",
    "table": {
      "category": "Events"
    }
  },
  "onFocus": {
    "description": "Handles the focus event.",
    "action": "focus",
    "table": {
      "category": "Events"
    }
  },
  "onBlur": {
    "description": "Handles the blur event.",
    "action": "blur",
    "table": {
      "category": "Events"
    }
  }
},
  args: {
  "label": "Text",
  "id": "text-field",
  "size": "medium",
  "appearance": "neutral",
  "widthBehavior": "auto",
  "borderStyle": "square",
  "icon": null,
  "prefix": null,
  "suffix": null,
  "placeholder": "Enter your text",
  "required": false,
  "disabled": false,
  "readonly": false,
  "maxlength": null,
  "minlength": null,
  "autocomplete": "off",
  "autocorrect": "off",
  "autofocus": false,
  "name": "text",
  "inputmode": "text",
  "pattern": null,
  "spellcheck": false,
  "value": "",
  "onInput": fn(),
  "onChange": fn(),
  "onFocus": fn(),
  "onBlur": fn()
}
}

const render = (args) => {
  const [value, setValue] = useState(args.value ?? '')
  useEffect(() => setValue(args.value ?? ''), [args.value])
  return (
    <UaInputText
      {...args}
      value={value}
      onInput={(event) => {
        setValue(event.currentTarget.value)
        args.onInput(event)
      }}
    />
  )
}

export const Example = { render,
  args: {
  "label": "Text",
  "id": "text-field",
  "size": "medium",
  "appearance": "neutral",
  "widthBehavior": "auto",
  "borderStyle": "square",
  "icon": "search",
  "prefix": null,
  "suffix": null,
  "placeholder": "Enter your text",
  "required": false,
  "disabled": false,
  "readonly": false,
  "maxlength": null,
  "minlength": null,
  "autocomplete": "off",
  "autocorrect": "off",
  "autofocus": false,
  "name": "text",
  "inputmode": "text",
  "pattern": null,
  "spellcheck": false,
  "value": ""
}
}

export const WithPrefixAndSuffix = { render,
  args: {
  "label": "Text",
  "id": "text-field",
  "size": "medium",
  "appearance": "neutral",
  "widthBehavior": "auto",
  "borderStyle": "square",
  "icon": null,
  "prefix": "R$",
  "suffix": "BRL",
  "placeholder": "0,00",
  "required": false,
  "disabled": false,
  "readonly": false,
  "maxlength": null,
  "minlength": null,
  "autocomplete": "off",
  "autocorrect": "off",
  "autofocus": false,
  "name": "text",
  "inputmode": "text",
  "pattern": null,
  "spellcheck": false,
  "value": ""
}
}

export const Success = { render,
  args: {
  "label": "Text",
  "id": "text-field",
  "size": "medium",
  "appearance": "success",
  "widthBehavior": "auto",
  "borderStyle": "square",
  "icon": null,
  "prefix": null,
  "suffix": null,
  "placeholder": "Enter your text",
  "required": false,
  "disabled": false,
  "readonly": false,
  "maxlength": null,
  "minlength": null,
  "autocomplete": "off",
  "autocorrect": "off",
  "autofocus": false,
  "name": "text",
  "inputmode": "text",
  "pattern": null,
  "spellcheck": false,
  "value": "Valid value"
}
}

export const Error = { render,
  args: {
  "label": "Text",
  "id": "text-field",
  "size": "medium",
  "appearance": "error",
  "widthBehavior": "auto",
  "borderStyle": "square",
  "icon": null,
  "prefix": null,
  "suffix": null,
  "placeholder": "Enter your text",
  "required": false,
  "disabled": false,
  "readonly": false,
  "maxlength": null,
  "minlength": null,
  "autocomplete": "off",
  "autocorrect": "off",
  "autofocus": false,
  "name": "text",
  "inputmode": "text",
  "pattern": null,
  "spellcheck": false,
  "value": "Invalid value"
}
}

export const Required = { render,
  args: {
  "label": "Text",
  "id": "text-field",
  "size": "medium",
  "appearance": "neutral",
  "widthBehavior": "auto",
  "borderStyle": "square",
  "icon": null,
  "prefix": null,
  "suffix": null,
  "placeholder": "Enter your text",
  "required": true,
  "disabled": false,
  "readonly": false,
  "maxlength": null,
  "minlength": null,
  "autocomplete": "off",
  "autocorrect": "off",
  "autofocus": false,
  "name": "text",
  "inputmode": "text",
  "pattern": null,
  "spellcheck": false,
  "value": ""
}
}

export const Disabled = { render,
  args: {
  "label": "Text",
  "id": "text-field",
  "size": "medium",
  "appearance": "neutral",
  "widthBehavior": "auto",
  "borderStyle": "square",
  "icon": null,
  "prefix": null,
  "suffix": null,
  "placeholder": "Enter your text",
  "required": false,
  "disabled": true,
  "readonly": false,
  "maxlength": null,
  "minlength": null,
  "autocomplete": "off",
  "autocorrect": "off",
  "autofocus": false,
  "name": "text",
  "inputmode": "text",
  "pattern": null,
  "spellcheck": false,
  "value": "Disabled value"
}
}

export const Readonly = { render,
  args: {
  "label": "Text",
  "id": "text-field",
  "size": "medium",
  "appearance": "neutral",
  "widthBehavior": "auto",
  "borderStyle": "square",
  "icon": null,
  "prefix": null,
  "suffix": null,
  "placeholder": "Enter your text",
  "required": false,
  "disabled": false,
  "readonly": true,
  "maxlength": null,
  "minlength": null,
  "autocomplete": "off",
  "autocorrect": "off",
  "autofocus": false,
  "name": "text",
  "inputmode": "text",
  "pattern": null,
  "spellcheck": false,
  "value": "Read-only value"
}
}

export const Small = { render,
  args: {
  "label": "Text",
  "id": "text-field",
  "size": "small",
  "appearance": "neutral",
  "widthBehavior": "auto",
  "borderStyle": "square",
  "icon": null,
  "prefix": null,
  "suffix": null,
  "placeholder": "Enter your text",
  "required": false,
  "disabled": false,
  "readonly": false,
  "maxlength": null,
  "minlength": null,
  "autocomplete": "off",
  "autocorrect": "off",
  "autofocus": false,
  "name": "text",
  "inputmode": "text",
  "pattern": null,
  "spellcheck": false,
  "value": ""
}
}

export const Medium = { render,
  args: {
  "label": "Text",
  "id": "text-field",
  "size": "medium",
  "appearance": "neutral",
  "widthBehavior": "auto",
  "borderStyle": "square",
  "icon": null,
  "prefix": null,
  "suffix": null,
  "placeholder": "Enter your text",
  "required": false,
  "disabled": false,
  "readonly": false,
  "maxlength": null,
  "minlength": null,
  "autocomplete": "off",
  "autocorrect": "off",
  "autofocus": false,
  "name": "text",
  "inputmode": "text",
  "pattern": null,
  "spellcheck": false,
  "value": ""
}
}

export const Large = { render,
  args: {
  "label": "Text",
  "id": "text-field",
  "size": "large",
  "appearance": "neutral",
  "widthBehavior": "auto",
  "borderStyle": "square",
  "icon": null,
  "prefix": null,
  "suffix": null,
  "placeholder": "Enter your text",
  "required": false,
  "disabled": false,
  "readonly": false,
  "maxlength": null,
  "minlength": null,
  "autocomplete": "off",
  "autocorrect": "off",
  "autofocus": false,
  "name": "text",
  "inputmode": "text",
  "pattern": null,
  "spellcheck": false,
  "value": ""
}
}

export const Round = { render,
  args: {
  "label": "Text",
  "id": "text-field",
  "size": "medium",
  "appearance": "neutral",
  "widthBehavior": "auto",
  "borderStyle": "round",
  "icon": null,
  "prefix": null,
  "suffix": null,
  "placeholder": "Enter your text",
  "required": false,
  "disabled": false,
  "readonly": false,
  "maxlength": null,
  "minlength": null,
  "autocomplete": "off",
  "autocorrect": "off",
  "autofocus": false,
  "name": "text",
  "inputmode": "text",
  "pattern": null,
  "spellcheck": false,
  "value": ""
}
}

export const Square = { render,
  args: {
  "label": "Text",
  "id": "text-field",
  "size": "medium",
  "appearance": "neutral",
  "widthBehavior": "auto",
  "borderStyle": "square",
  "icon": null,
  "prefix": null,
  "suffix": null,
  "placeholder": "Enter your text",
  "required": false,
  "disabled": false,
  "readonly": false,
  "maxlength": null,
  "minlength": null,
  "autocomplete": "off",
  "autocorrect": "off",
  "autofocus": false,
  "name": "text",
  "inputmode": "text",
  "pattern": null,
  "spellcheck": false,
  "value": ""
}
}

export const Full = { render,
  args: {
  "label": "Text",
  "id": "text-field",
  "size": "medium",
  "appearance": "neutral",
  "widthBehavior": "full",
  "borderStyle": "square",
  "icon": null,
  "prefix": null,
  "suffix": null,
  "placeholder": "Enter your text",
  "required": false,
  "disabled": false,
  "readonly": false,
  "maxlength": null,
  "minlength": null,
  "autocomplete": "off",
  "autocorrect": "off",
  "autofocus": false,
  "name": "text",
  "inputmode": "text",
  "pattern": null,
  "spellcheck": false,
  "value": ""
}
}
