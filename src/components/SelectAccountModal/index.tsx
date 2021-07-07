import { useAtom } from 'jotai'
import React from 'react'
import styled from 'styled-components'
import polkadotAccountAtom from '../../atoms/polkadotAccountAtom'
import scrollbar from '../../style/scrollbar'
import Button from '../Button'
import Center from '../Center'
import Modal from '../Modal'
import AccountOption from './AccountOption'

type Props = {
  visible: boolean
  onClose: () => void
  accounts: {
    label: string
    address: string
  }[]
}

const Content = styled.div`
  display: grid;
  grid-gap: 24px;
  margin: 24px 0;
  max-height: 200px;
  overflow-y: auto;
  padding-right: 20px;

  ${scrollbar}
`

const SelectAccountModal: React.FC<Props> = (props) => {
  const { visible, accounts, onClose } = props
  const [polkadotAccount, setPolkadotAccount] = useAtom(polkadotAccountAtom)

  function onSelect(result: { label: string; address: string }) {
    setPolkadotAccount(result.address)
  }

  return (
    <Modal
      onClose={onClose}
      visible={visible}
      title={<Center>Select An Account</Center>}>
      <Content>
        {accounts.map((item) => (
          <AccountOption
            active={polkadotAccount === item.address}
            onClick={onSelect}
            {...item}></AccountOption>
        ))}
      </Content>
      <Button style={{ width: '100%' }} onClick={onClose}>
        Cancel
      </Button>
    </Modal>
  )
}

export default SelectAccountModal
