import React from 'react'
import styled from 'styled-components'
import Spacer from '../Spacer'
import TransactionsPanel from './TransactionsPanel'

const TransactionRoot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  position: fixed;
  right: 48px;
  bottom: 48px;
  background: #ffffff;
  z-index: 1;

  color: #000000;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

const TransactionsButton: React.FC = () => {
  const [visible, setVisible] = React.useState(false)

  return (
    <>
      <TransactionRoot onClick={() => setVisible(true)}>
        <svg
          width="9"
          height="10"
          viewBox="0 0 9 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 0.654111L0 0.5L0.154109 9.5H2.11955L2.11955 2.61955L9 2.61955V0.654111Z"
            fill="black"
          />
        </svg>

        <Spacer x={1}></Spacer>

        <span>Transactions Panel</span>
      </TransactionRoot>

      {visible && <TransactionsPanel></TransactionsPanel>}
    </>
  )
}

export default TransactionsButton
