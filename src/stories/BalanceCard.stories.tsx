import React from 'react'
import { Story, Meta } from '@storybook/react'
import BalanceCard, {
  BlackHeader,
  PrimaryHeader,
  WhiteHeader,
} from '../components/BalanceCard'

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
  header: <WhiteHeader>GRAPH</WhiteHeader>,
}

export const white = Template.bind({})

white.args = {
  balance: 12345.6789,
  themeType: 'white',
  header: <BlackHeader>GRAPH</BlackHeader>,
}

export const primaryHeader = Template.bind({})

primaryHeader.args = {
  balance: 888.8888,
  themeType: 'black',
  header: <PrimaryHeader>ePHA</PrimaryHeader>,
}
