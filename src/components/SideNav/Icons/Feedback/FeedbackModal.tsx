import React from 'react'
import styled from 'styled-components'
import Button from '../../../Button'
import Input from '../../../Input'
import Modal, { ModalAction, ModalActions, ModalProps } from '../../../Modal'
import Spacer from '../../../Spacer'
import Textarea from '../../../Textarea'
import * as Sentry from '@sentry/react'
import axios from 'axios'

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
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [comments, setComments] = React.useState('')

  const submit = () => {
    const eventId = Sentry.captureMessage('feedback')
    const bodyFormData = new FormData()

    bodyFormData.append('name', name)
    bodyFormData.append('email', email)
    bodyFormData.append('comments', comments)

    axios({
      method: 'post',
      url: 'https://sentry.io/api/embed/error-page/',
      data: bodyFormData,
      params: {
        eventId,
        dsn:
          'https://b32f244e1b1849728fc0d19954a209cb@o812739.ingest.sentry.io/5805680',
      },
    })
  }

  return (
    <Modal title={"It looks like we're having issues."} {...props}>
      <Description>
        Our team has been notified. If you’d like to help, tell us what happened
        below.
      </Description>

      <Input
        onChange={setName}
        name="name"
        size="large"
        placeholder="Name"></Input>

      <Spacer></Spacer>

      <Input
        onChange={setEmail}
        name="email"
        size="large"
        placeholder="Email"></Input>

      <Spacer></Spacer>

      <Textarea
        onChange={setComments}
        name="description"
        rows={6}
        placeholder="What Happened?"></Textarea>

      <ModalActions>
        <ModalAction>
          <Button onClick={() => props.onClose?.()}>Close</Button>
        </ModalAction>
        <ModalAction>
          <Button type="primary" onClick={submit}>
            Submit
          </Button>
        </ModalAction>
      </ModalActions>
    </Modal>
  )
}

export default FeedbackModal
