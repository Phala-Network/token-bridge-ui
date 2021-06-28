import React, { useState } from 'react'
import BaseLayout from '../../BaseLayout'
import Spacer from '../../Spacer'
import WhiteCard from '../../WhiteCard'
import DetailTable from './DetailTable'
import { Helmet } from 'react-helmet'
import BridgeProcess from '../../bridge/BridgeProcess'

type Props = {}

const BridgePage: React.FC<Props> = () => {
  return (
    <BaseLayout>
      <Helmet>
        <title>Bridge</title>
      </Helmet>
      <div style={{ padding: 24, width: '100%' }}>
        <WhiteCard>
          <BridgeProcess></BridgeProcess>
        </WhiteCard>
        <Spacer></Spacer>
        <WhiteCard>
          <DetailTable></DetailTable>
        </WhiteCard>
      </div>
    </BaseLayout>
  )
}

export default BridgePage
