import React, { useState } from 'react'
import Modal from '../Modal'
import InputDataStep from './InputDataStep'
import ResultStep from './ResultStep'
import SubmitStep from './SubmitStep'

type Props = {
  visible: boolean
  onClose: () => void
}

const BridgeModal: React.FC<Props> = (props) => {
  const { visible, onClose } = props
  const [step, setStep] = useState(0)

  const next = () => {
    setStep((prev) => prev + 1)
  }

  const prev = () => {
    setStep((prev) => prev - 1)
  }

  return (
    <Modal visible={visible} title='Bridge Modal'>
      {step === 0 && <InputDataStep onNext={next}></InputDataStep>}
      {step === 1 && <SubmitStep onNext={next} onPrev={prev}></SubmitStep>}
      {step === 2 && <ResultStep onNext={() => onClose()}></ResultStep>}
    </Modal>
  )
}

export default BridgeModal
