import { type KeyboardEvent, type ReactNode, useRef } from 'react'
import type { Size, WidthBehavior } from '../../../types/tokens'
import '../../styles/ua-tabs.scss'

export interface TabItem {
  id: string
  label: ReactNode
  icon?: string
  /**
   * Id of the panel this tab controls. The tab's own id is derived from it as
   * `${panelId}-tab`, which is what the panel points back at with
   * `aria-labelledby`. Omit both and the pair stays unwired.
   */
  panelId?: string
  disabled?: boolean
}

export type TabsAppearance = 'underlined' | 'pill'

export type TabsActivation = 'automatic' | 'manual'

export interface UaTabsProps {
  items: TabItem[]
  value: string
  onChange: (id: string) => void
  label: string
  appearance?: TabsAppearance
  activation?: TabsActivation
  size?: Size
  widthBehavior?: WidthBehavior
  className?: string
}

export default function UaTabs({
  items,
  value,
  onChange,
  label,
  appearance = 'underlined',
  activation = 'automatic',
  size = 'medium',
  widthBehavior = 'auto',
  className
}: UaTabsProps) {
  const tabRefs = useRef(new Map<string, HTMLButtonElement>())

  function focusTab(id: string) {
    tabRefs.current.get(id)?.focus()

    if (activation === 'automatic') {
      onChange(id)
    }
  }

  // Wraps around and steps over disabled tabs.
  function move(from: number, step: number) {
    const count = items.length

    for (let offset = 0; offset < count; offset += 1) {
      const index = (((from + step * offset) % count) + count) % count
      const candidate = items[index]

      if (!candidate.disabled) {
        focusTab(candidate.id)
        return
      }
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    switch (event.key) {
      case 'ArrowRight':
        move(index + 1, 1)
        break
      case 'ArrowLeft':
        move(index - 1, -1)
        break
      case 'Home':
        move(0, 1)
        break
      case 'End':
        move(items.length - 1, -1)
        break
      default:
        return
    }

    event.preventDefault()
  }

  return (
    <div
      aria-label={label}
      role="tablist"
      className={['ua-tabs', appearance, size, widthBehavior, className].filter(Boolean).join(' ')}
    >
      {items.map((item, index) => {
        const isSelected = item.id === value

        return (
          <button
            key={item.id}
            ref={(node) => {
              if (node) {
                tabRefs.current.set(item.id, node)
              } else {
                tabRefs.current.delete(item.id)
              }
            }}
            type="button"
            id={item.panelId === undefined ? undefined : `${item.panelId}-tab`}
            role="tab"
            className={['tab', isSelected ? 'active' : null].filter(Boolean).join(' ')}
            aria-selected={isSelected}
            aria-controls={item.panelId}
            disabled={item.disabled}
            tabIndex={isSelected ? 0 : -1}
            onClick={() => onChange(item.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            {item.icon ? (
              <span aria-hidden="true" className="material-symbols-rounded icon">
                {item.icon}
              </span>
            ) : null}

            <span className="text">{item.label}</span>
          </button>
        )
      })}
    </div>
  )
}
