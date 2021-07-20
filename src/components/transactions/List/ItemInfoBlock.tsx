import React from 'react'
import styled from 'styled-components'

export type ItemInfoBlockProps = {
  address: string
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
`

const NetworkName = styled.span`
  text-transform: capitalize;
`

const ItemInfoBlock: React.FC<ItemInfoBlockProps> = (props) => {
  const { address, amount, network } = props

  return (
    <ItemInfoBlockRoot>
      <div>
        <NetworkName>{network}</NetworkName>: {address?.slice(0, 6)}...
        {address?.slice(-4)}
      </div>
      <div>
        {amount} <B>PHA</B>
      </div>
    </ItemInfoBlockRoot>
  )
}

export default ItemInfoBlock
