import React from 'react'
import { Target } from '.'
import theme from '../../theme'
import Block from './Block'

type Props = {
  value: Target
  disableSelect: boolean
}

const To: React.FC<Props> = (props) => {
  return (
    <Block {...props} backgroundColor={theme.colors.phala} title="To"></Block>
  )
}

export default To
