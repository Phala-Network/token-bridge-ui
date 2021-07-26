import React from 'react'
import { voidFn } from '../../../types/normal'
import Address from '../../Address'
import AmountInfo from '../../AmountInfo'
import InfoTitle from '../../InfoTitle'
import Spacer from '../../Spacer'
import { StepProps } from '../BridgeProcess'
import FormItem from '../FormItem'
import FormLayout from '../FormLayout'
import { InputDataStepResult } from '../InputDataStep'

type Props = {
  onPrev?: voidFn
  onSubmit?: voidFn
  data?: InputDataStepResult
} & StepProps

const BaseInfo: React.FC<Props> = (props) => {
  const { layout, data } = props
  const { from, to, amount } = data || {}

  return (
    <FormLayout layout={layout}>
      <FormItem>
        <InfoTitle>From</InfoTitle>
        <AmountInfo
          network={from?.network}
          amount={amount?.toString()}
          type={from?.type}>
          <Address>{from?.account}</Address>
        </AmountInfo>
      </FormItem>

      <Spacer></Spacer>

      <FormItem>
        <InfoTitle>To</InfoTitle>
        <AmountInfo
          network={to?.network}
          amount={amount?.toString()}
          type={to?.type}>
          <Address>{to?.account}</Address>
        </AmountInfo>
      </FormItem>
    </FormLayout>
  )
}

export default BaseInfo
