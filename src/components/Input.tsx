import React from 'react'
import styled from 'styled-components'

type Props = {}

const InputWrap = styled.div`
  width: 416px;
  height: 56px;
  left: 421px;
  top: 296px;
  background: #ffffff;
`

const Input: React.FC<Props> = (props) => {
  return (
    <InputWrap>
      Input
      <input type='text' />
    </InputWrap>
  )
}

export default Input
