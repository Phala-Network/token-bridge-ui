import React from 'react'
import styled from 'styled-components'

type Props = {}

const Wrap = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: #868686;
  padding: 8px 16px;
  margin: 16px 0;
  display: block;
  border: 1px solid transparent;
  cursor: pointer;
  max-width: 120px;

  &:hover {
    color: #d1ff52;
    border: 1px solid #d1ff52;
    box-shadow: 4px 4px 0px #d1ff52;
  }
`

const Link: React.FC<Props> = (props) => {
  const { children } = props
  return <Wrap>{children}</Wrap>
}

export default Link
