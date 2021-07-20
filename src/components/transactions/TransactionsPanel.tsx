import React from 'react'
import styled from 'styled-components'

const TransactionsPanelRoot = styled.div`
  position: fixed;
  width: 410px;
  height: 191px;
  right: 48px;
  bottom: 48px;

  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.3);

  z-index: 2;
`

const Header = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`

type Props = {}

const TransactionsPanel: React.FC<Props> = () => {
  return (
    <TransactionsPanelRoot>
      <Header>TransactionsPanel</Header>
    </TransactionsPanelRoot>
  )
}

export default TransactionsPanel
