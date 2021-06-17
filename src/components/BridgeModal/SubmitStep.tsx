import React from 'react'
import AmountInfo from '../AmountInfo'
import Button from '../Button'
import InfoTitle from '../InfoTitle'
import InputExternalInfo from '../InputExternalInfo'
import { ModalAction, ModalActions } from '../Modal'
import Spacer from '../Spacer'
import Address from './Address'

type Props = {
  onNext: () => void
  onPrev: () => void
}

const SubmitStep: React.FC<Props> = (props) => {
  const { onNext, onPrev } = props

  return (
    <div>
      <InfoTitle>From</InfoTitle>
      <AmountInfo amount={12345.67891}></AmountInfo>

      <Spacer></Spacer>

      <InfoTitle>To</InfoTitle>
      <AmountInfo amount={67891.12345}>
        <Address>DaqqGMuj31iFen9zdHxrqebvXhp2bt8rDJge3X3hQuAMkBr</Address>
      </AmountInfo>
      <InputExternalInfo
        style={{ textAlign: 'right' }}
        label='Balance'
        value={1234.56789}
        type={'PHA'}
      />

      {/* footer */}
      <ModalActions>
        <ModalAction>
          <Button onClick={onPrev}>Back</Button>
        </ModalAction>
        <ModalAction>
          <Button type='primary' onClick={onNext}>
            Submit
          </Button>
        </ModalAction>
      </ModalActions>
    </div>
  )
}

export default SubmitStep
