import React from 'react'
import { Story, Meta } from '@storybook/react'
import Table from '../components/Table'

export default {
  title: 'Table',
  component: Table,
  parameters: {
    backgrounds: {
      default: 'white',
      values: [{ name: 'white', value: '#ffffff' }],
    },
  },
} as Meta

const Template: Story<React.ComponentProps<typeof Table>> = (args) => {
  const data = [
    {
      firstName: 'rainstorm',
      lastName: 'debt',
      age: 11,
      visits: 98,
      progress: 98,
      status: 'single',
      subRows: undefined,
    },
    {
      firstName: 'rainstorm2',
      lastName: 'debt3',
      age: 112,
      visits: 981,
      progress: 918,
      status: 'single2',
      subRows: undefined,
    },
  ]
  const columns = React.useMemo(
    () => [
      {
        Header: 'Time',
        accessor: 'firstName',
      },
      {
        Header: 'Peg-out',
        accessor: 'lastName',
      },
      {
        Header: 'Peg-in',
        accessor: 'age',
      },
      {
        Header: 'Amount',
        accessor: 'visits',
      },
      {
        Header: 'Amount-in',
        accessor: 'status',
      },
      {
        Header: 'Status',
        accessor: 'progress',
      },
    ],
    []
  )

  return <Table data={data} columns={columns} />
}

export const primary = Template.bind({})

primary.args = {}
