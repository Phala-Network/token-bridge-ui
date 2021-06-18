import React from 'react'
import { Story, Meta } from '@storybook/react'
import BalanceCard from '../components/BalanceCard'

export default {
  title: 'BalanceCard',
  component: BalanceCard,
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [{ name: 'gray', value: '#ECECEC' }],
    },
  },
} as Meta

const Template: Story<React.ComponentProps<typeof BalanceCard>> = (args) => (
  <BalanceCard {...args} />
)

export const black = Template.bind({})

black.args = {
  balance: 12345.6789,
  themeType: 'black',
}

export const white = Template.bind({})

white.args = {
  balance: 12345.6789,
  themeType: 'white',
}
