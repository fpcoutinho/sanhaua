import { useState } from 'react'
import { fn } from 'storybook/test'
import UaPagination from './ua-pagination.tsx'

export default {
  title: 'Component Library/UA-Pagination',
  component: UaPagination,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:
        'Page controls with a range summary. Degrades to previous/next when the total is unknown — an API returning a bare array cannot say how many pages exist.'
    }
  },
  argTypes: {
    page: { description: 'Current page, 1-based.', control: 'number' },
    pageSize: { description: 'Rows per page.', control: 'number' },
    total: {
      description:
        'Total number of records. Omit it to fall back to previous/next without numbered pages.',
      control: 'number'
    },
    count: {
      description:
        'Rows on the current page. Used to infer whether a next page exists when `total` is unknown.',
      control: 'number'
    },
    label: { description: 'Accessible name of the navigation landmark.', control: 'text' },
    previousLabel: { description: 'Sets the previous button label.', control: 'text' },
    nextLabel: { description: 'Sets the next button label.', control: 'text' },
    summary: {
      description:
        'Formats the range line. Omit it and no summary renders — the controls take the full width instead.',
      control: false
    },
    onPageChange: {
      description: 'Fires with the requested page.',
      action: 'pageChange',
      table: { category: 'Events' }
    }
  },
  args: {
    onPageChange: fn()
  }
}

export const Default = {
  render: (args: { pageSize: number; total?: number; count?: number }) => {
    const [page, setPage] = useState(1)
    return <UaPagination {...args} page={page} onPageChange={setPage} />
  },
  args: { pageSize: 8, total: 256 },
  parameters: {
    docs: {
      description: { story: 'No `summary`: the controls span the full width.' }
    }
  }
}

export const WithSummary = {
  render: (args: { pageSize: number; total?: number }) => {
    const [page, setPage] = useState(1)
    return (
      <UaPagination
        {...args}
        page={page}
        onPageChange={setPage}
        summary={(first, last, total) => `Showing data ${first} to ${last} of ${total} entries`}
      />
    )
  },
  args: { pageSize: 8, total: 256 }
}

export const ManyPages = {
  render: (args: { pageSize: number; total?: number }) => {
    const [page, setPage] = useState(20)
    return <UaPagination {...args} page={page} onPageChange={setPage} />
  },
  args: { pageSize: 8, total: 320 },
  parameters: {
    docs: { description: { story: 'The page window collapses the middle with gaps.' } }
  }
}

export const WithoutTotal = {
  render: (args: { pageSize: number; count?: number }) => {
    const [page, setPage] = useState(1)
    return <UaPagination {...args} page={page} onPageChange={setPage} />
  },
  args: { pageSize: 8, count: 8 },
  parameters: {
    docs: {
      description: {
        story:
          'No `total`: no numbered pages and no "of N". A full page is taken as the hint that another one exists.'
      }
    }
  }
}
