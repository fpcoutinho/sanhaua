import type { ButtonHTMLAttributes, ReactNode } from 'react'
import type { BorderStyle, ButtonAppearance, Size, WidthBehavior } from '../../../types/tokens'
import '../../styles/ua-button.scss'

export interface UaButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'children'> {
  type?: 'button' | 'submit' | 'reset'
  size?: Size
  appearance?: ButtonAppearance
  widthBehavior?: WidthBehavior
  borderStyle?: BorderStyle
  /** Nome de ícone do Material Symbols Rounded. */
  leftIcon?: string
  rightIcon?: string
  children?: ReactNode
}

export default function UaButton({
  type = 'button',
  size = 'medium',
  appearance = 'primary',
  widthBehavior = 'auto',
  borderStyle = 'square',
  leftIcon,
  rightIcon,
  disabled = false,
  autoFocus = false,
  value,
  name,
  form,
  className,
  children = 'Button',
  onClick,
  ...buttonProps
}: UaButtonProps) {
  const computedClassName = ['ua-button', size, appearance, widthBehavior, borderStyle].join(' ')

  return (
    <button
      {...buttonProps}
      type={type}
      disabled={disabled}
      autoFocus={autoFocus}
      value={value}
      name={name}
      form={form}
      className={[computedClassName, className].filter(Boolean).join(' ')}
      onClick={onClick}
    >
      {leftIcon ? <span className="material-symbols-rounded icon">{leftIcon}</span> : null}
      {children ? <span className="text">{children}</span> : null}
      {rightIcon ? <span className="material-symbols-rounded icon">{rightIcon}</span> : null}
    </button>
  )
}
