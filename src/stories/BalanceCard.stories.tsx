import React from 'react'
import { Story, Meta } from '@storybook/react'
import BalanceCard from '../components/BalanceCard'

export default {
  title: 'BalanceCard',
  component: BalanceCard,
  parameters: {
    backgrounds: {
      default: 'white',
      values: [{ name: 'white', value: '#ffffff' }],
    },
  },
} as Meta

const Template: Story<React.ComponentProps<typeof BalanceCard>> = (args) => (
  <BalanceCard {...args} />
)

export const primary = Template.bind({})

primary.args = {
  children: 'Primary BalanceCard',
}
