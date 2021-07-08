import React from 'react'
import ExchangeIcon from './ExchangeIcon'
import Form from './Form'
import To from './To'

export type FromAndTo = {
  from: Target
  to: Target
}

export type Target = {
  network: string
  type: string
}

export type TradeTypeSelectProps = {
  disableSelect?: boolean
  value?: FromAndTo
  onChange?: (value: FromAndTo) => void
} & React.ComponentProps<'div'>

export const DEFAULT_VALUE = {
  from: {
    type: 'ePHA',
    network: 'ethereum',
  },
  to: {
    type: 'PHA',
    network: 'phala',
  },
}

const index: React.FC<TradeTypeSelectProps> = (props) => {
  const {
    onChange,
    value = DEFAULT_VALUE,
    disableSelect = false,
    ...others
  } = props

  const exchange = () => {
    onChange?.({
      from: value.to,
      to: value.from,
    })
  }

  return (
    <div {...others}>
      <Form disableSelect={disableSelect} value={value?.from}></Form>
      <ExchangeIcon onClick={exchange}></ExchangeIcon>
      <To disableSelect={disableSelect} value={value?.to}></To>
    </div>
  )
}

export default index
