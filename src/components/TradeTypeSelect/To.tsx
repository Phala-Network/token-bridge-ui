import React from 'react'
import theme from '../../theme'
import Block from './Block'

type Props = {}

const To: React.FC<Props> = () => {
  return <Block backgroundColor={theme.colors.phala} title="To"></Block>
}

export default To
