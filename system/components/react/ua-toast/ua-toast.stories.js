import { fn } from 'storybook/test'
import UaToast from './ua-toast.tsx'

export default {
  title: 'Component Library/UA-Toast',
  component: UaToast,
  tags: ['autodocs'],
  parameters: {
    docs: { subtitle: 'A non-modal message with semantic appearance and a dismiss action.' }
  },
  argTypes: {
    appearance: {
      description: 'Sets appearance.',
      control: 'select',
      options: ['neutral', 'success', 'warning', 'danger', 'informative']
    },
    title: {
      description: 'Sets title.',
      control: 'text'
    },
    message: {
      description:
        'Sets the toast body. Note: the prop is `message`, not `content` — check this before wiring types by hand.',
      control: 'text'
    },
    onDismiss: {
      description: 'Handles the dismiss event.',
      action: 'dismiss',
      table: {
        category: 'Events'
      }
    }
  },
  args: {
    appearance: 'neutral',
    title: 'Default Toast',
    message: 'This is a default toast message.',
    onDismiss: fn()
  }
}

export const Default = {
  args: {
    appearance: 'neutral',
    title: 'Default Toast',
    message: 'This is a default toast message.'
  }
}

export const Success = {
  args: {
    appearance: 'success',
    title: 'Success Toast',
    message: 'The operation completed successfully.'
  }
}

export const Warning = {
  args: {
    appearance: 'warning',
    title: 'Warning Toast',
    message: 'Review this information before continuing.'
  }
}

export const Danger = {
  args: {
    appearance: 'danger',
    title: 'Danger Toast',
    message: 'The operation could not be completed.'
  }
}

export const Info = {
  args: {
    appearance: 'informative',
    title: 'Info Toast',
    message: 'Here is some useful information.'
  }
}

export const Dismissible = {
  args: {
    appearance: 'neutral',
    title: 'Dismissible toast',
    message: 'Tab to the close button and press Enter.'
  }
}

export const WithoutDismiss = {
  args: {
    appearance: 'neutral',
    title: 'Persistent toast',
    message: 'No onDismiss was passed, so there is no close button.',
    onDismiss: undefined
  }
}
