import UaTable, { type Column } from './ua-table.tsx'

interface Report {
  id: string
  locationCode: string
  inspectedAt: string
  status: 'draft' | 'published'
}

const rows: Report[] = [
  { id: '1', locationCode: 'CCHLA-102', inspectedAt: '2026-03-02 09:00', status: 'published' },
  { id: '2', locationCode: 'CE-014', inspectedAt: '2026-04-18 14:30', status: 'draft' }
]

const columns: Column<Report>[] = [
  { key: 'locationCode', header: 'Local', render: row => row.locationCode },
  { key: 'inspectedAt', header: 'Inspecionado em', render: row => row.inspectedAt },
  { key: 'status', header: 'Status', render: row => row.status }
]

export default {
  title: 'Component Library/UA-Table',
  component: UaTable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'A generic, presentation-only data table. Columns and rows are supplied by the caller; the component knows nothing about what it renders.'
    }
  }
}

export const Default = {
  args: {
    caption: 'Laudos',
    columns,
    rows,
    rowKey: (row: Report) => row.id
  }
}

export const Empty = {
  args: {
    caption: 'Laudos',
    columns,
    rows: [],
    rowKey: (row: Report) => row.id,
    emptyState: <p>Nenhum laudo encontrado.</p>
  }
}
