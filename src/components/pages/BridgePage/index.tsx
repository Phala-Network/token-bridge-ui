import React from 'react'
import BaseLayout from '../../BaseLayout'
import WhiteCard from '../../WhiteCard'
import DetailTable from './DetailTable'

type Props = {}

const BridgePage: React.FC<Props> = () => {
  return (
    <BaseLayout>
      <WhiteCard>
        <DetailTable></DetailTable>
      </WhiteCard>
    </BaseLayout>
  )
}

export default BridgePage
