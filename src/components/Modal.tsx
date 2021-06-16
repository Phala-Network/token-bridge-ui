import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import usePortal from '../hooks/usePortal'
import Backdrop from './Backdrop'

type Props = {
  visible: boolean
  onClose?: () => void
  title?: React.ReactNode
  bodyStyle?: React.CSSProperties
  actions?: React.ReactNode[]
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
  background: #ffffff;
  box-shadow: 16px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 32px;
  transition: all 0.1s ease-in-out;

  &:hover {
    box-shadow: 16px 16px 0px rgba(0, 0, 0, 0.3);
  }
`

const Title = styled.div`
  height: 48px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #202020;
`

const Action = styled.div`
  margin-left: 7px;
`

const Actions = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Modal: React.FC<Props> = (props) => {
  const {
    children,
    title,
    visible = false,
    onClose,
    bodyStyle,
    actions,
  } = props
  const portal = usePortal('modal')

  if (!portal) return null

  return createPortal(
    <Backdrop onClick={onClose} visible={visible}>
      <Wrap>
        <Content style={bodyStyle}>
          {title && <Title>{title}</Title>}
          {children}

          {actions && actions?.length > 0 && (
            <Actions>
              {actions?.map((item) => {
                return <Action>{item}</Action>
              })}
            </Actions>
          )}
        </Content>
      </Wrap>
    </Backdrop>,
    portal
  )
}

export default Modal
