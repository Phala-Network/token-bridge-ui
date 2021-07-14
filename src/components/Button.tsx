import React from 'react'
import styled from 'styled-components'

type ButtonProps = {
  type?: 'normal' | 'primary'
  shape?: 'round' | 'circle'
  loading?: boolean
}

type Props = ButtonProps & React.ComponentProps<typeof ButtonWrap>

const ButtonWrap = styled.button<ButtonProps>`
  position: relative;
  align-items: center;
  border: none;
  display: flex;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  height: 56px;
  justify-content: center;
  line-height: 19px;
  order: 1;
  padding: 10px 24px 11px;
  text-align: center;
  border-width: 3px;
  border-style: solid;
  border-color: transparent;
  cursor: pointer;
  border-radius: ${(props) => (props.shape === 'round' ? 56 : 0)}px;

  ${({ loading }) => loading && `color: transparent; `}

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

const Loading = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button: React.FC<Props> = (props) => {
  const { loading = false, children, type = 'normal', shape, ...others } = props

  return (
    <ButtonWrap disabled={loading} shape={shape} className={type} {...others}>
      {children}
    </ButtonWrap>
  )
}

export default Button
