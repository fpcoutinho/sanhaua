import type { ButtonHTMLAttributes } from 'react'
import type { BorderStyle, ButtonAppearance, Size } from '../../../types/tokens'
import '../../styles/ua-button-icon.scss'

export interface UaButtonIconProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'children'> {
  icon: string
  label: string
  size?: Size
  appearance?: ButtonAppearance
  borderStyle?: BorderStyle
  type?: 'button' | 'submit' | 'reset'
}

export default function UaButtonIcon({
  icon,
  label,
  size = 'medium',
  appearance = 'primary',
  borderStyle = 'square',
  type = 'button',
  disabled = false,
  className,
  ...buttonProps
}: UaButtonIconProps) {
  const computedClassName = [
    'ua-button',
    'ua-button-icon',
    size,
    appearance,
    borderStyle,
    disabled ? 'disabled' : null,
    className
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      {...buttonProps}
      type={type}
      disabled={disabled}
      aria-label={label}
      title={label}
      className={computedClassName}
    >
      <span aria-hidden="true" className="material-symbols-rounded icon">
        {icon}
      </span>
    </button>
  )
}
