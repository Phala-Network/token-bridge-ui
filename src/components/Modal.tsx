import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Backdrop from './Backdrop'

type Props = {
  visible: boolean
  onClose: () => void
}

const Wrap = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  width: 480px;
  height: 485px;
  background: #ffffff;
  box-shadow: 24px 24px 0px #000000;
`

const Modal: React.FC<Props> = (props) => {
  const { children, visible = false, onClose } = props

  return ReactDOM.createPortal(
    <Backdrop onClick={onClose} visible={visible}>
      <Wrap>
        <Content>{children}</Content>
      </Wrap>
    </Backdrop>,
    document.body
  )
}

export default Modal
