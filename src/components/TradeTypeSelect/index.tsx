import React from 'react'
import ExchangeIcon from './ExchangeIcon'
import Form from './Form'
import To from './To'

type Props = {
  value?: any
  onChange?: (value: any) => void
}

const index: React.FC<Props> = (props) => {
  return (
    <div>
      <Form></Form>
      <ExchangeIcon></ExchangeIcon>
      <To></To>
    </div>
  )
}

export default index
