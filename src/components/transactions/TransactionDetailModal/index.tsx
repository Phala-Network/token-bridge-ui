import React from 'react'
import styled from 'styled-components'
import Alert from '../../Alert'
import BaseInfo from '../../bridge/SubmitStep/BaseInfo'
import Button from '../../Button'
import Modal, { ModalActions } from '../../Modal'
import Spacer from '../../Spacer'
import { ItemInfoBlockProps } from '../List/ItemInfoBlock'

type Props = {
  visible: boolean
  onClose(): void
  to: ItemInfoBlockProps
  from: ItemInfoBlockProps
  hash: string
}

const Link = styled.a`
  text-decoration: underline;
  color: black;
`

const TransactionDetailModal: React.FC<Props> = (props) => {
  const { visible, onClose, to, from, hash } = props

  const data = {
    amount: to.amount,
    to,
    from,
    // FIXME: just a hack to make it work
  } as any

  const link = `https://kovan.etherscan.io/tx/${hash}`

  return (
    <Modal visible={visible} title="Bridge Information">
      <BaseInfo layout={'block'} data={data}></BaseInfo>

      <Spacer></Spacer>

      <Alert>
        <div>
          <Link href={link} target="_blank">
            Ethereum transaction
          </Link>{' '}
          is broadcasting, please check your Khala’s PHA balance later. It may
          take 2~10 minutes.
        </div>
      </Alert>

      <ModalActions>
        <Button type="primary" onClick={onClose}>
          Done
        </Button>
      </ModalActions>
    </Modal>
  )
}

export default TransactionDetailModal
