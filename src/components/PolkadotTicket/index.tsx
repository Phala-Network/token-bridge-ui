import React, { useState, useMemo } from 'react'
import { useWeb3 } from '../../libs/polkadot/hooks/useWeb3'
import SelectAccountModal from '../SelectAccountModal'
import { useAtom } from 'jotai'
import polkadotAccountAtom from '../../atoms/polkadotAccountAtom'
import Ticket, {
  DefaultStatus,
  DefaultStatusIcon,
  DefaultStatusName,
  TicketName as _TicketName,
} from '../Ticket'
import { useTheme } from 'styled-components'
import styled from 'styled-components'
import { useBalance } from '../../hooks/useBalance'
import logo from './logo.png'

const TicketName = styled(_TicketName)`
  color: black;
  background: ${(props) => props.theme.colors.khala};
  letter-spacing: 0.07em;
`

type Props = {}

const index: React.FC<Props> = () => {
  const { accounts } = useWeb3()
  const [polkadotAccount, setPolkadotAccount] = useAtom(polkadotAccountAtom)
  const theme = useTheme()
  const [selectAccountModalViable, setSelectAccountModalViable] = useState(
    false
  )
  const balance = useBalance(polkadotAccount?.address)
  const polkadotAccounts = useMemo(
    () =>
      accounts.map((item) => ({
        name: item.meta?.name || 'Account',
        address: item.address,
      })),
    [accounts]
  )

  const balanceDisplay = !balance
    ? '. . .'
    : balance.toString?.() === '0'
    ? '0 PHA'
    : balance.toHuman?.()

  const openAccountSelectModal = () => {
    // todo check browser polkadot extension status

    setSelectAccountModalViable(true)
  }

  return (
    <>
      {!polkadotAccount ? (
        <Ticket
          onClick={openAccountSelectModal}
          cover={
            <DefaultStatus>
              <DefaultStatusIcon>
                <img src={logo} alt="logo" />
              </DefaultStatusIcon>
              <DefaultStatusName>{`Connect Polkadot{.js}`}</DefaultStatusName>
            </DefaultStatus>
          }
        />
      ) : (
        <Ticket
          onClick={openAccountSelectModal}
          themeColor={theme.colors.khala}
          no={polkadotAccount?.address}
          name={<TicketName>Khala</TicketName>}
          bottomContent={balanceDisplay}
        />
      )}

      <SelectAccountModal
        accounts={polkadotAccounts}
        currentAccount={polkadotAccount}
        onSelect={(account) => setPolkadotAccount(account)}
        onClose={() => setSelectAccountModalViable(false)}
        visible={selectAccountModalViable}
      />
    </>
  )
}

export default index
