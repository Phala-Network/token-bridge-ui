import { Property } from 'csstype'
import React, { ComponentProps, useMemo } from 'react'
import { useStyletron } from 'styletron-react'

export type BlockStripeProps = {
  color?: Property.BackgroundColor
  backgroundColor?: Property.BackgroundColor
  row?: number
  column?: number
  random?: number
  size?: number
  colorCheck?: (status: number, index: number) => boolean
  blockStyle?: React.CSSProperties
} & ComponentProps<'div'>

const BlockStripe: React.FC<BlockStripeProps> = (props) => {
  const [css] = useStyletron()
  const {
    row = 8,
    column = 8,
    color = 'black',
    backgroundColor = 'transparent',
    random = 0.6,
    colorCheck = (status) => status > random,
    size = 10,
    ...others
  } = props

  const data = useMemo(() => new Array(row * column).fill(0).map(Math.random), [
    row,
    column,
  ])

  return (
    <div
      className={css({
        width: `${size * column}px`,
        height: `${size * row}px`,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: column > row ? 'column' : 'row',
      })}
      {...others}>
      {data.map((item, index) => {
        return (
          <div
            className={css({
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: colorCheck(item, index)
                ? color
                : backgroundColor,
            })}
          />
        )
      })}
    </div>
  )
}

export default BlockStripe
