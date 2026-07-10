import '../../styles/ua-input-text.scss'

export default function UaInputText({
  appearance = 'neutral',
  borderStyle = 'square',
  size = 'medium',
  widthBehavior = 'auto',
  id,
  label = 'Text',
  icon,
  prefix,
  suffix,
  placeholder,
  required = false,
  disabled = false,
  readonly,
  readOnly,
  maxlength,
  maxLength,
  minlength,
  minLength,
  autocomplete,
  autoComplete,
  autocorrect,
  autoCorrect,
  autofocus,
  autoFocus,
  name,
  inputmode,
  inputMode,
  pattern,
  spellcheck,
  spellCheck,
  value,
  onInput,
  onFocus,
  onBlur,
  onChange,
  ...inputProps
}) {
  const fieldClassName = ['ua-input-text', size, appearance, widthBehavior, borderStyle].join(' ')
  const wrapperClassName = ['form-element-wrapper', disabled ? 'disabled' : ''].join(' ').trim()

  return (
    <label className={wrapperClassName} htmlFor={id}>
      <span className="label">{label}</span>
      <div className={fieldClassName}>
        {icon ? <span className="material-symbols-rounded icon">{icon}</span> : null}
        {prefix ? <span className="prefix">{prefix}</span> : null}
        <input
          {...inputProps}
          id={id}
          className="field"
          type="text"
          value={value}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          readOnly={readOnly ?? readonly ?? false}
          maxLength={maxLength ?? maxlength}
          minLength={minLength ?? minlength}
          autoComplete={autoComplete ?? autocomplete}
          autoCorrect={autoCorrect ?? autocorrect}
          autoFocus={autoFocus ?? autofocus ?? false}
          name={name}
          inputMode={inputMode ?? inputmode}
          pattern={pattern}
          spellCheck={spellCheck ?? spellcheck ?? false}
          onInput={onInput}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
        />
        {suffix ? <span className="suffix">{suffix}</span> : null}
      </div>
    </label>
  )
}