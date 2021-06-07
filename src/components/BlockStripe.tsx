import { Property } from 'csstype'
import React, { ComponentProps, useMemo } from 'react'

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
  const {
    row = 8,
    column = 8,
    color = 'black',
    backgroundColor = 'transparent',
    random = 0.6,
    colorCheck = (status) => status > random,
    size = 10,
    style = {},
    blockStyle = {},
    ...others
  } = props

  const data = useMemo(() => new Array(row * column).fill(0).map(Math.random), [
    row,
    column,
  ])

  return (
    <div
      style={{
        width: size * column,
        height: size * row,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: column > row ? 'column' : 'row',
        ...style,
      }}
      {...others}>
      {data.map((item, index) => {
        return (
          <div
            style={{
              width: size,
              height: size,
              backgroundColor: colorCheck(item, index)
                ? color
                : backgroundColor,
              ...blockStyle,
            }}
          />
        )
      })}
    </div>
  )
}

export default BlockStripe
