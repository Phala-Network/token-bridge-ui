import React, { useState } from 'react'
import styled from 'styled-components'
import BridgeModal from '../BridgeModal'
import ConvertModal from '../ConvertModal'
import TransferModal from '../TransferModal'

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
  padding: 0 8px;
  position: absolute;
  top: -20px;
  max-width: 144px;
  left: 50%;
  margin-left: -72px;
  display: flex;
  align-items: center;
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

  & + & {
    margin-left: 12px;
  }
`

const ButtonBottomBorder = styled.div<{ active: boolean }>`
  margin-top: 1px;
  width: ${(props) => (props.active ? '100%' : 0)};
  height: 1px;
  background-color: #202020;
  transition: width 0.15s linear 0.05s;
`

export type MenuProps = {
  disableTransfer?: boolean
  disableBridge?: boolean
  disableConvert?: boolean
}

type Props = {
  active: boolean
} & MenuProps

const Menu: React.FC<Props> = (props) => {
  const {
    active,
    disableTransfer = false,
    disableBridge = false,
    disableConvert = false,
  } = props
  const [visibleBridge, setVisibleBridge] = useState(false)
  const [visibleTransferModal, setVisibleTransferModal] = useState(false)
  const [visibleConvertModal, setVisibleConvertModal] = useState(false)

  return (
    <>
      <MenuWrap active={active}></MenuWrap>
      <Buttons active={active}>
        {!disableTransfer && (
          <Button onClick={() => setVisibleTransferModal(true)} active={active}>
            <span>Transfer</span>
            <ButtonBottomBorder active={active}></ButtonBottomBorder>
          </Button>
        )}
        {!disableBridge && (
          <Button onClick={() => setVisibleBridge(true)} active={active}>
            <span>Bridge</span>
            <ButtonBottomBorder active={active}></ButtonBottomBorder>
          </Button>
        )}
        {!disableConvert && (
          <Button onClick={() => setVisibleConvertModal(true)} active={active}>
            <span>Convert</span>
            <ButtonBottomBorder active={active}></ButtonBottomBorder>
          </Button>
        )}
      </Buttons>

      <ConvertModal
        visible={visibleConvertModal}
        onClose={() => setVisibleConvertModal(false)}></ConvertModal>

      <TransferModal
        visible={visibleTransferModal}
        onClose={() => setVisibleTransferModal(false)}></TransferModal>

      <BridgeModal
        visible={visibleBridge}
        onClose={() => setVisibleBridge(false)}></BridgeModal>
    </>
  )
}

export default Menu
