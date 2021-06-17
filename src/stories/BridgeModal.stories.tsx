import React from 'react'
import { Story, Meta } from '@storybook/react'
import BridgeModal from '../components/BridgeModal'

export default {
  title: 'BridgeModal',
  component: BridgeModal,
  parameters: {
    backgrounds: {
      default: 'white',
      values: [{ name: 'white', value: '#ffffff' }],
    },
  },
} as Meta

const Template: Story<React.ComponentProps<typeof BridgeModal>> = (args) => (
  <BridgeModal {...args} />
)

export const primary = Template.bind({})

primary.args = {
  children: 'Primary BridgeModal',
}
