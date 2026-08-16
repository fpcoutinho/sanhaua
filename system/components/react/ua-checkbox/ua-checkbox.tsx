import { type InputHTMLAttributes, type ReactNode, useEffect, useId, useRef } from 'react'
import type { Size } from '../../../types/tokens'
import '../../styles/ua-checkbox.scss'

export type CheckboxMode = 'normal' | 'reverse'

export interface UaCheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'type' | 'id'
> {
  size?: Size
  mode?: CheckboxMode
  id?: string
  label?: ReactNode
  /** Renders the mixed state. Visual only — the DOM value stays `checked`. */
  indeterminate?: boolean
  className?: string
}

export default function UaCheckbox({
  size = 'medium',
  mode = 'normal',
  id,
  label,
  value,
  name,
  checked,
  defaultChecked,
  indeterminate = false,
  disabled = false,
  required = false,
  autoFocus = false,
  className,
  onChange,
  onInput,
  onFocus,
  onBlur,
  ...inputProps
}: UaCheckboxProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const inputRef = useRef<HTMLInputElement>(null)

  // `indeterminate` has no HTML attribute — it only exists as a DOM property.
  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate
  }, [indeterminate])

  const wrapperClassName = [
    'ua-checkbox',
    size,
    mode,
    disabled ? 'disabled' : '',
    indeterminate ? 'indeterminate' : '',
    className
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <label className={wrapperClassName} htmlFor={inputId}>
      <input
        {...inputProps}
        ref={inputRef}
        id={inputId}
        className="checkbox-button"
        type="checkbox"
        value={value}
        name={name}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        required={required}
        autoFocus={autoFocus}
        aria-checked={indeterminate ? 'mixed' : undefined}
        onChange={onChange}
        onInput={onInput}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {label ? <span className="label">{label}</span> : null}
    </label>
  )
}
