import currency from 'currency.js'
import { Decimal } from 'decimal.js'
import React from 'react'

type Props = {
  value: Decimal
  precision?: number
  type?: string
}

function trim(value: string): string {
  const last = value[value.length - 1]

  if (last === '0' || last === '.') {
    return trim(value.slice(0, -1))
  } else {
    return value
  }
}

const BalanceLabel: React.FC<Props> = (props) => {
  const { precision = 6, value, type = '' } = props
  const zero = new Decimal(0)

  let balanceDisplay =
    !value || value.lessThan(zero)
      ? '...'
      : currency(value.toString(), { symbol: '', precision })
          .format()
          .toString()

  balanceDisplay = trim(balanceDisplay)

  if (value.equals(zero)) {
    balanceDisplay = '0'
  }

  const result = `${balanceDisplay} ${type}`.trim()

  return <span>{result}</span>
}

export default BalanceLabel
