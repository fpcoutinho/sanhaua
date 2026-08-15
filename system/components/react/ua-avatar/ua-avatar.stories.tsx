import UaAvatar from './ua-avatar.tsx'

export default {
  title: 'Component Library/UA-Avatar',
  component: UaAvatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'A circular portrait that falls back to initials — both when no image is given and when the one given fails to load.'
    }
  },
  argTypes: {
    name: {
      description:
        'Person the avatar stands for. Drives the initials and the alt text. An e-mail address works: the domain is dropped.',
      control: 'text'
    },
    src: { description: 'Image URL. Falls back to initials when null or broken.', control: 'text' },
    size: {
      description: 'Sets the avatar size.',
      control: 'inline-radio',
      options: ['small', 'medium', 'large']
    },
    className: { description: 'Appended to the root class list.', control: 'text' }
  }
}

export const Initials = {
  args: { name: 'Ana Ribeiro' }
}

export const FromEmail = {
  args: { name: 'ana.ribeiro@exemplo.com' },
  parameters: {
    docs: {
      description: { story: 'The domain is dropped and the separators split the local part.' }
    }
  }
}

export const BrokenImage = {
  args: { name: 'Ana Ribeiro', src: 'https://example.invalid/missing.png' },
  parameters: {
    docs: { description: { story: 'A URL that fails to load falls back to the initials.' } }
  }
}

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <UaAvatar name="Ana Ribeiro" size="small" />
      <UaAvatar name="Ana Ribeiro" size="medium" />
      <UaAvatar name="Ana Ribeiro" size="large" />
    </div>
  )
}
