import React from 'react'
import styled from 'styled-components'
import Button from '../../../Button'
import Input from '../../../Input'
import Modal, { ModalAction, ModalActions, ModalProps } from '../../../Modal'
import Spacer from '../../../Spacer'
import Textarea from '../../../Textarea'

const Description = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: #878787;
  margin-top: -15px;
  margin-bottom: 25px;
`

const FeedbackModal: React.FC<ModalProps> = (props) => {
  return (
    <Modal title={"It looks like we're having issues."} {...props}>
      <Description>
        Our team has been notified. If you’d like to help, tell us what happened
        below.
      </Description>

      <Input name="name" size="large" placeholder="Name"></Input>

      <Spacer></Spacer>

      <Input name="email" size="large" placeholder="Email"></Input>

      <Spacer></Spacer>

      <Textarea
        name="description"
        rows={6}
        placeholder="What Happened?"></Textarea>

      <ModalActions>
        <ModalAction>
          <Button onClick={() => props.onClose?.()}>Close</Button>
        </ModalAction>
        <ModalAction>
          <Button type="primary">Submit</Button>
        </ModalAction>
      </ModalActions>
    </Modal>
  )
}

export default FeedbackModal
