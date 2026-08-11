import type { ReactNode } from 'react'
import '../../styles/ua-table.scss'

export interface Column<Row> {
  key: string
  header: ReactNode
  render: (row: Row) => ReactNode
}

export interface UaTableProps<Row> {
  caption: string
  columns: Column<Row>[]
  rows: Row[]
  rowKey: (row: Row) => string
  emptyState?: ReactNode
  className?: string
}

export default function UaTable<Row>({
  caption,
  columns,
  rows,
  rowKey,
  emptyState,
  className
}: UaTableProps<Row>) {
  if (rows.length === 0 && emptyState) {
    return <>{emptyState}</>
  }

  return (
    <div className={['ua-table', className].filter(Boolean).join(' ')}>
      <table>
        <caption className="visually-hidden">{caption}</caption>
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.key} scope="col" className="header">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr className="row" key={rowKey(row)}>
              {columns.map(column => (
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
