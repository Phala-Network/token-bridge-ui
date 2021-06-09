import React from 'react'
import styled from 'styled-components'

type Props = {
  type?: 'normal' | 'primary'
} & React.ComponentProps<typeof ButtonWrap>

const ButtonWrap = styled.button`
  align-items: center;
  border: none;
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
  border-width: 3px;
  border-style: solid;
  border-color: transparent;
  cursor: pointer;

  &.primary {
    background: #d1ff52;
    color: #494949;

    &:hover {
      border-color: #494949;
    }

    &:active {
      background: #ececec;
      border-color: transparent;
    }
  }

  &.normal {
    background: #ececec;
    color: #494949;

    &:hover {
      border-color: #494949;
    }

    &:active {
      background: #ececec;
      border-color: transparent;
    }
  }
`

const Button: React.FC<Props> = (props) => {
  const { children, type = 'normal', ...others } = props
  return (
    <ButtonWrap className={type} {...others}>
      {children}
    </ButtonWrap>
  )
}

export default Button
