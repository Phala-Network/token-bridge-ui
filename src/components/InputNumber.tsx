import React from 'react'
import styled from 'styled-components'
import RcInputNumber, { InputNumberProps } from 'rc-input-number'

type Props = InputNumberProps & {
  inputSize?: 'default' | 'big'
  textAlign?: 'left' | 'right'
  before?: React.ReactNode
  after?: React.ReactNode
  width?: number
}

const Wrapper = styled.div<{ height: number; fontSize: number }>`
  background: white;
  border-radius: 0;
  color: black;
  display: flex;
  align-items: center;
  padding: 0 12px;
  line-height: ${(props) => props.height}px;
  height: ${(props) => props.height}px;
  font-size: ${(props) => props.fontSize}px;
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
  }
`

const Before = styled.span`
  margin-right: 6px;
`

const After = styled.span`
  margin-left: 6px;
`

const InputNumber: React.FC<Props> = (props) => {
  const { inputSize, width = 60, textAlign = 'left', ...others } = props
  const height = React.useMemo(() => inputSize, [inputSize]) === 'big' ? 56 : 24
  const fontSize =
    React.useMemo(() => inputSize, [inputSize]) === 'big' ? 25 : 14

  return (
    <Wrapper height={height} fontSize={fontSize}>
      {props.before && <Before>{props.before}</Before>}
      <InputWrapper height={height} width={width} textAlign={textAlign}>
        <RcInputNumber
          min={0}
          upHandler={null}
          downHandler={null}
          {...others}
        />
      </InputWrapper>
      {props.after && <After>{props.after}</After>}
    </Wrapper>
  )
}

export default InputNumber
