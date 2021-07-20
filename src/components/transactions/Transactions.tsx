import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import useClickAway from '../../hooks/useClickAway'
import TransactionsHeader from './TransactionsHeader'

const TransactionsRoot = styled.div`
  position: fixed;
  width: 210px;
  height: 44px;
  right: 48px;
  bottom: 48px;

  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;

  z-index: 2;

  transition: all 0.3s ease;

  &.active {
    width: 410px;
    height: 191px;
    box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.3);
  }
`

const Transactions: React.FC = () => {
  const [active, setActive] = useState(false)
  const rootRef = useRef(null)

  useClickAway(rootRef, () => {
    setActive(false)
  })

  return (
    <TransactionsRoot ref={rootRef} className={active ? 'active' : ''}>
      <TransactionsHeader onClick={() => setActive(true)}></TransactionsHeader>
    </TransactionsRoot>
  )
}

export default Transactions
