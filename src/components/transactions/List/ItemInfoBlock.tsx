import React from 'react'
import styled from 'styled-components'
import abridgeString from '../../../utils/abridgeString'

export type ItemInfoBlockProps = {
  account: string
  amount: number
  network: string
}

const ItemInfoBlockRoot = styled.div`
  font-family: PT Mono;
  font-weight: normal;
  font-size: 10px;
  line-height: 11px;
`

const B = styled.b`
  font-weight: bold;
  font-family: 'Lato';
`

const NetworkName = styled.span`
  text-transform: capitalize;
  font-weight: bold;
  font-family: 'Lato';
`

const ItemInfoBlock: React.FC<ItemInfoBlockProps> = (props) => {
  const { account, amount, network } = props

  return (
    <ItemInfoBlockRoot>
      <div>
        <NetworkName>{network}</NetworkName>: {abridgeString(account)}
      </div>
      <div>
        {amount?.toString()} <B>PHA</B>
      </div>
    </ItemInfoBlockRoot>
  )
}

export default ItemInfoBlock
