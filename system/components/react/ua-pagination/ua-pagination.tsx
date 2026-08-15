import type { ReactNode } from 'react'
import UaButton from '../ua-button/ua-button'
import '../../styles/ua-pagination.scss'

export interface UaPaginationProps {
  page: number
  pageSize: number
  total?: number
  count?: number
  onPageChange: (page: number) => void
  label?: string
  previousLabel?: string
  nextLabel?: string
  summary?: (first: number, last: number, total?: number) => ReactNode
  className?: string
}

type PageEntry = number | 'gap-start' | 'gap-end'

function pageWindow(page: number, pageCount: number): PageEntry[] {
  if (pageCount <= 7) {
    return Array.from({ length: pageCount }, (_, index) => index + 1)
  }

  const first = 1
  const last = pageCount
  const from = Math.max(first + 1, Math.min(page - 1, last - 3))
  const to = Math.min(last - 1, Math.max(page + 1, first + 3))

  const middle: PageEntry[] = []
  for (let current = from; current <= to; current += 1) {
    middle.push(current)
  }

  return [
    first,
    ...(from > first + 1 ? (['gap-start'] as const) : []),
    ...middle,
    ...(to < last - 1 ? (['gap-end'] as const) : []),
    last
  ]
}

export default function UaPagination({
  page,
  pageSize,
  total,
  count,
  onPageChange,
  label = 'Pagination',
  previousLabel = 'Previous',
  nextLabel = 'Next',
  summary,
  className
}: UaPaginationProps) {
  const rowsOnPage = count ?? pageSize
  const first = (page - 1) * pageSize + 1
  const last = (page - 1) * pageSize + rowsOnPage

  const pageCount = total === undefined ? undefined : Math.max(1, Math.ceil(total / pageSize))
  const hasPrevious = page > 1
  const hasNext = pageCount === undefined ? rowsOnPage === pageSize : page < pageCount

  return (
    <nav
      aria-label={label}
      className={['ua-pagination', summary ? null : 'bare', className].filter(Boolean).join(' ')}
    >
      {summary ? <p className="summary">{summary(first, last, total)}</p> : null}

      <div className="controls">
        <UaButton
          appearance="ghost"
          size="small"
          disabled={!hasPrevious}
          leftIcon="chevron_left"
          aria-label={previousLabel}
          onClick={() => onPageChange(page - 1)}
        >
          {previousLabel}
        </UaButton>

        {pageCount === undefined
          ? null
          : pageWindow(page, pageCount).map((entry) =>
              typeof entry === 'string' ? (
                <span aria-hidden="true" className="gap" key={entry}>
                  …
                </span>
              ) : (
                <UaButton
                  key={entry}
                  size="small"
                  appearance={entry === page ? 'primary' : 'ghost'}
                  aria-current={entry === page ? 'page' : undefined}
                  onClick={() => onPageChange(entry)}
                >
                  {entry}
                </UaButton>
              )
            )}

        <UaButton
          appearance="ghost"
          size="small"
          disabled={!hasNext}
          rightIcon="chevron_right"
          aria-label={nextLabel}
          onClick={() => onPageChange(page + 1)}
        >
          {nextLabel}
        </UaButton>
      </div>
    </nav>
  )
}
