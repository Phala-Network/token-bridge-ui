import React from 'react'
import BaseLayout from '../../BaseLayout'
import WhiteCard from '../../WhiteCard'
import { Helmet } from 'react-helmet'
import BridgeProcess from '../../bridge/BridgeProcess'
import Announcement from '../../Announcement'
import styled from 'styled-components'

type Props = {}

const RightContent = styled.div`
  display: grid;
  grid-gap: 30px;
  padding: 48px;
  width: 100%;
`

const BridgePage: React.FC<Props> = () => {
  return (
    <BaseLayout>
      <Helmet>
        <title>Bridge</title>
      </Helmet>
      <RightContent>
        <Announcement></Announcement>

        <WhiteCard>
          <BridgeProcess layout="inline"></BridgeProcess>
        </WhiteCard>
      </RightContent>
    </BaseLayout>
  )
}

export default BridgePage
