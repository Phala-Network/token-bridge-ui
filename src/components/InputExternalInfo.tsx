import React from 'react'
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
  value?: number
  type?: string
}

const InputExternalInfo: React.FC<Props> = (props) => {
  const { label, value, type } = props

  return (
    <div>
      {label && <Label>{label}:</Label>}
      {value && <Value>{toFixed(value)}</Value>}
      {type && <Type>{type}</Type>}
    </div>
  )
}

export default InputExternalInfo