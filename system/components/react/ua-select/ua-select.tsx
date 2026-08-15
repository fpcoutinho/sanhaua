import { type ElementType, type ReactNode, type SelectHTMLAttributes, useId } from 'react'
import type { BorderStyle, FieldAppearance, Size, WidthBehavior } from '../../../types/tokens'
import '../../styles/ua-select.scss'

const SelectedContent = 'selectedcontent' as unknown as ElementType

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface UaSelectProps extends Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'size' | 'id'
> {
  options: SelectOption[]
  appearance?: FieldAppearance
  size?: Size
  widthBehavior?: WidthBehavior
  borderStyle?: BorderStyle
  id?: string
  label?: ReactNode
  icon?: string
  placeholder?: string
  error?: string | null
  hint?: string
}

export default function UaSelect({
  options,
  appearance = 'neutral',
  borderStyle = 'square',
  size = 'medium',
  widthBehavior = 'auto',
  id,
  label,
  icon,
  placeholder,
  required = false,
  disabled = false,
  name,
  value,
  className,
  error,
  hint,
  onChange,
  onFocus,
  onBlur,
  ...selectProps
}: UaSelectProps) {
  const generatedId = useId()
  const selectId = id ?? generatedId
  const hintId = `${selectId}-hint`
  const errorId = `${selectId}-error`
  const resolvedAppearance: FieldAppearance = error ? 'error' : appearance

  const fieldClassName = ['ua-select', size, resolvedAppearance, widthBehavior, borderStyle].join(
    ' '
  )
  const wrapperClassName = ['form-element-wrapper', disabled ? 'disabled' : '', className]
    .filter(Boolean)
    .join(' ')

  const describedBy = [hint ? hintId : null, error ? errorId : null].filter(Boolean).join(' ')

  const Wrapper = label ? 'label' : 'div'

  return (
    <Wrapper className={wrapperClassName} htmlFor={label ? selectId : undefined}>
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
      <select
        {...selectProps}
        id={selectId}
        className={fieldClassName}
        name={name}
        value={value}
        required={required}
        disabled={disabled}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy || undefined}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        <button type="button" className="trigger">
          {icon ? <span className="material-symbols-rounded icon">{icon}</span> : null}
          <SelectedContent className="value" />
          <span aria-hidden="true" className="material-symbols-rounded arrow">
            expand_more
          </span>
        </button>

        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
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
