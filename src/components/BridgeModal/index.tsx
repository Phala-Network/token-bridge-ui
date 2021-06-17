import React, { useState } from 'react'
import Modal from '../Modal'
import InputDataStep from './InputDataStep'
import ResultStep from './ResultStep'
import SubmitStep from './SubmitStep'

type Props = {}

const BridgeModal: React.FC<Props> = () => {
  const [step, setStep] = useState(0)
  const [visible, setVisible] = useState(true)

  const next = () => {
    setStep((prev) => prev + 1)
  }

  const prev = () => {
    setStep((prev) => prev - 1)
  }

  return (
    <div>
      <Modal visible={visible} title='Transfer Modal'>
        {step === 0 && <InputDataStep onNext={next}></InputDataStep>}
        {step === 1 && <SubmitStep onNext={next} onPrev={prev}></SubmitStep>}
        {step === 2 && (
          <ResultStep onNext={() => setVisible(false)}></ResultStep>
        )}
      </Modal>
    </div>
  )
}

export default BridgeModal
