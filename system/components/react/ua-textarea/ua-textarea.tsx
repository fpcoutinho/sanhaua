import { type ReactNode, type TextareaHTMLAttributes, useId } from 'react'
import type { BorderStyle, FieldAppearance, Size, WidthBehavior } from '../../../types/tokens'
import '../../styles/ua-textarea.scss'

export type TextareaResize = 'none' | 'vertical' | 'both'

export interface UaTextareaProps extends Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'size' | 'id'
> {
  appearance?: FieldAppearance
  size?: Size
  widthBehavior?: WidthBehavior
  borderStyle?: BorderStyle
  resize?: TextareaResize
  id?: string
  label?: ReactNode
  error?: string | null
  hint?: string
}

export default function UaTextarea({
  appearance = 'neutral',
  borderStyle = 'square',
  size = 'medium',
  widthBehavior = 'full',
  resize = 'vertical',
  id,
  label,
  placeholder,
  required = false,
  disabled = false,
  readOnly = false,
  maxLength,
  minLength,
  autoFocus = false,
  rows = 3,
  name,
  value,
  className,
  error,
  hint,
  onInput,
  onFocus,
  onBlur,
  onChange,
  ...textareaProps
}: UaTextareaProps) {
  const generatedId = useId()
  const textareaId = id ?? generatedId
  const hintId = `${textareaId}-hint`
  const errorId = `${textareaId}-error`
  const resolvedAppearance: FieldAppearance = error ? 'error' : appearance

  const fieldClassName = [
    'ua-textarea',
    size,
    resolvedAppearance,
    widthBehavior,
    borderStyle,
    `resize-${resize}`
  ].join(' ')
  const wrapperClassName = ['form-element-wrapper', disabled ? 'disabled' : '', className]
    .filter(Boolean)
    .join(' ')

  const describedBy = [hint ? hintId : null, error ? errorId : null].filter(Boolean).join(' ')

  const Wrapper = label ? 'label' : 'div'

  return (
    <Wrapper className={wrapperClassName} htmlFor={label ? textareaId : undefined}>
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
        <textarea
          {...textareaProps}
          id={textareaId}
          className="field"
          value={value}
          rows={rows}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          maxLength={maxLength}
          minLength={minLength}
          autoFocus={autoFocus}
          name={name}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy || undefined}
          onInput={onInput}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
        />
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
