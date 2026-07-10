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
  autoFocus = false,
  value,
  name,
  form,
  children = 'Button',
  onClick,
  ...buttonProps
}) {
  const className = ['ua-button', size, appearance, widthBehavior, borderStyle].join(' ')

  return (
    <button
      {...buttonProps}
      type={type}
      disabled={disabled}
      autoFocus={autoFocus}
      value={value}
      name={name}
      form={form}
      className={className}
      onClick={onClick}
    >
      {leftIcon ? <span className="material-symbols-rounded icon">{leftIcon}</span> : null}
      {children ? <span className="text">{children}</span> : null}
      {rightIcon ? <span className="material-symbols-rounded icon">{rightIcon}</span> : null}
    </button>
  )
}
