import { type ReactNode, useId, useState } from 'react'
import '../../styles/ua-accordion.scss'

export interface AccordionItem {
  id: string
  title: ReactNode
  content: ReactNode
  disabled?: boolean
}

export type AccordionAppearance = 'boxed' | 'underlined'

export interface UaAccordionProps {
  items: AccordionItem[]
  appearance?: AccordionAppearance
  allowMultiple?: boolean
  defaultOpen?: string[]
  onToggle?: (id: string, open: boolean) => void
  className?: string
}

export default function UaAccordion({
  items,
  appearance = 'boxed',
  allowMultiple = false,
  defaultOpen = [],
  onToggle,
  className
}: UaAccordionProps) {
  const baseId = useId()
  const [open, setOpen] = useState<string[]>(defaultOpen)

  function toggle(id: string) {
    const isOpen = open.includes(id)

    setOpen((current) => {
      if (isOpen) {
        return current.filter((entry) => entry !== id)
      }

      return allowMultiple ? [...current, id] : [id]
    })

    onToggle?.(id, !isOpen)
  }

  return (
    <div className={['ua-accordion', appearance, className].filter(Boolean).join(' ')}>
      {items.map((item) => {
        const isOpen = open.includes(item.id)
        const headerId = `${baseId}-${item.id}-header`
        const panelId = `${baseId}-${item.id}-panel`

        return (
          <div className={['item', isOpen ? 'open' : null].filter(Boolean).join(' ')} key={item.id}>
            <h3 className="heading">
              <button
                type="button"
                id={headerId}
                className="trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                disabled={item.disabled}
                onClick={() => toggle(item.id)}
              >
                <span className="text">{item.title}</span>
                <span aria-hidden="true" className="material-symbols-rounded icon">
                  expand_more
                </span>
              </button>
            </h3>

            {isOpen ? (
              <div aria-labelledby={headerId} className="panel" id={panelId} role="region">
                {item.content}
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
