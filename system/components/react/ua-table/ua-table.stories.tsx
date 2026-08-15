import { useState } from 'react'
import { fn } from 'storybook/test'
import UaTable, { type Column, type TableSort } from './ua-table.tsx'

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

const sortableColumns: Column<Report>[] = columns.map(column =>
  column.key === 'status' ? column : { ...column, sortable: true }
)

export default {
  title: 'Component Library/UA-Table',
  component: UaTable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'A generic, presentation-only data table. Columns and rows are supplied by the caller; the component knows nothing about what it renders.'
    }
  },
  argTypes: {
    caption: {
      description: 'Accessible name of the table. Rendered visually hidden.',
      control: 'text'
    },
    columns: {
      description:
        'Column definitions. Each supplies a `key`, a `header` node and a `render` callback. Set `sortable` to expose a sort control in the header.',
      control: false
    },
    rows: { description: 'Row data. Rendered in the order given.', control: false },
    rowKey: { description: 'Returns a stable React key for a row.', control: false },
    emptyState: {
      description: 'Rendered in place of the table when there are no rows.',
      control: false
    },
    className: { description: 'Appended to the root class list.', control: 'text' },
    rowBehavior: {
      description:
        'Sets whether rows respond to a pointer. `interactive` adds the hover affordance and enables `onRowClick`. Rows never become focusable — supply a real link inside a cell for the keyboard path.',
      control: 'inline-radio',
      options: ['static', 'interactive']
    },
    sort: {
      description:
        'Current sort state. Controlled — the component paints the indicator and emits `aria-sort`, but never reorders `rows`.',
      control: false
    },
    onRowClick: {
      description:
        'Fires when a row is clicked. Only used when `rowBehavior` is `interactive`. Clicks originating on a link, button or form control inside a cell are ignored.',
      action: 'rowClick',
      table: { category: 'Events' }
    },
    onSortChange: {
      description:
        'Fires with the next sort state when a sortable header is activated. Required for `sortable` columns to render a control.',
      action: 'sortChange',
      table: { category: 'Events' }
    }
  },
  args: {
    onRowClick: fn(),
    onSortChange: fn()
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

export const InteractiveRows = {
  args: {
    caption: 'Laudos',
    columns: [
      {
        key: 'locationCode',
        header: 'Local',
        render: (row: Report) => <a href={`#${row.id}`}>{row.locationCode}</a>
      },
      ...columns.slice(1)
    ],
    rows,
    rowKey: (row: Report) => row.id,
    rowBehavior: 'interactive'
  },
  parameters: {
    docs: {
      description: {
        story:
          'The whole row responds to a click, but the accessible name and the keyboard path come from a real link in the first cell. Clicking that link does not fire `onRowClick` twice.'
      }
    }
  }
}

export const Sortable = {
  render: (args: { caption: string; rowKey: (row: Report) => string }) => {
    const [sort, setSort] = useState<TableSort>({ key: 'locationCode', direction: 'ascending' })

    const sorted = [...rows].sort((a, b) => {
      const key = sort.key as keyof Report
      const order = String(a[key]).localeCompare(String(b[key]))
      return sort.direction === 'ascending' ? order : -order
    })

    return (
      <UaTable
        {...args}
        columns={sortableColumns}
        rows={sorted}
        sort={sort}
        onSortChange={setSort}
      />
    )
  },
  args: {
    caption: 'Laudos',
    rowKey: (row: Report) => row.id
  },
  parameters: {
    docs: {
      description: {
        story:
          'Sorting is controlled: the component reports the requested state and the caller reorders the rows. `status` is left unsortable to show a mixed header row.'
      }
    }
  }
}
