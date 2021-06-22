import React from 'react'
import BaseLayout from '../../BaseLayout'
import InputDataStep from '../../BridgeModal/InputDataStep'
import Spacer from '../../Spacer'
import WhiteCard from '../../WhiteCard'
import DetailTable from './DetailTable'
import { Helmet } from 'react-helmet'

type Props = {}

const BridgePage: React.FC<Props> = () => {
  return (
    <BaseLayout>
      <Helmet>
        <title>Bridge</title>
      </Helmet>
      <div style={{ padding: 24, width: '100%' }}>
        <WhiteCard>
          <InputDataStep onNext={() => {}}></InputDataStep>
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
