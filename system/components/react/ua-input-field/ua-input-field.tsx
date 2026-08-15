import { type InputHTMLAttributes, type ReactNode, useId } from 'react'
import type {
  BorderStyle,
  FieldAppearance,
  InputTextType,
  Size,
  WidthBehavior
} from '../../../types/tokens'
import '../../styles/ua-input-field.scss'

export interface UaInputFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'prefix' | 'type' | 'id'
> {
  type?: InputTextType
  appearance?: FieldAppearance
  size?: Size
  widthBehavior?: WidthBehavior
  borderStyle?: BorderStyle
  id?: string
  label?: ReactNode
  icon?: string
  prefix?: ReactNode
  suffix?: ReactNode
  error?: string | null
  hint?: string
}

export default function UaInputField({
  appearance = 'neutral',
  borderStyle = 'square',
  size = 'medium',
  widthBehavior = 'auto',
  type = 'text',
  id,
  label,
  icon,
  prefix,
  suffix,
  placeholder,
  required = false,
  disabled = false,
  readOnly = false,
  maxLength,
  minLength,
  autoComplete,
  autoCorrect,
  autoFocus = false,
  name,
  inputMode,
  pattern,
  spellCheck = false,
  value,
  className,
  error,
  hint,
  onInput,
  onFocus,
  onBlur,
  onChange,
  ...inputProps
}: UaInputFieldProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const hintId = `${inputId}-hint`
  const errorId = `${inputId}-error`
  const resolvedAppearance: FieldAppearance = error ? 'error' : appearance

  const fieldClassName = [
    'ua-input-field',
    size,
    resolvedAppearance,
    widthBehavior,
    borderStyle
  ].join(' ')
  const wrapperClassName = ['form-element-wrapper', disabled ? 'disabled' : '', className]
    .filter(Boolean)
    .join(' ')

  const describedBy = [hint ? hintId : null, error ? errorId : null].filter(Boolean).join(' ')

  const Wrapper = label ? 'label' : 'div'

  return (
    <Wrapper className={wrapperClassName} htmlFor={label ? inputId : undefined}>
      {label ? (
        <span className="label">
          {label}
          {required ? (
            <span aria-hidden="true" className="required">
              {' '}
              *
            </span>
          ) : null}
        </span>
      ) : null}
      <div className={fieldClassName}>
        {icon ? <span className="material-symbols-rounded icon">{icon}</span> : null}
        {prefix ? <span className="prefix">{prefix}</span> : null}
        <input
          {...inputProps}
          id={inputId}
          className="field"
          type={type}
          value={value}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          maxLength={maxLength}
          minLength={minLength}
          autoComplete={autoComplete}
          autoCorrect={autoCorrect}
          autoFocus={autoFocus}
          name={name}
          inputMode={inputMode}
          pattern={pattern}
          spellCheck={spellCheck}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy || undefined}
          onInput={onInput}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
        />
        {suffix ? <span className="suffix">{suffix}</span> : null}
      </div>
      {hint ? (
        <span className="hint" id={hintId}>
          {hint}
        </span>
      ) : null}
      {error ? (
        <span className="error-message" id={errorId} role="alert">
          {error}
        </span>
      ) : null}
    </Wrapper>
  )
}
