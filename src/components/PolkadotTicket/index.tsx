import { useAtom } from 'jotai'
import React, { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import polkadotAccountAtom from '../../atoms/polkadotAccountAtom'
import { useBalance } from '../../hooks/useBalance'
import PolkadotAccountModal from '../PolkadotAccountModal'
import Ticket, {
  DefaultStatus,
  DefaultStatusIcon,
  DefaultStatusName,
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
  const [polkadotAccount] = useAtom(polkadotAccountAtom)
  const theme = useTheme()
  const [selectAccountModalViable, setSelectAccountModalViable] = useState(
    false
  )
  const balance = useBalance(polkadotAccount?.address)

  const balanceDisplay = !balance
    ? '. . .'
    : balance.toString?.() === '0'
    ? '0 PHA'
    : balance.toHuman?.()

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
          no={polkadotAccount?.address}
          name={<TicketName>Khala</TicketName>}
          bottomContent={balanceDisplay}
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
