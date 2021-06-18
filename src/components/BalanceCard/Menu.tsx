import { FC } from 'react'
import styled from 'styled-components'

const MenuWrap = styled.div<{ active: boolean }>`
  position: absolute;
  border: 3px solid #202020;
  box-sizing: border-box;
  left: -12px;
  top: -12px;
  right: -12px;
  bottom: -12px;
  border-width: ${(props) => (props.active ? 3 : 0)}px;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: all 0.15s linear 0.05s;
  box-sizing: border-box;
`

const Buttons = styled.div<{ active: boolean }>`
  position: absolute;
  top: -20px;
  width: 144px;
  left: 50%;
  margin-left: -72px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ececec;
`

const Button = styled.div<{ active: boolean }>`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  color: #202020;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.2s linear;
`

const ButtonBottomBorder = styled.div<{ active: boolean }>`
  margin-top: 1px;
  width: ${(props) => (props.active ? '100%' : 0)};
  height: 1px;
  background-color: #202020;
  transition: width 0.15s linear 0.05s;
`

type Props = {
  active: boolean
}

const Menu: FC<Props> = (props) => {
  const { active } = props

  return (
    <>
      <MenuWrap active={active}></MenuWrap>
      <Buttons active={active}>
        <Button active={active}>
          <span>Transfer</span>
          <ButtonBottomBorder active={active}></ButtonBottomBorder>
        </Button>
        <Button active={active}>
          <span>Bridge</span>
          <ButtonBottomBorder active={active}></ButtonBottomBorder>
        </Button>
        <Button active={active}>
          <span>Convert</span>
          <ButtonBottomBorder active={active}></ButtonBottomBorder>
        </Button>
      </Buttons>
    </>
  )
}

export default Menu
