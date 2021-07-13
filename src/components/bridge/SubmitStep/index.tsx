import React from 'react'
import { voidFn } from '../../../types/normal'
import { StepProps } from '../BridgeProcess'
import { InputDataStepResult } from '../InputDataStep'
import SubmitStepToEthereum from './SubmitStepToEthereum'
import SubmitStepToPhala from './SubmitStepToPhala'

type SubmitStepProps = {
  onPrev?: voidFn
  onSubmit?: voidFn
  data?: InputDataStepResult
} & StepProps

const SubmitStep: React.FC<SubmitStepProps> = (props) => {
  const { data } = props

  if (data?.to.network === 'ethereum') {
    return <SubmitStepToEthereum {...props} />
  } else if (data?.to.network === 'phala') {
    return <SubmitStepToPhala {...props} />
  } else {
    return null
  }
}

export default SubmitStep
