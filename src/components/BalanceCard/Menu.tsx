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
  transition: border-width 0.2s linear;
`

const Buttons = styled.div<{ active: boolean }>`
  position: absolute;
`

type Props = {
  active: boolean
}

const Menu: FC<Props> = (props) => {
  const { active } = props

  return (
    <MenuWrap active={active}>
      <Buttons active={active}>
        <div>Transfrer</div>
        <div>Bridge</div>
        <div>Convert</div>
      </Buttons>
    </MenuWrap>
  )
}

export default Menu
