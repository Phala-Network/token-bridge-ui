import React from 'react'
import { Story, Meta } from '@storybook/react'
import Input from '../components/Input'

export default {
  title: 'Input',
  component: Input,
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

const Template: Story<React.ComponentProps<typeof Input>> = (args) => (
  <Input {...args} />
)

export const primary = Template.bind({})

primary.args = {
  children: 'Primary Input',
}
