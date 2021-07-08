import React from 'react'
import { Target } from '.'
import Block from './Block'

type Props = {
  value: Target
  disableSelect: boolean
}

const Form: React.FC<Props> = (props) => {
  return <Block {...props} backgroundColor="#c5cdf2" title="Form" />
}

export default Form
