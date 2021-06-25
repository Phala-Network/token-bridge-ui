import React from 'react'
import Input from './Input'

const InputNumber: React.FC<React.ComponentProps<typeof Input>> = (props) => {
  return <Input {...props} type="number"></Input>
}

export default InputNumber
