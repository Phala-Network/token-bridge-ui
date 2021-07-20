import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import useClickAway from '../../hooks/useClickAway'
import ClearButton from './ClearButton'
import TransactionsHeader from './Header'
import TransactionsList from './List/List'

const TEST_DATA = [
  {
    status: 'success',
    from: {
      network: 'ethereum',
      address: '0xo298ofhwoehefo982i9w3fh',
      amount: 123,
    },
    to: {
      network: 'khala',
      address: 'ofhwoehefo982i9w3fh',
      amount: 123,
    },
  },
  {
    status: 'success',
    from: {
      network: 'ethereum',
      address: '0xo298ofhwoehefo982i9w3fh',
      amount: 123,
    },
    to: {
      network: 'khala',
      address: 'ofhwoehefo982i9w3fh',
      amount: 123,
    },
  },
  {
    status: 'pending',
    from: {
      network: 'ethereum',
      address: '0xo298ofhwoehefo982i9w3fh',
      amount: 123,
    },
    to: {
      network: 'khala',
      address: 'ofhwoehefo982i9w3fh',
      amount: 123,
    },
  },
  {
    status: 'pending',
    from: {
      network: 'ethereum',
      address: '0xo298ofhwoehefo982i9w3fh',
      amount: 123,
    },
    to: {
      network: 'khala',
      address: 'ofhwoehefo982i9w3fh',
      amount: 123,
    },
  },
]

const TransactionsRoot = styled.div`
  position: fixed;
  width: 210px;
  height: 44px;
  right: 48px;
  bottom: 48px;
  transform: translate3d(0, 0, 0);
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  z-index: 2;
  transition: all 0.2s ease;

  &.active {
    width: 410px;
    height: 191px;
    box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.3);
  }
`

const Transactions: React.FC = () => {
  const [active, setActive] = useState(false)
  const rootRef = useRef(null)
  const [data, setData] = useState(TEST_DATA)

  useClickAway(rootRef, () => {
    setActive(false)
  })

  return (
    <TransactionsRoot ref={rootRef} className={active ? 'active' : ''}>
      <TransactionsHeader
        active={active}
        onClickHeader={() => setActive((prev) => !prev)}
      />

      {active && (
        <>
          <ClearButton onClick={() => setData([])}>Clear</ClearButton>
          <TransactionsList transactions={data} />
        </>
      )}
    </TransactionsRoot>
  )
}

export default Transactions
