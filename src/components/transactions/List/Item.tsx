import React from 'react'
import styled from 'styled-components'
import ArrowIcon from './ArrowIcon'
import ItemInfoBlock, { ItemInfoBlockProps } from './ItemInfoBlock'
import JumpIcon from './JumpIcon'
import Status from './Status'

export type TransactionsListItemProps = {
  status: string
  hash: string
  to: ItemInfoBlockProps
  from: ItemInfoBlockProps
}

const ItemRoot = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 12px;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
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
  const { status, to, from, hash } = props

  const link = ` https://kovan.etherscan.io/tx/${hash}`

  return (
    <ItemRoot href={link} target="_blank">
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
