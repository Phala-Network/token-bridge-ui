import React, { useState } from 'react'
import BaseLayout from '../../BaseLayout'
import InputDataStep from '../../BridgeModal/InputDataStep'
import Spacer from '../../Spacer'
import WhiteCard from '../../WhiteCard'
import DetailTable from './DetailTable'
import { Helmet } from 'react-helmet'
import SubmitStep from '../../BridgeModal/SubmitStep'
import ResultStep from '../../BridgeModal/ResultStep'

type Props = {}

const BridgePage: React.FC<Props> = () => {
  const [step, setStep] = useState(0)

  const next = () => {
    setStep((prev) => prev + 1)
  }

  const prev = () => {
    setStep((prev) => prev - 1)
  }

  return (
    <BaseLayout>
      <Helmet>
        <title>Bridge</title>
      </Helmet>
      <div style={{ padding: 24, width: '100%' }}>
        <WhiteCard>
          {step === 0 && <InputDataStep onNext={next}></InputDataStep>}
          {step === 1 && <SubmitStep onNext={next} onPrev={prev}></SubmitStep>}
          {step === 2 && <ResultStep onNext={() => {}}></ResultStep>}
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
