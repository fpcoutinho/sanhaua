import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode
} from 'react'
import type {
  BorderStyle,
  ButtonAppearance,
  ButtonBehavior,
  Size,
  WidthBehavior
} from '../../../types/tokens'
import '../../styles/ua-button.scss'

interface UaButtonBaseProps {
  size?: Size
  appearance?: ButtonAppearance
  widthBehavior?: WidthBehavior
  borderStyle?: BorderStyle
  leftIcon?: string
  rightIcon?: string
  children?: ReactNode
}

export interface UaButtonAsButtonProps
  extends UaButtonBaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'children'> {
  behavior?: Extract<ButtonBehavior, 'button'>
  type?: 'button' | 'submit' | 'reset'
}

export interface UaButtonAsLinkProps
  extends UaButtonBaseProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'type' | 'children'> {
  behavior: Extract<ButtonBehavior, 'link'>
  href?: string
  target?: string
  rel?: string
  download?: string | boolean
  disabled?: boolean
}

export type UaButtonProps = UaButtonAsButtonProps | UaButtonAsLinkProps

export default function UaButton({
  behavior = 'button',
  size = 'medium',
  appearance = 'primary',
  widthBehavior = 'auto',
  borderStyle = 'square',
  leftIcon,
  rightIcon,
  disabled = false,
  className,
  children = 'Button',
  onClick,
  ...restProps
}: UaButtonProps) {
  const computedClassName = [
    'ua-button',
    size,
    appearance,
    widthBehavior,
    borderStyle,
    disabled ? 'disabled' : null,
    className
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {leftIcon ? <span className="material-symbols-rounded icon">{leftIcon}</span> : null}
      {children ? <span className="text">{children}</span> : null}
      {rightIcon ? <span className="material-symbols-rounded icon">{rightIcon}</span> : null}
    </>
  )

  if (behavior === 'link') {
    const { href, target, rel, download, ...anchorProps } = restProps as Omit<
      UaButtonAsLinkProps,
      keyof UaButtonBaseProps | 'behavior' | 'disabled'
    >

    const computedRel = rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)

    return (
      <a
        {...anchorProps}
        href={disabled ? undefined : href}
        target={target}
        rel={computedRel}
        download={download}
        role="button"
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : anchorProps.tabIndex}
        className={computedClassName}
        onClick={(event) => {
          if (disabled) {
            event.preventDefault()
            return
          }
          ;(onClick as MouseEventHandler<HTMLAnchorElement> | undefined)?.(event)
        }}
      >
        {content}
      </a>
    )
  }

  const {
    type = 'button',
    autoFocus = false,
    value,
    name,
    form,
    ...buttonProps
  } = restProps as Omit<UaButtonAsButtonProps, keyof UaButtonBaseProps | 'behavior' | 'disabled'>

  return (
    <button
      {...buttonProps}
      type={type}
      disabled={disabled}
      autoFocus={autoFocus}
      value={value}
      name={name}
      form={form}
      className={computedClassName}
      onClick={onClick as MouseEventHandler<HTMLButtonElement> | undefined}
    >
      {content}
    </button>
  )
}
