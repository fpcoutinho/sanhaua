import {
  type ButtonHTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
  useEffect,
  useId,
  useRef,
  useState
} from 'react'
import type { BorderStyle, FieldAppearance, Size, WidthBehavior } from '../../../types/tokens'
import '../../styles/ua-select.scss'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface UaSelectProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'size' | 'id' | 'value' | 'defaultValue' | 'onChange' | 'type'
> {
  options: SelectOption[]
  appearance?: FieldAppearance
  size?: Size
  widthBehavior?: WidthBehavior
  borderStyle?: BorderStyle
  id?: string
  name?: string
  label?: ReactNode
  icon?: string
  placeholder?: string
  required?: boolean
  error?: string | null
  hint?: string
  value?: string
  defaultValue?: string
  onChange?: (value: string, option: SelectOption | null) => void
}

const PLACEHOLDER_VALUE = ''

export default function UaSelect({
  options,
  appearance = 'neutral',
  borderStyle = 'square',
  size = 'medium',
  widthBehavior = 'auto',
  id,
  name,
  label,
  icon,
  placeholder,
  required = false,
  disabled = false,
  value,
  defaultValue,
  className,
  error,
  hint,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  ...triggerProps
}: UaSelectProps) {
  const generatedId = useId()
  const selectId = id ?? generatedId
  const hintId = `${selectId}-hint`
  const errorId = `${selectId}-error`
  const listboxId = `${selectId}-listbox`
  const optionId = (index: number) => `${selectId}-option-${index}`

  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const listboxRef = useRef<HTMLUListElement>(null)
  const typeahead = useRef({ query: '', timer: 0 })

  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue ?? PLACEHOLDER_VALUE)

  const rows: SelectOption[] = placeholder
    ? [{ value: PLACEHOLDER_VALUE, label: placeholder }, ...options]
    : options
  const currentValue = value ?? uncontrolledValue
  const selectedIndex = rows.findIndex((row) => row.value === currentValue)
  const selected = selectedIndex >= 0 ? rows[selectedIndex] : null

  const resolvedAppearance: FieldAppearance = error ? 'error' : appearance
  const fieldClassName = ['ua-select', size, resolvedAppearance, widthBehavior, borderStyle].join(
    ' '
  )
  const wrapperClassName = ['form-element-wrapper', disabled ? 'disabled' : '', className]
    .filter(Boolean)
    .join(' ')
  const describedBy = [hint ? hintId : null, error ? errorId : null].filter(Boolean).join(' ')

  // Close on outside pointer or on anything that moves the field out of view.
  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const close = () => setOpen(false)

    document.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('resize', close)

    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('resize', close)
    }
  }, [open])

  useEffect(() => {
    if (!open || activeIndex < 0) return
    listboxRef.current?.children[activeIndex]?.scrollIntoView({ block: 'nearest' })
  }, [open, activeIndex])

  const firstEnabled = (from: number, step: number) => {
    for (let index = from; index >= 0 && index < rows.length; index += step) {
      if (!rows[index].disabled) return index
    }
    return activeIndex
  }

  const openList = (startAt = selectedIndex >= 0 ? selectedIndex : firstEnabled(0, 1)) => {
    if (disabled) return
    setActiveIndex(startAt)
    setOpen(true)
  }

  const closeList = ({ focusTrigger = true } = {}) => {
    setOpen(false)
    setActiveIndex(-1)
    if (focusTrigger) triggerRef.current?.focus()
  }

  const select = (index: number) => {
    const option = rows[index]
    if (!option || option.disabled) return
    if (value === undefined) setUncontrolledValue(option.value)
    onChange?.(option.value, option.value === PLACEHOLDER_VALUE && placeholder ? null : option)
    closeList()
  }

  const searchByTypeahead = (key: string) => {
    window.clearTimeout(typeahead.current.timer)
    typeahead.current.query += key.toLowerCase()
    typeahead.current.timer = window.setTimeout(() => {
      typeahead.current.query = ''
    }, 500)

    const query = typeahead.current.query
    const match = rows.findIndex(
      (row) => !row.disabled && row.label.toLowerCase().startsWith(query)
    )
    if (match < 0) return

    if (open) setActiveIndex(match)
    else select(match)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(event)
    if (event.defaultPrevented || disabled) return

    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowUp': {
        event.preventDefault()
        const step = event.key === 'ArrowDown' ? 1 : -1
        if (!open) openList()
        else setActiveIndex(firstEnabled(activeIndex + step, step))
        break
      }
      case 'Home':
      case 'End': {
        if (!open) break
        event.preventDefault()
        setActiveIndex(
          event.key === 'Home' ? firstEnabled(0, 1) : firstEnabled(rows.length - 1, -1)
        )
        break
      }
      case 'Enter':
      case ' ': {
        event.preventDefault()
        if (open) select(activeIndex)
        else openList()
        break
      }
      case 'Escape': {
        if (!open) break
        event.preventDefault()
        closeList()
        break
      }
      case 'Tab': {
        if (open) closeList({ focusTrigger: false })
        break
      }
      default: {
        if (event.key.length === 1 && !event.metaKey && !event.ctrlKey && !event.altKey) {
          event.preventDefault()
          searchByTypeahead(event.key)
        }
      }
    }
  }

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
      <div className={fieldClassName} ref={rootRef}>
        <button
          {...triggerProps}
          type="button"
          ref={triggerRef}
          id={selectId}
          className="trigger"
          disabled={disabled}
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={open ? listboxId : undefined}
          aria-activedescendant={open && activeIndex >= 0 ? optionId(activeIndex) : undefined}
          aria-required={required || undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy || undefined}
          onClick={() => (open ? closeList() : openList())}
          onKeyDown={handleKeyDown}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          {icon ? <span className="material-symbols-rounded icon">{icon}</span> : null}
          <span className={selected ? 'value' : 'value placeholder'}>
            {selected ? selected.label : placeholder}
          </span>
          <span aria-hidden="true" className="material-symbols-rounded arrow">
            expand_more
          </span>
        </button>

        {open ? (
          <ul className="listbox" id={listboxId} role="listbox" ref={listboxRef} tabIndex={-1}>
            {rows.map((row, index) => (
              <li
                key={row.value}
                id={optionId(index)}
                className={[
                  'option',
                  index === activeIndex ? 'active' : '',
                  row.disabled ? 'disabled' : ''
                ]
                  .filter(Boolean)
                  .join(' ')}
                role="option"
                aria-selected={index === selectedIndex}
                aria-disabled={row.disabled || undefined}
                onPointerMove={() => (row.disabled ? null : setActiveIndex(index))}
                onClick={() => select(index)}
              >
                {row.label}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      {name ? <input type="hidden" name={name} value={currentValue} /> : null}
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
