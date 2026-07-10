import '../../styles/ua-button.scss'

export default function UaButtonReact({
  type = 'button',
  size = 'medium',
  appearance = 'primary',
  widthBehavior = 'auto',
  borderStyle = 'square',
  leftIcon,
  rightIcon,
  disabled = false,
  autofocus = false,
  value,
  name,
  form,
  children = 'Button',
  onClick
}) {
  const className = ['ua-button', size, appearance, widthBehavior, borderStyle].join(' ')

  return (
    <button
      type={type}
      disabled={disabled}
      autoFocus={autofocus}
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
