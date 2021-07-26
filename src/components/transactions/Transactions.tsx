import { useAtom } from 'jotai'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import transactionsAtom from '../../atoms/transactions'
import useClickAway from '../../hooks/useClickAway'
import ClearButton from './ClearButton'
import TransactionsHeader from './Header'
import TransactionsList from './List/List'

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
  const [transactions, setTransactions] = useAtom(transactionsAtom)

  useClickAway(rootRef, () => {
    setActive(false)
  })

  if (transactions?.length === 0) {
    return null
  }

  return (
    <TransactionsRoot ref={rootRef} className={active ? 'active' : ''}>
      <TransactionsHeader
        active={active}
        onClickHeader={() => setActive((prev) => !prev)}
      />

      {active && (
        <>
          <ClearButton onClick={() => setTransactions([])}>Clear</ClearButton>
          <TransactionsList
            transactions={transactions.map((item) => {
              return {
                ...item,
                from: {
                  ...item.from,
                  amount: item.from.balance,
                },
                to: {
                  ...item.to,
                  amount: item.amount,
                },
                status: 'success',
              }
            })}
          />
        </>
      )}
    </TransactionsRoot>
  )
}

export default Transactions
