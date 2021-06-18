import React from 'react'
import styled from 'styled-components'

type Props = {
  themeType: 'black' | 'white'
}

const DollarWrap = styled.div`
  height: 20px;
  border: 1px solid #202020;
  font-size: 12px;
  line-height: 13px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`

const Dollar: React.FC<Props> = (props) => {
  const { children, themeType } = props

  return <DollarWrap className={themeType}>{children}</DollarWrap>
}

export default Dollar
