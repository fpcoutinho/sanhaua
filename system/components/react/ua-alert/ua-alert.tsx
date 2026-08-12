import type { MouseEvent, ReactNode } from 'react'
import type { ToastAppearance } from '../../../types/tokens'
import '../../styles/ua-alert.scss'

export type AlertAppearance = ToastAppearance

const ICON_MAP: Record<AlertAppearance, string> = {
  neutral: 'info',
  success: 'check_circle',
  warning: 'warning',
  danger: 'error',
  informative: 'info'
}

export interface UaAlertProps {
  appearance?: AlertAppearance
  title?: string
  description?: ReactNode
  icon?: string | false
  actionLabel?: string
  actionAs?: 'button' | 'link'
  actionHref?: string
  actionTarget?: string
  className?: string
  onActionClick?: (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void
}

export default function UaAlert({
  appearance = 'neutral',
  title,
  description,
  icon,
  actionLabel,
  actionAs = 'button',
  actionHref,
  actionTarget,
  className,
  onActionClick
}: UaAlertProps) {
  const isUrgent = appearance === 'danger' || appearance === 'warning'
  const iconName = icon === false ? null : (icon ?? ICON_MAP[appearance] ?? 'info')

  return (
    <div
      className={['ua-alert', appearance, className].filter(Boolean).join(' ')}
      role={isUrgent ? 'alert' : 'status'}
    >
      {iconName ? (
        <span className="material-symbols-rounded icon" aria-hidden="true">
          {iconName}
        </span>
      ) : null}

      <div className="content">
        {title ? <p className="title">{title}</p> : null}
        {description ? <div className="description">{description}</div> : null}

        {actionLabel ? (
          actionAs === 'link' ? (
            <a
              className="action link"
              href={actionHref}
              target={actionTarget}
              rel={actionTarget === '_blank' ? 'noreferrer' : undefined}
              onClick={onActionClick}
            >
              {actionLabel}
            </a>
          ) : (
            <button type="button" className="action button" onClick={onActionClick}>
              {actionLabel}
            </button>
          )
        ) : null}
      </div>
    </div>
  )
}
