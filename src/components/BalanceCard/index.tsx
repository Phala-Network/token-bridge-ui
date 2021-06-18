import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import toFixed from '../../utils/toFixed'
import Dollar from './Doller'

type Props = {
  themeType: 'black' | 'white'
  balance: number
  header: React.ReactNode
}

const Wrap = styled.div<{ active: boolean }>`
  width: 144px;
  height: 128px;
  padding: 8px 0 8px 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s linear;
  box-sizing: border-box;

  ${(props) =>
    props.active
      ? css`
          transform: translate3d(-10px, -10px, 0);
        `
      : css`
          transform: translate3d(0, 0, 0);
        `}

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

const Background = styled.div`
  width: 144px;
  height: 128px;
  background-color: #cccccc;
`

const BalanceCard: React.FC<Props> = (props) => {
  const { themeType, balance = 0, header } = props
  const [active, setActive] = useState(false)

  return (
    <Background
      onClick={() => {
        setActive((prev) => !prev)
      }}>
      <Wrap active={active} className={themeType}>
        {header}
        <Balance>{toFixed(balance)}</Balance>
        <Dollar themeType={themeType}>{toFixed(888.88)}</Dollar>
      </Wrap>
    </Background>
  )
}

export default BalanceCard
