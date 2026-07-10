import '../../styles/ua-button.scss'

export default function UaButton({
  type = 'button',
  size = 'medium',
  appearance = 'primary',
  widthBehavior = 'auto',
  borderStyle = 'square',
  leftIcon,
  rightIcon,
  disabled = false,
  autofocus,
  autoFocus,
  value,
  name,
  form,
  label,
  children,
  onClick,
  ...buttonProps
}) {
  const className = ['ua-button', size, appearance, widthBehavior, borderStyle].join(' ')
  const content = children ?? label ?? 'Button'

  return (
    <button
      {...buttonProps}
      type={type}
      disabled={disabled}
      autoFocus={autoFocus ?? autofocus ?? false}
      value={value}
      name={name}
      form={form}
      className={className}
      onClick={onClick}
    >
      {leftIcon ? <span className="material-symbols-rounded icon">{leftIcon}</span> : null}
      {content ? <span className="text">{content}</span> : null}
      {rightIcon ? <span className="material-symbols-rounded icon">{rightIcon}</span> : null}
    </button>
  )
}