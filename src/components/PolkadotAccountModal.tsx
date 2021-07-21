import { useAtom } from 'jotai'
import React, { useMemo } from 'react'
import polkadotAccountAtom from '../atoms/polkadotAccountAtom'
import { useWeb3 } from '../libs/polkadot/hooks/useWeb3'
import PolkadotInstallModal from './PolkadotInstallModal'
import SelectAccountModal from './SelectAccountModal'

type Props = {
  visible: boolean
  onClose: () => void
}

export function web3IsInjected(): boolean {
  return window?.injectedWeb3 && Object.keys(window?.injectedWeb3).length !== 0
}

const PolkadotAccountModal: React.FC<Props> = (props) => {
  const { accounts } = useWeb3()
  const [polkadotAccount, setPolkadotAccount] = useAtom(polkadotAccountAtom)
  const polkadotAccounts = useMemo(
    () =>
      accounts.map((item) => ({
        name: item.meta?.name || 'Account',
        address: item.address,
      })),
    [accounts]
  )

  if (!web3IsInjected()) {
    return <PolkadotInstallModal {...props}></PolkadotInstallModal>
  }

  return (
    <SelectAccountModal
      {...props}
      accounts={polkadotAccounts}
      currentAccount={polkadotAccount}
      onSelect={(account) => setPolkadotAccount(account)}
    />
  )
}

export default PolkadotAccountModal
