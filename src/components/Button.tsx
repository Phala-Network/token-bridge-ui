import React from 'react'
import styled from 'styled-components'

type Props = {}

const ButtonWrap = styled.button`
  align-items: center;
  background: #d1ff52;
  border: none;
  color: #494949;
  display: flex;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  height: 56px;
  justify-content: center;
  left: 111px;
  line-height: 19px;
  margin: 0px 7px;
  order: 1;
  padding: 10px 24px 11px;
  text-align: center;
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  cursor: pointer;

  &:hover {
    border-color: #494949;
  }

  &:active {
    background: #ececec;
  }
`

const Button: React.FC<Props> = (props) => {
  return <ButtonWrap>Button</ButtonWrap>
}

export default Button
