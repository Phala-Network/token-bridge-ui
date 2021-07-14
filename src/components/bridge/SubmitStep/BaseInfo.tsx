import React from 'react'
import AmountInfo from '../../AmountInfo'
import InfoTitle from '../../InfoTitle'
import Spacer from '../../Spacer'
import Address from '../../Address'
import { voidFn } from '../../../types/normal'
import { StepProps } from '../BridgeProcess'
import FormLayout from '../FormLayout'
import FormItem from '../FormItem'
import { InputDataStepResult } from '../InputDataStep'

type Props = {
  onPrev?: voidFn
  onSubmit?: voidFn
  data?: InputDataStepResult
} & StepProps

const BaseInfo: React.FC<Props> = (props) => {
  const { layout, data } = props
  const { from, to, amount: amountFromPrevStep } = data || {}

  return (
    <FormLayout layout={layout}>
      <FormItem>
        <InfoTitle>From</InfoTitle>
        <AmountInfo
          network={from?.network}
          amount={from?.balance.toString()}
          type={from?.type}>
          <Address>{from?.account}</Address>
        </AmountInfo>
      </FormItem>

      <Spacer></Spacer>

      <FormItem>
        <InfoTitle>To</InfoTitle>
        <AmountInfo
          network={to?.network}
          amount={amountFromPrevStep?.toString()}
          type={to?.type}>
          <Address>{to?.account}</Address>
        </AmountInfo>
      </FormItem>
    </FormLayout>
  )
}

export default BaseInfo
