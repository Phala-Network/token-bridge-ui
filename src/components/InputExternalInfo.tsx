import React, { ComponentProps } from 'react'
import styled from 'styled-components'
import toFixed from '../utils/toFixed'

const Label = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
`

const Type = styled.span`
  font-family: PT Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 13px;
  color: #000000;
  margin-left: 6px;
`

const Value = styled.span`
  font-family: PT Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 13px;
  color: #000000;
  margin-left: 2px;
`

type Props = {
  label?: string
  value?: number | string
  type?: string
} & ComponentProps<'div'>

const InputExternalInfo: React.FC<Props> = (props) => {
  const { label, value, type, ...others } = props

  return (
    <div {...others}>
      {label && <Label>{label}:</Label>}
      {value && (
        <Value>{typeof value === 'number' ? toFixed(value) : value}</Value>
      )}
      {type && <Type>{type}</Type>}
    </div>
  )
}

export default InputExternalInfo
