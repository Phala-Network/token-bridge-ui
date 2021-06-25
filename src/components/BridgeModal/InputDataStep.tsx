import React, { useState } from 'react'
import InputAction from '../InputAction'
import InputExternalInfo from '../InputExternalInfo'
import InputNumber from '../InputNumber'
import Spacer from '../Spacer'
import TradeTypeSelect from '../TradeTypeSelect'
import Button from '../Button'
import { ModalAction, ModalActions } from '../Modal'
import { useEffect } from 'react'

type Props = {
  onNext: () => void
}

const InputDataStep: React.FC<Props> = (props) => {
  const { onNext } = props
  const [balanceNumber, setBalanceNumber] = useState(0)

  useEffect(() => {
    setBalanceNumber(1234.5678)
  }, [])

  return (
    <div>
      <TradeTypeSelect></TradeTypeSelect>

      <Spacer />

      <InputNumber
        size="large"
        placeholder="Destination Address"
        after={<InputAction>MY ADDRESS</InputAction>}></InputNumber>

      <Spacer />

      <InputNumber
        size="large"
        placeholder="Amount (PHA)"
        after={<InputAction>MAX</InputAction>}></InputNumber>

      <Spacer y={0.2}></Spacer>

      <InputExternalInfo
        style={{ textAlign: 'right' }}
        label={'Balance'}
        value={balanceNumber}
        type={'PHA'}
      />

      <ModalActions>
        <ModalAction>
          <Button>Cancel</Button>
        </ModalAction>
        <ModalAction>
          <Button type="primary" onClick={onNext}>
            Next
          </Button>
        </ModalAction>
      </ModalActions>
    </div>
  )
}

export default InputDataStep
