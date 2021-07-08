import React from 'react'
import AmountInfo from '../AmountInfo'
import Button from '../Button'
import InfoTitle from '../InfoTitle'
import InputExternalInfo from '../InputExternalInfo'
import { ModalAction, ModalActions } from '../Modal'
import Spacer from '../Spacer'
import Address from '../Address'
import { voidFn } from '../../types/normal'
import { StepProps } from './BridgeProcess'
import FormLayout from './FormLayout'
import FormItem from './FormItem'

type Props = {
  onPrev?: voidFn
  onSubmit?: voidFn
} & StepProps

const SubmitStep: React.FC<Props> = (props) => {
  const { onSubmit, onPrev, layout } = props

  return (
    <>
      <FormLayout layout={layout}>
        <FormItem>
          <InfoTitle>From</InfoTitle>
          <AmountInfo amount={12345.67891}></AmountInfo>
        </FormItem>

        <Spacer></Spacer>

        <FormItem>
          <InfoTitle>To</InfoTitle>
          <AmountInfo amount={67891.12345}>
            <Address>DaqqGMuj31iFen9zdHxrqebvXhp2bt8rDJge3X3hQuAMkBr</Address>
          </AmountInfo>
          <InputExternalInfo
            style={{ textAlign: 'right' }}
            label="Balance"
            value={1234.56789}
            type={'PHA'}
          />
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

export default SubmitStep
