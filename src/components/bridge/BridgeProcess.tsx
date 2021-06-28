import React, { useState } from 'react'
import InputDataStep from './InputDataStep'
import ResultStep from './ResultStep'
import SubmitStep from './SubmitStep'

type Props = {
  onDone?: () => void
}

const BridgeProcess: React.FC<Props> = (props) => {
  const [step, setStep] = useState(0)
  const { onDone } = props

  const next = () => {
    setStep((prev) => prev + 1)
  }

  const prev = () => {
    setStep((prev) => prev - 1)
  }

  return (
    <>
      {step === 0 && <InputDataStep onNext={next}></InputDataStep>}
      {step === 1 && <SubmitStep onNext={next} onPrev={prev}></SubmitStep>}
      {step === 2 && <ResultStep onNext={() => onDone?.()}></ResultStep>}
    </>
  )
}

export default BridgeProcess
