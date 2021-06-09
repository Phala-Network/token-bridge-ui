import React from 'react'
import { Story, Meta } from '@storybook/react'
import InputNumber from '../components/InputNumber'

export default {
  title: 'InputNumber',
  component: InputNumber,
  argTypes: {
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
  },
  parameters: {
    backgrounds: {
      default: 'white',
      values: [{ name: 'white', value: '#ffffff' }],
    },
  },
  decorators: [(Story) => <Story />],
} as Meta

const Template: Story<React.ComponentProps<typeof InputNumber>> = (args) => (
  <InputNumber {...args} />
)

export const primary = Template.bind({})

primary.args = {
  inputSize: 'big',
  placeholder: 'InputNumber',
}
