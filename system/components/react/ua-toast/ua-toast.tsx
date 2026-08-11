import type { ToastAppearance } from '../../../types/tokens'
import '../../styles/ua-toast.scss'

const ICON_MAP: Record<ToastAppearance, string> = {
  neutral: 'info',
  success: 'check_circle',
  warning: 'warning',
  danger: 'error',
  informative: 'info'
}

export interface UaToastProps {
  appearance?: ToastAppearance
  title?: string
  message?: string
  className?: string
  onDismiss?: () => void
}

export default function UaToast({
  appearance = 'neutral',
  title = 'Toast title',
  message = 'Toast message',
  className,
  onDismiss
}: UaToastProps) {
  const isUrgent = appearance === 'danger'

  return (
    <div
      className={['ua-toast', appearance, className].filter(Boolean).join(' ')}
      role="status"
      aria-live={isUrgent ? 'assertive' : 'polite'}
    >
      <div className="header">
        <div className="title-wrapper">
          <span className="material-symbols-rounded icon" aria-hidden="true">
            {ICON_MAP[appearance] ?? 'info'}
          </span>
          <span className="title">{title}</span>
        </div>
        {onDismiss ? (
          <button type="button" className="dismiss-icon" aria-label="Fechar" onClick={onDismiss}>
            <span className="material-symbols-rounded" aria-hidden="true">
              close
            </span>
          </button>
        ) : null}
      </div>
      <div className="content">{message}</div>
    </div>
  )
}
