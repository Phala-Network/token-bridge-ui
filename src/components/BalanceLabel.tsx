import currency from 'currency.js'
import { Decimal } from 'decimal.js'
import React from 'react'

type Props = {
  value: Decimal
  precision: number
  type?: string
}

const BalanceLabel: React.FC<Props> = (props) => {
  const { precision = 4, value, type = '' } = props

  const balanceDisplay =
    !value || value.lessThan(new Decimal(0))
      ? '...'
      : currency(value.toString(), { symbol: '', precision })
          .format()
          .toString()

  const result = `${balanceDisplay} ${type}`.trim()

  return <span>{result}</span>
}

export default BalanceLabel
