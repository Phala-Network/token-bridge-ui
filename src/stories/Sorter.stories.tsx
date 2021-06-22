import React from 'react'
import { Story, Meta } from '@storybook/react'
import Sorter from '../components/Table/Sorter'

export default {
  title: 'Sorter',
  component: Sorter,
  parameters: {
    backgrounds: {
      default: 'white',
      values: [{ name: 'white', value: '#ffffff' }],
    },
  },
} as Meta

const Template: Story<React.ComponentProps<typeof Sorter>> = (args) => (
  <Sorter {...args} />
)

export const primary = Template.bind({})

primary.args = {
  children: ' Sorter',
}
