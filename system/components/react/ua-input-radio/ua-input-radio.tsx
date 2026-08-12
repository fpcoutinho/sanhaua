import { type InputHTMLAttributes, type ReactNode, useId } from 'react'
import type { Size } from '../../../types/tokens'
import '../../styles/ua-input-radio.scss'

export type RadioMode = 'normal' | 'reverse'

export interface UaInputRadioProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'type' | 'id'
> {
  size?: Size
  mode?: RadioMode
  id?: string
  label?: ReactNode
  className?: string
}

export default function UaInputRadio({
  size = 'medium',
  mode = 'normal',
  id,
  label,
  value,
  name,
  checked,
  defaultChecked,
  disabled = false,
  required = false,
  autoFocus = false,
  className,
  onChange,
  onInput,
  onFocus,
  onBlur,
  ...inputProps
}: UaInputRadioProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId

  const wrapperClassName = ['ua-input-radio', size, mode, disabled ? 'disabled' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <label className={wrapperClassName} htmlFor={inputId}>
      <input
        {...inputProps}
        id={inputId}
        className="radio-button"
        type="radio"
        value={value}
        name={name}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        required={required}
        autoFocus={autoFocus}
        onChange={onChange}
        onInput={onInput}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {label ? <span className="label">{label}</span> : null}
    </label>
  )
}
