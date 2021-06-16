import React from 'react'
import { Story, Meta } from '@storybook/react'
import TransferModal from '../components/TransferModal'

export default {
  title: 'TransferModal',
  component: TransferModal,
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [{ name: 'gray', value: '#ECECEC' }],
    },
  },
} as Meta

const Template: Story<React.ComponentProps<typeof TransferModal>> = (args) => (
  <TransferModal {...args} />
)

export const active = Template.bind({})

active.args = {}
