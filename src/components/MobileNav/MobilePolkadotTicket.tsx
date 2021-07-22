import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useAtom } from 'jotai'
import polkadotAccountAtom from '../../atoms/polkadotAccountAtom'
import KhalaIcon from '../../icons/khala.svg'
import { useWeb3 } from '../../libs/polkadot/hooks/useWeb3'
import abridgeString from '../../utils/abridgeString'

const Wrapper = styled.div`
  position: relative;
  font-family: PT Mono;
`

const Account = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 0.07em;
  color: ${(props) => props.theme.colors.khala};
`

const ConnectButton = styled.div`
  font-size: 8px;
  padding: 7px 8px;
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  border-radius: 2px;
`

const AccountSelector = styled.select`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`

const MobilePolkadotTicket: React.FC = () => {
  const { accounts } = useWeb3()
  const [polkadotAccount, setPolkadotAccount] = useAtom(polkadotAccountAtom)
  const onChange = useCallback<React.ChangeEventHandler<HTMLSelectElement>>(
    (e) => {
      const index = e.target.value
      const account = accounts[Number(index)]
      if (account) {
        setPolkadotAccount({
          name: account.meta.name || 'Account',
          address: account.address,
        })
      } else {
        setPolkadotAccount()
      }
    },
    [accounts]
  )
  return (
    <Wrapper>
      {polkadotAccount ? (
        <Account>
          <KhalaIcon />
          {polkadotAccount.name} | {abridgeString(polkadotAccount.address)}
        </Account>
      ) : (
        <ConnectButton>Connect Wallet</ConnectButton>
      )}

      <AccountSelector onChange={onChange}>
        {!polkadotAccount && <option value=""></option>}
        {accounts.map(({ meta: { name = 'Account' }, address }, index) => (
          <option key={address} value={index}>
            {name} | {abridgeString(address)}
          </option>
        ))}
      </AccountSelector>
    </Wrapper>
  )
}

export default MobilePolkadotTicket
