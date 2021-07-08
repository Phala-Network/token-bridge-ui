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
import { useBalance } from '../../libs/polkadot/useBalance'
import styled from 'styled-components'

const khalaLogo = (
  <svg
    width="23"
    height="22"
    viewBox="0 0 23 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 10.0833V0H5.98L5.98 10.0833H0ZM17.02 0.000162334L17.02 4.12516L11.96 4.12516V10.0832H5.98001V16.0415H11.96L11.96 10.0835H17.94V5.9585H23V0.000162074L17.02 0.000162334ZM0 16.0417V22L23 22V16.0417L0 16.0417Z"
      fill="#03FFFF"
    />
  </svg>
)

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
              <DefaultStatusIcon>{khalaLogo}</DefaultStatusIcon>
              <DefaultStatusName>Connet Khala</DefaultStatusName>
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
