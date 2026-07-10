import '../../styles/ua-toast.scss'

const ICON_MAP = {
  neutral: 'info',
  success: 'check_circle',
  warning: 'warning',
  danger: 'error',
  informative: 'info'
}

export default function UaToast({
  appearance = 'neutral',
  title = 'Toast title',
  message = 'Toast message',
  onDismiss
}) {
  return (
    <div className={`ua-toast ${appearance}`}>
      <div className="header">
        <div className="title-wrapper">
          <span className="material-symbols-rounded icon">{ICON_MAP[appearance] ?? 'info'}</span>
          <span className="title">{title}</span>
        </div>
        <span className="material-symbols-rounded dismiss-icon" onClick={onDismiss}>
          close
        </span>
      </div>
      <div className="content">{message}</div>
    </div>
  )
}
