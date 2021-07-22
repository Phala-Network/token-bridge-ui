import React from 'react'
import styled from 'styled-components'
import ArrowIcon from './ArrowIcon'
import ItemInfoBlock, { ItemInfoBlockProps } from './ItemInfoBlock'
import JumpIcon from './JumpIcon'
import Status from './Status'

export type TransactionsListItemProps = {
  status: string
  to: ItemInfoBlockProps
  from: ItemInfoBlockProps
}

const ItemRoot = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 12px;
`

const Line = styled.div`
  position: absolute;
  top: 0;
  left: 40px;
  right: 0;
  height: 1px;
  background-color: black;
`

const TransactionsListItem: React.FC<TransactionsListItemProps> = (props) => {
  const { status, to, from } = props

  return (
    <ItemRoot>
      <Status status={status}></Status>

      <ItemInfoBlock {...from}></ItemInfoBlock>

      <ArrowIcon></ArrowIcon>

      <ItemInfoBlock {...to}></ItemInfoBlock>

      <JumpIcon></JumpIcon>

      <Line></Line>
    </ItemRoot>
  )
}

export default TransactionsListItem
