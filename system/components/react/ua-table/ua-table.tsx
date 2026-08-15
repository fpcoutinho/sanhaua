import type { MouseEvent, ReactNode } from 'react'
import '../../styles/ua-table.scss'

export type SortDirection = 'ascending' | 'descending'

export interface TableSort {
  key: string
  direction: SortDirection
}

export type RowBehavior = 'static' | 'interactive'

export interface Column<Row> {
  key: string
  header: ReactNode
  render: (row: Row) => ReactNode
  sortable?: boolean
}

export interface UaTableProps<Row> {
  caption: string
  columns: Column<Row>[]
  rows: Row[]
  rowKey: (row: Row) => string
  emptyState?: ReactNode
  className?: string
  rowBehavior?: RowBehavior
  onRowClick?: (row: Row, event: MouseEvent<HTMLTableRowElement>) => void
  sort?: TableSort | null
  onSortChange?: (next: TableSort) => void
}

const SORT_ICON: Record<SortDirection, string> = {
  ascending: 'arrow_upward',
  descending: 'arrow_downward'
}

const INTERACTIVE_SELECTOR = 'a, button, input, select, textarea, label, [role="button"]'

export default function UaTable<Row>({
  caption,
  columns,
  rows,
  rowKey,
  emptyState,
  className,
  rowBehavior = 'static',
  onRowClick,
  sort,
  onSortChange
}: UaTableProps<Row>) {
  if (rows.length === 0 && emptyState) {
    return <>{emptyState}</>
  }

  const isInteractive = rowBehavior === 'interactive'
  const rowClassName = ['row', isInteractive ? 'interactive' : null].filter(Boolean).join(' ')

  function handleRowClick(row: Row, event: MouseEvent<HTMLTableRowElement>) {
    if (!isInteractive || !onRowClick) {
      return
    }

    if ((event.target as HTMLElement).closest(INTERACTIVE_SELECTOR)) {
      return
    }

    onRowClick(row, event)
  }

  function handleSort(column: Column<Row>) {
    if (!onSortChange) {
      return
    }

    const isCurrent = sort?.key === column.key

    onSortChange({
      key: column.key,
      direction: isCurrent && sort?.direction === 'ascending' ? 'descending' : 'ascending'
    })
  }

  return (
    <div className={['ua-table', className].filter(Boolean).join(' ')}>
      <table>
        <caption className="visually-hidden">{caption}</caption>
        <thead>
          <tr>
            {columns.map((column) => {
              const isSorted = sort?.key === column.key
              const isSortable = Boolean(column.sortable && onSortChange)

              return (
                <th
                  key={column.key}
                  scope="col"
                  className="header"
                  aria-sort={isSortable ? (isSorted ? sort?.direction : 'none') : undefined}
                >
                  {isSortable ? (
                    <button type="button" className="sort" onClick={() => handleSort(column)}>
                      <span className="text">{column.header}</span>
                      <span className="material-symbols-rounded icon">
                        {isSorted && sort ? SORT_ICON[sort.direction] : 'unfold_more'}
                      </span>
                    </button>
                  ) : (
                    column.header
                  )}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              className={rowClassName}
              key={rowKey(row)}
              onClick={isInteractive ? (event) => handleRowClick(row, event) : undefined}
            >
              {columns.map((column) => (
                <td key={column.key} className="cell">
                  {column.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
