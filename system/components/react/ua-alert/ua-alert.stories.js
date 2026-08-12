import { fn } from 'storybook/test'
import UaAlert from './ua-alert.tsx'

export default {
  title: 'Component Library/UA-Alert',
  component: UaAlert,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'An inline, non-dismissible message with semantic appearance and an optional action.'
    }
  },
  argTypes: {
    appearance: {
      description: 'Sets appearance.',
      control: 'select',
      options: ['neutral', 'success', 'warning', 'danger', 'informative']
    },
    title: {
      description: 'Sets the optional title.',
      control: 'text'
    },
    description: {
      description: 'Sets the alert body.',
      control: 'text'
    },
    icon: {
      description:
        'Overrides the Material Symbols Rounded icon. Pass `false` to render the alert without an icon.',
      control: 'text'
    },
    actionLabel: {
      description: 'Sets the action label. Without it, no action is rendered.',
      control: 'text'
    },
    actionAs: {
      description:
        'Renders the action as a button or as a link. The action sits one line below the description, aligned left.',
      control: 'inline-radio',
      options: ['button', 'link']
    },
    actionHref: {
      description: 'Sets the link target when `actionAs` is `link`.',
      control: 'text'
    },
    actionTarget: {
      description: 'Sets the anchor `target` when `actionAs` is `link`.',
      control: 'text'
    },
    onActionClick: {
      description: 'Handles the action click event.',
      action: 'actionClick',
      table: {
        category: 'Events'
      }
    }
  },
  args: {
    appearance: 'neutral',
    title: 'Alert title',
    description: 'This is a default alert message.',
    actionAs: 'button',
    onActionClick: fn()
  }
}

export const Default = {}

export const OnlyDescription = {
  args: {
    appearance: 'danger',
    title: undefined,
    icon: false,
    description: 'Informe seu e-mail.'
  }
}

export const Success = {
  args: {
    appearance: 'success',
    title: 'Success alert',
    description: 'The operation completed successfully.'
  }
}

export const Warning = {
  args: {
    appearance: 'warning',
    title: 'Warning alert',
    description: 'Review this information before continuing.'
  }
}

export const Danger = {
  args: {
    appearance: 'danger',
    title: 'Danger alert',
    description: 'The operation could not be completed.'
  }
}

export const Info = {
  args: {
    appearance: 'informative',
    title: 'Info alert',
    description: 'Here is some useful information.'
  }
}

export const WithButtonAction = {
  args: {
    appearance: 'warning',
    title: 'Session expiring',
    description: 'Your session ends in 2 minutes.',
    actionLabel: 'Renovar sessão',
    actionAs: 'button'
  }
}

export const WithLinkAction = {
  args: {
    appearance: 'informative',
    title: 'New report available',
    description: 'The inspection report has been published.',
    actionLabel: 'Ver laudo',
    actionAs: 'link',
    actionHref: '#'
  }
}

export const WithoutIcon = {
  args: {
    appearance: 'neutral',
    title: 'No icon',
    description: 'Pass `icon={false}` to hide the icon.',
    icon: false
  }
}
