import React from 'react'
import styled from 'styled-components'
import toFixed from '../../utils/toFixed'
import Dollar from './Doller'

type Props = {
  themeType: 'black' | 'white'
  balance: number
  header: React.ReactNode
}

const Wrap = styled.div`
  width: 144px;
  height: 128px;
  padding: 8px 0 8px 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  cursor: pointer;

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
  margin-bottom: 26px;
`

const BalanceCard: React.FC<Props> = (props) => {
  const { themeType, balance = 0, header } = props

  return (
    <Wrap className={themeType}>
      {header}
      <Balance>{toFixed(balance)}</Balance>
      <Dollar themeType={themeType}>{toFixed(888.88)}</Dollar>
    </Wrap>
  )
}

export default BalanceCard
