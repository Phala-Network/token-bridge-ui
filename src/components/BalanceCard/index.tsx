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
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

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

export const Header = styled.div`
  font-family: Lato;
  height: 24px;
  padding: 0 8px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
`

export const BlackHeader = styled(Header)`
  background-color: #202020;
  color: #ffffff;
`

export const WhiteHeader = styled(Header)`
  background-color: #ffffff;
  color: #202020;
`

export default BalanceCard
