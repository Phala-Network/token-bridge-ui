import { useAtom } from 'jotai'
import React, { useState } from 'react'
import styled from 'styled-components'
import ethereumAccountAtom from '../../atoms/ethereumAccountAtom'
import BlockStripe from '../BlockStripe'
import EthereumAccountModal from '../EthereumAccountModal'
import Ticket, {
  DefaultStatus,
  DefaultStatusIcon,
  DefaultStatusName,
  TicketName as _TicketName,
} from '../Ticket'
import logoImage from './logo.png'

const TicketName = styled(_TicketName)`
  background: #c5cdf2;
  font-size: 8px;
  letter-spacing: 0;
`

const index: React.FC = () => {
  const [ethereumAccount] = useAtom(ethereumAccountAtom)
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
