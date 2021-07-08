import { useAtom } from 'jotai'
import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import ethereumAccountAtom from '../../atoms/ethereumAccountAtom'
import { useEthers } from '../../libs/ethereum/contexts/useEthers'
import { useAccountsQuery } from '../../libs/ethereum/queries/useAccountsQuery'
import { Account } from '../../types/normal'
import BlockStripe from '../BlockStripe'
import SelectAccountModal from '../SelectAccountModal'
import Ticket, {
  DefaultStatus,
  DefaultStatusIcon,
  DefaultStatusName,
  TicketName as _TicketName,
} from '../Ticket'
import logoImage from './logo.png'

type Props = {}

const TicketName = styled(_TicketName)`
  color: #ececec;
  background: black;
  font-size: 8px;
  letter-spacing: 0;
`

const index: React.FC<Props> = () => {
  const { readystate: readyState } = useEthers()
  const isReady = readyState === 'connected'
  const [ethereumAccount, setEthereumAccount] = useAtom(ethereumAccountAtom)
  const [selectAccountModalViable, setSelectAccountModalViable] = useState(
    false
  )
  const { data: accounts = [] } = useAccountsQuery()

  const ethereumAccounts = useMemo(
    () =>
      accounts?.map<Account>((address) => ({
        address,
      })),
    [accounts]
  )

  const openAccountSelectModal = () => {
    console.info('todo check browser polkadot extension status')

    setSelectAccountModalViable(true)
  }

  return (
    <>
      {!ethereumAccount ? (
        <Ticket
          onClick={openAccountSelectModal}
          cover={
            <DefaultStatus>
              <DefaultStatusIcon>
                <img src={logoImage} alt="logo" />
              </DefaultStatusIcon>
              <DefaultStatusName>Connet METAMASK</DefaultStatusName>
            </DefaultStatus>
          }></Ticket>
      ) : (
        <Ticket
          onClick={openAccountSelectModal}
          themeColor={'black'}
          no={ethereumAccount?.address}
          name={<TicketName>Ethereum</TicketName>}
          bottomContent={
            <div>
              <BlockStripe
                {...{
                  color: '#ECECEC',
                  backgroundColor: '#202020',
                  blockSize: 4,
                  column: 40,
                  row: 4,
                  random: 0.5,
                }}
              />
            </div>
          }
        />
      )}

      <SelectAccountModal
        accounts={ethereumAccounts}
        currentAccount={ethereumAccount}
        onSelect={(account) => setEthereumAccount(account)}
        onClose={() => setSelectAccountModalViable(false)}
        visible={selectAccountModalViable}
      />
    </>
  )
}

export default index
