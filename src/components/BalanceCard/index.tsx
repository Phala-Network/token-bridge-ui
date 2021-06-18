import React from 'react'
import styled from 'styled-components'
import toFixed from '../../utils/toFixed'
import Dollar from './Doller'

type Props = {
  themeType: 'black' | 'white'
  balance: number
}

const Wrap = styled.div`
  width: 144px;
  height: 128px;
  padding: 8px;

  &.black {
    background: #202020;
    color: #ececec;
  }

  &.white {
    color: #202020;
    background: #ffffff;
  }
`

const Balance = styled.div`
  font-family: PT Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
`

const BalanceCard: React.FC<Props> = (props) => {
  const { themeType, balance = 0 } = props

  return (
    <Wrap className={themeType}>
      <Balance>{toFixed(balance)}</Balance>
      <Dollar themeType={themeType}>{toFixed(888.88)}</Dollar>
    </Wrap>
  )
}

export default BalanceCard
