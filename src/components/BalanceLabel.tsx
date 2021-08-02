import currency from 'currency.js'
import { Decimal } from 'decimal.js'
import React from 'react'

type Props = {
  value: Decimal
  precision?: number
  type?: string
}

const BalanceLabel: React.FC<Props> = (props) => {
  const { precision = 4, value, type = '' } = props
  const zero = new Decimal(0)

  let balanceDisplay =
    !value || value.lessThan(zero)
      ? '...'
      : currency(value.toString(), { symbol: '', precision })
          .format()
          .toString()

  if (value.equals(zero)) {
    balanceDisplay = '0'
  }

  const result = `${balanceDisplay} ${type}`.trim()

  return <span>{result}</span>
}

export default BalanceLabel
