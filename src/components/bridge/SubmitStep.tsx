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

type Props = {
  onNext: voidFn
  onPrev: voidFn
} & StepProps

const SubmitStep: React.FC<Props> = (props) => {
  const { onNext, onPrev, layout } = props

  return (
    <>
      <div style={{ display: layout === 'inline' ? 'flex' : 'block' }}>
        <div style={{ flex: 1 }}>
          <InfoTitle>From</InfoTitle>
          <AmountInfo amount={12345.67891}></AmountInfo>
        </div>

        <Spacer></Spacer>

        <div style={{ flex: 1 }}>
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
        </div>
      </div>

      {/* footer */}
      <ModalActions>
        <ModalAction>
          <Button onClick={onPrev}>Back</Button>
        </ModalAction>
        <ModalAction>
          <Button type="primary" onClick={onNext}>
            Submit
          </Button>
        </ModalAction>
      </ModalActions>
    </>
  )
}

export default SubmitStep
