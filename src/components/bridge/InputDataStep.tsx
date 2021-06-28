import React, { useState } from 'react'
import InputAction from '../InputAction'
import InputExternalInfo from '../InputExternalInfo'
import InputNumber from '../InputNumber'
import Spacer from '../Spacer'
import TradeTypeSelect from '../TradeTypeSelect'
import Button from '../Button'
import { ModalAction, ModalActions } from '../Modal'
import { useEffect } from 'react'
import { StepProps } from './BridgeProcess'

type Props = {
  onNext: () => void
} & StepProps

const InputDataStep: React.FC<Props> = (props) => {
  const { layout, onNext } = props
  const [balanceNumber, setBalanceNumber] = useState(0)

  useEffect(() => {
    setBalanceNumber(1234.5678)
  }, [])

  return (
    <>
      <div style={{ display: layout === 'inline' ? 'flex' : 'block' }}>
        <TradeTypeSelect style={{ flex: 1 }}></TradeTypeSelect>

        <Spacer />

        <div style={{ flex: 1 }}>
          <InputNumber
            size="large"
            placeholder="Destination Address"
            after={<InputAction>MY ADDRESS</InputAction>}></InputNumber>

          <Spacer y={1.2} />

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
        </div>
      </div>

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
    </>
  )
}

export default InputDataStep
