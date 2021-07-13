import React from 'react'
import AmountInfo from '../../AmountInfo'
import Button from '../../Button'
import InfoTitle from '../../InfoTitle'
import { ModalAction, ModalActions } from '../../Modal'
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

const SubmitStepBase: React.FC<Props> = (props) => {
  const { onSubmit, onPrev, layout, data } = props
  const { from, to, amount: amountFromPrevStep } = data || {}

  return (
    <>
      <FormLayout layout={layout}>
        <FormItem>
          <InfoTitle>From</InfoTitle>
          <AmountInfo
            network={from?.network}
            amount={12345.67891}
            type={from?.type}
          />
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
          {/* <InputExternalInfo
            style={{ textAlign: 'right' }}
            label="Balance"
            value={1234.56789}
            type={'PHA'}
          /> */}
        </FormItem>
      </FormLayout>

      <ModalActions>
        {onPrev && (
          <ModalAction>
            <Button onClick={onPrev}>Back</Button>
          </ModalAction>
        )}
        {onSubmit && (
          <ModalAction>
            <Button type="primary" onClick={onSubmit}>
              Submit
            </Button>
          </ModalAction>
        )}
      </ModalActions>
    </>
  )
}

export default SubmitStepBase
