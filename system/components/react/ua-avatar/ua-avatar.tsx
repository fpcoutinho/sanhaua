import { useState } from 'react'
import type { Size } from '../../../types/tokens'
import '../../styles/ua-avatar.scss'

export interface UaAvatarProps {
  name: string
  src?: string | null
  size?: Size
  className?: string
}

function initialsOf(name: string) {
  const words = name
    .replace(/@.*$/, '') // an e-mail address is a common stand-in for a name
    .split(/[\s._-]+/)
    .filter(Boolean)

  if (words.length === 0) {
    return '?'
  }

  const first = words[0].charAt(0)
  const last = words.length > 1 ? words[words.length - 1].charAt(0) : ''

  return (first + last).toUpperCase()
}

export default function UaAvatar({ name, src, size = 'medium', className }: UaAvatarProps) {
  const [failed, setFailed] = useState(false)
  const computedClassName = ['ua-avatar', size, className].filter(Boolean).join(' ')

  if (!src || failed) {
    return (
      <span aria-label={name} className={computedClassName} role="img" title={name}>
        <span className="initials">{initialsOf(name)}</span>
      </span>
    )
  }

  return (
    <span className={computedClassName}>
      <img alt={name} className="image" src={src} onError={() => setFailed(true)} />
    </span>
  )
}
