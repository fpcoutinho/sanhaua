import type { ReactNode } from 'react'
import type { BadgeAppearance, Size } from '../../../types/tokens'
import '../../styles/ua-badge.scss'

export interface UaBadgeProps {
  children?: ReactNode
  appearance?: BadgeAppearance
  size?: Size
  icon?: string
  className?: string
}

export default function UaBadge({
  children = 'Badge',
  appearance = 'neutral',
  size = 'medium',
  icon,
  className
}: UaBadgeProps) {
  const computedClassName = ['ua-badge', size, appearance, className].filter(Boolean).join(' ')

  return (
    <span className={computedClassName}>
      {icon ? (
        <span aria-hidden="true" className="material-symbols-rounded icon">
          {icon}
        </span>
      ) : null}
      <span className="text">{children}</span>
    </span>
  )
}
