import {
  type HTMLAttributes,
  type MouseEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useRef
} from 'react'
import type { Size } from '../../../types/tokens'
import UaButtonIcon from '../ua-button-icon/ua-button-icon'
import '../../styles/ua-modal.scss'

export type ModalMode = 'centered' | 'bottom'

export interface UaModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'title'> {
  isOpen: boolean
  onClose: () => void
  /** Desktop placement. Below the `sm` breakpoint the modal is always a bottom sheet. */
  mode?: ModalMode
  size?: Size
  id?: string
  title?: ReactNode
  /** Replaces the whole header region. Takes precedence over `title`. */
  header?: ReactNode
  footer?: ReactNode
  showClose?: boolean
  closeLabel?: string
  closeOnOverlay?: boolean
  closeOnEscape?: boolean
  className?: string
  children?: ReactNode
}

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])'
].join(',')

export default function UaModal({
  isOpen,
  onClose,
  mode = 'centered',
  size = 'medium',
  id,
  title,
  header,
  footer,
  showClose = true,
  closeLabel = 'Fechar',
  closeOnOverlay = true,
  closeOnEscape = true,
  className,
  children,
  ...dialogProps
}: UaModalProps) {
  const generatedId = useId()
  const modalId = id ?? generatedId
  const titleId = `${modalId}-title`

  const dialogRef = useRef<HTMLDivElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)

  const headerContent = header ?? (title ? <h2 className="title" id={titleId}>{title}</h2> : null)
  const hasHeader = Boolean(headerContent)
  const hasContent = Boolean(children)
  const hasFooter = Boolean(footer)

  const focusableItems = useCallback(
    () => Array.from(dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []),
    []
  )

  // Move focus into the dialog on open and hand it back to the opener on close.
  useEffect(() => {
    if (!isOpen) return

    previouslyFocused.current = document.activeElement as HTMLElement | null
    const items = focusableItems()
    ;(items[0] ?? dialogRef.current)?.focus()

    return () => previouslyFocused.current?.focus()
  }, [isOpen, focusableItems])

  // Escape closes; Tab stays inside the dialog.
  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && closeOnEscape) {
        event.stopPropagation()
        onClose()
        return
      }

      if (event.key !== 'Tab') return

      const items = focusableItems()
      if (items.length === 0) {
        event.preventDefault()
        dialogRef.current?.focus()
        return
      }

      const first = items[0]
      const last = items[items.length - 1]
      const active = document.activeElement

      if (event.shiftKey && (active === first || !dialogRef.current?.contains(active))) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown, true)
    return () => document.removeEventListener('keydown', onKeyDown, true)
  }, [isOpen, closeOnEscape, onClose, focusableItems])

  // The page behind the overlay must not scroll while the modal is up.
  useEffect(() => {
    if (!isOpen) return

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = overflow
    }
  }, [isOpen])

  if (!isOpen) return null

  const onOverlayMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlay && event.target === event.currentTarget) onClose()
  }

  const dialogClassName = ['ua-modal', mode, size, className].filter(Boolean).join(' ')

  return (
    <div className={`ua-modal-overlay ${mode}`} onMouseDown={onOverlayMouseDown}>
      <div
        {...dialogProps}
        ref={dialogRef}
        id={modalId}
        className={dialogClassName}
        role="dialog"
        aria-modal="true"
        aria-labelledby={!header && title ? titleId : undefined}
        tabIndex={-1}
      >
        {showClose ? (
          <UaButtonIcon
            appearance="ghost"
            borderStyle="round"
            className="close"
            icon="close"
            label={closeLabel}
            onClick={onClose}
            size="small"
          />
        ) : null}

        {hasHeader ? <div className="header">{headerContent}</div> : null}
        {hasContent ? <div className="content">{children}</div> : null}
        {hasFooter ? <div className="footer">{footer}</div> : null}
      </div>
    </div>
  )
}
