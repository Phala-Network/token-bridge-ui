import React, { useState } from 'react'
import { useRef } from 'react'
import styled, { css } from 'styled-components'
import useClickAway from '../../hooks/useClickAway'
import toFixed from '../../utils/toFixed'
import Dollar from './Dollar'
import Menu, { MenuProps } from './Menu'

type Props = {
  themeType: 'black' | 'white'
  balance: number
  header: React.ReactNode
  dollar?: number
} & MenuProps

const Wrap = styled.div<{ active: boolean }>`
  width: 144px;
  height: 128px;
  padding: 8px 0 8px 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* cursor: pointer; */
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

  ${(props) => props.theme.size.sm} {
    width: 100%;
    height: 108px;
    padding: 12px;
  }
`

const Balance = styled.div`
  font-family: PT Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  flex: 1;
  margin-top: 16px;
  ${(props) => props.theme.size.sm} {
    margin-top: 7px;
    line-height: 25px;
  }
`

const Background = styled.div`
  width: 144px;
  height: 128px;
  background-color: #cccccc;
  margin-top: 50px;
  margin-right: 30px;
  ${(props) => props.theme.size.sm} {
    margin-top: 18px;
    margin-right: 0;
    width: 100%;
    height: 108px;
  }
`

const BalanceCard: React.FC<Props> = (props) => {
  const {
    themeType,
    balance = 0,
    header,
    disableTransfer,
    disableBridge,
    disableConvert,
    dollar = 0,
  } = props
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useClickAway(ref, () => {
    setActive(false)
  })

  return (
    <Background
      ref={ref}
      // onMouseEnter={() => setActive(true)}
      // onMouseLeave={() => setActive(false)}
      // NOTE: prevent mouse emulation events from touch events
      // onTouchEnd={(e) => e.preventDefault()}
    >
      <Wrap active={active} className={themeType}>
        {header}
        <Balance>{toFixed(balance)}</Balance>
        <Dollar themeType={themeType}>{toFixed(dollar, 2)}</Dollar>
        <Menu
          active={active}
          disableTransfer={disableTransfer}
          disableBridge={disableBridge}
          disableConvert={disableConvert}></Menu>
      </Wrap>
    </Background>
  )
}

export default BalanceCard
