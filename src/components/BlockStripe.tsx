import { Property } from 'csstype'
import React, { useMemo } from 'react'
import styled from 'styled-components'

export type BlockStripeProps = {
  color?: Property.BackgroundColor
  backgroundColor?: Property.BackgroundColor
  row?: number
  column?: number
  random?: number
  blockSize?: number
  colorCheck?: (status: number, index: number) => boolean
  blockStyle?: React.CSSProperties
}

type RootProps = Required<
  Pick<BlockStripeProps, 'column' | 'row' | 'blockSize'>
>
const Root = styled.div<RootProps>`
  width: ${(props) => props.blockSize * props.column}px;
  height: ${(props) => props.blockSize * props.row}px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) =>
    props.blockSize > props.row ? 'column' : 'row'};
`

const BlockStripe: React.VoidFunctionComponent<BlockStripeProps> = (props) => {
  const {
    row = 8,
    column = 8,
    color = 'black',
    backgroundColor = 'transparent',
    random = 0.6,
    colorCheck = (status: number) => status > random,
    blockSize = 10,
    blockStyle = {},
    ...others
  } = props

  const data = useMemo(() => new Array(row * column).fill(0).map(Math.random), [
    row,
    column,
  ])

  return (
    <Root column={column} blockSize={blockSize} row={row} {...others}>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              width: blockSize,
              height: blockSize,
              backgroundColor: colorCheck(item, index)
                ? color
                : backgroundColor,
              ...blockStyle,
            }}
          />
        )
      })}
    </Root>
  )
}

export default BlockStripe
