import Decimal from 'decimal.js'

export default function toFixed(
  value: number | Decimal,
  fractionDigits = 4
): string {
  // NOTE: https://stackoverflow.com/a/65172703/7920298
  return value.toFixed(fractionDigits).replace(/(\.0*|(?<=(\..*))0*)$/, '')
}
