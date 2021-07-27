import { useAtom } from 'jotai'
import React, { useState } from 'react'
import styled from 'styled-components'
import ethereumAccountAtom from '../../atoms/ethereumAccountAtom'
import useEthereumAccountBalanceDecimal from '../../hooks/useEthereumAccountBalanceDecimal'
import BalanceLabel from '../BalanceLabel'
import EthereumAccountModal from '../EthereumAccountModal'
import Ticket, {
  DefaultStatus,
  DefaultStatusIcon,
  DefaultStatusName,
  TicketCurrency,
  TicketName as _TicketName,
} from '../Ticket'
import logoImage from './logo.png'

const TicketName = styled(_TicketName)`
  background: #c5cdf2;
  letter-spacing: 0;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 8px;
  color: #000000;
`

const index: React.FC = () => {
  const [ethereumAccount] = useAtom(ethereumAccountAtom)
  const ethereumAccountBalanceDecimal = useEthereumAccountBalanceDecimal()
  const [selectAccountModalViable, setSelectAccountModalViable] = useState(
    false
  )

  const openAccountSelectModal = () => {
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
            <>
              <BalanceLabel value={ethereumAccountBalanceDecimal} />
              <TicketCurrency>PHA</TicketCurrency>
            </>
          }
        />
      )}

      <EthereumAccountModal
        onClose={() => setSelectAccountModalViable(false)}
        visible={selectAccountModalViable}
      />
    </>
  )
}

export default index
