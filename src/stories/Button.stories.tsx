import React from 'react'
import { Story, Meta } from '@storybook/react'
import Button from '../components/Button'

export default {
  title: 'Button',
  component: Button,
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

const Template: Story<React.ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
)

export const primary = Template.bind({})

primary.args = {
  children: 'Button',
  type: 'primary',
}

export const Normal = Template.bind({})

Normal.args = {
  children: 'Button',
  type: 'normal',
}
