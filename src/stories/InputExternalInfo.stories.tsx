import React from 'react'
import { Story, Meta } from '@storybook/react'
import InputExternalInfo from '../components/InputExternalInfo'

export default {
  title: 'InputExternalInfo',
  component: InputExternalInfo,
  argTypes: {
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
  },
  parameters: {
    backgrounds: {
      default: 'white',
      values: [
        { name: 'black', value: '#202020' },
        { name: 'white', value: '#FFFFFF' },
        { name: 'gray', value: '#ECECEC' },
      ],
    },
  },
  decorators: [(Story) => <Story />],
} as Meta

const Template: Story<React.ComponentProps<typeof InputExternalInfo>> = (
  args
) => <InputExternalInfo {...args} />

export const primary = Template.bind({})

primary.args = {
  label: 'Fee',
  value: 1234.56789,
  type: 'ETH',
}
