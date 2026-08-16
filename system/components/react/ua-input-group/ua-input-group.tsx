import { type FieldsetHTMLAttributes, type ReactNode, useId } from 'react'
import '../../styles/ua-input-group.scss'

export type InputGroupOrientation = 'vertical' | 'horizontal'

export interface UaInputGroupProps extends Omit<FieldsetHTMLAttributes<HTMLFieldSetElement>, 'id'> {
  legend?: ReactNode
  orientation?: InputGroupOrientation
  id?: string
  hint?: ReactNode
  error?: string | null
  required?: boolean
  className?: string
  children?: ReactNode
}

/**
 * Capsule for a set of related controls — `UaCheckbox`, `UaRadio` or any other
 * field that only makes sense next to its siblings.
 *
 * A real `fieldset`/`legend`: that is what makes the screen reader announce the
 * question before each option. A `<div>` with a `<p>` above would read the
 * options without saying which question they belong to.
 */
export default function UaInputGroup({
  legend,
  orientation = 'vertical',
  id,
  hint,
  error,
  required = false,
  disabled = false,
  className,
  children,
  ...fieldsetProps
}: UaInputGroupProps) {
  const generatedId = useId()
  const groupId = id ?? generatedId
  const hintId = `${groupId}-hint`
  const errorId = `${groupId}-error`

  const groupClassName = [
    'ua-input-group',
    orientation,
    error ? 'error' : '',
    disabled ? 'disabled' : '',
    className
  ]
    .filter(Boolean)
    .join(' ')

  const describedBy = [hint ? hintId : null, error ? errorId : null].filter(Boolean).join(' ')

  return (
    <fieldset
      {...fieldsetProps}
      id={groupId}
      className={groupClassName}
      disabled={disabled}
      aria-invalid={error ? true : undefined}
      aria-describedby={describedBy || undefined}
    >
      {legend ? (
        <legend className="legend">
          {legend}
          {required ? (
            <span aria-hidden="true" className="required">
              {' '}
              *
            </span>
          ) : null}
        </legend>
      ) : null}

      <div className="options">{children}</div>

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
    </fieldset>
  )
}
