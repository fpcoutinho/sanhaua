import type { MouseEvent, ReactNode } from 'react'
import '../../styles/ua-card.scss'

export type CardBehavior = 'container' | 'button' | 'link'

export interface UaCardProps {
  children?: ReactNode
  /** `container` renderiza um `<div>`, `button` um `<button>` e `link` um `<a>`. */
  behavior?: CardBehavior
  /** Usado apenas quando `behavior` é `link`. */
  href?: string
  target?: string
  /** Usado apenas quando `behavior` é `button`. */
  disabled?: boolean
  className?: string
  onClick?: (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void
}

export default function UaCard({
  children,
  behavior = 'container',
  href,
  target,
  disabled = false,
  className,
  onClick
}: UaCardProps) {
  const computedClassName = ['ua-card', behavior, className].filter(Boolean).join(' ')

  if (behavior === 'link') {
    return (
      <a
        className={computedClassName}
        href={href}
        target={target}
        rel={target === '_blank' ? 'noreferrer' : undefined}
        onClick={onClick}
      >
        {children}
      </a>
    )
  }

  if (behavior === 'button') {
    return (
      <button type="button" className={computedClassName} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    )
  }

  return <div className={computedClassName}>{children}</div>
}
