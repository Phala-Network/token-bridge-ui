import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import RcInputNumber from 'rc-input-number'
import useClickAway from '../hooks/useClickAway'

type Props = {
  type?: 'text' | 'number'
  size?: 'default' | 'large'
  textAlign?: 'left' | 'right'
  before?: React.ReactNode
  after?: React.ReactNode
  width?: number
  placeholder?: string
} & React.ComponentProps<typeof InputWrapper>

const Wrapper = styled.div<{
  height: number
  fontSize: number
  active: boolean
}>`
  background: white;
  border-radius: 0;
  color: #494949;
  font-weight: bold;
  font-size: 20px;
  font-family: PT Mono;
  display: flex;
  align-items: center;
  padding: 0 12px;
  line-height: ${(props) => props.height}px;
  height: ${(props) => props.height}px;
  font-size: ${(props) => props.fontSize}px;
  background: #ececec;
  border: 3px solid transparent;
  border-color: ${(props) => (props.active ? '#494949' : 'transparent')};

  &:hover,
  &:active {
    border-color: #494949;
  }
`

const InputWrapper = styled.div<{
  height: number
  width: number
  textAlign: 'left' | 'right'
}>`
  width: ${(props) => props.width}px;
  flex: 1;

  & input {
    font-size: 16px;
    font-weight: 600;
    background: transparent;
    border: none;
    outline: none;
    text-align: ${(props) => props.textAlign};
    margin: 0;
    width: 100%;

    &::placeholder {
      color: #bbbbbb;
    }
  }
`

const Before = styled.span`
  margin-right: 6px;
`

const After = styled.span`
  margin-left: 6px;
`

const Input: React.FC<Props> = (props) => {
  const {
    size,
    width = 60,
    textAlign = 'left',
    type = 'text',
    ...others
  } = props
  const height = React.useMemo(() => size, [size]) === 'large' ? 56 : 28
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useClickAway(ref, () => {
    setActive(false)
  })

  const fontSize = React.useMemo(() => size, [size]) === 'large' ? 25 : 18

  return (
    <Wrapper active={active} ref={ref} height={height} fontSize={fontSize}>
      {props.before && <Before>{props.before}</Before>}
      <InputWrapper height={height} width={width} textAlign={textAlign}>
        {type === 'text' && <input type="text" {...others} />}

        {type === 'number' && (
          <RcInputNumber
            min={0}
            upHandler={null}
            downHandler={null}
            onClick={() => setActive(true)}
            onBlur={() => setActive(false)}
            {...others}
          />
        )}
      </InputWrapper>
      {props.after && <After>{props.after}</After>}
    </Wrapper>
  )
}

export default Input
