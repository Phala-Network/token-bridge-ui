import { useAtom } from 'jotai'
import React, { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import polkadotAccountAtom from '../../atoms/polkadotAccountAtom'
import usePolkadotAccountBalanceDecimal from '../../hooks/usePolkadotAccountBalanceDecimal'
import { useApiPromise } from '../../libs/polkadot/hooks/useApiPromise'
import { useAddressNormalizer } from '../../libs/polkadot/useAddressNormalizer'
import BalanceLabel from '../BalanceLabel'
import PolkadotAccountModal from '../PolkadotAccountModal'
import Ticket, {
  DefaultStatus,
  DefaultStatusIcon,
  DefaultStatusName,
  TicketCurrency,
  TicketName as _TicketName,
} from '../Ticket'
import logo from './logo.png'

const TicketName = styled(_TicketName)`
  background: ${(props) => props.theme.colors.khala};
  letter-spacing: 0;

  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 8px;
  color: #000000;
`

const index: React.FC = () => {
  const { api } = useApiPromise()
  const normalizeAddress = useAddressNormalizer(api)
  const [polkadotAccount] = useAtom(polkadotAccountAtom)
  const theme = useTheme()
  const [selectAccountModalViable, setSelectAccountModalViable] = useState(
    false
  )

  const polkadotAccountBalanceDecimal = usePolkadotAccountBalanceDecimal()

  const openAccountSelectModal = () => {
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
          no={normalizeAddress(polkadotAccount?.address)}
          name={<TicketName>Khala</TicketName>}
          bottomContent={
            <>
              <BalanceLabel value={polkadotAccountBalanceDecimal} />
              <TicketCurrency>PHA</TicketCurrency>
            </>
          }
        />
      )}

      <PolkadotAccountModal
        onClose={() => setSelectAccountModalViable(false)}
        visible={selectAccountModalViable}
      />
    </>
  )
}

export default index
