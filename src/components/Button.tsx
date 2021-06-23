import React from 'react'
import styled from 'styled-components'

type ButtonProps = {
  type?: 'normal' | 'primary'
  shape?: 'round' | 'circle'
}

type Props = ButtonProps & React.ComponentProps<typeof ButtonWrap>

const ButtonWrap = styled.button<ButtonProps>`
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
  order: 1;
  padding: 10px 24px 11px;
  text-align: center;
  border-width: 3px;
  border-style: solid;
  border-color: transparent;
  cursor: pointer;
  border-radius: ${(props) => (props.shape === 'round' ? 56 : 0)}px;

  &.primary {
    background: ${(props) => props.theme.colors.phala};
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
  const { children, type = 'normal', shape, ...others } = props
  return (
    <ButtonWrap shape={shape} className={type} {...others}>
      {children}
    </ButtonWrap>
  )
}

export default Button
