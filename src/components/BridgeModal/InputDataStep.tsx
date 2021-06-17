import React from 'react'
import InputAction from '../InputAction'
import InputExternalInfo from '../InputExternalInfo'
import InputNumber from '../InputNumber'
import Spacer from '../Spacer'
import TradeTypeSelect from '../TradeTypeSelect'
import Button from '../Button'
import { ModalAction, ModalActions } from '../Modal'

type Props = {
  onNext: () => void
}

const InputDataStep: React.FC<Props> = (props) => {
  const { onNext } = props

  return (
    <div>
      <TradeTypeSelect></TradeTypeSelect>
      <Spacer></Spacer>
      <InputNumber
        size='large'
        placeholder='Destination Address'
        after={<InputAction>MY ADDRESS</InputAction>}></InputNumber>
      <Spacer></Spacer>
      <InputNumber
        size='large'
        placeholder='Amount (PHA)'
        after={<InputAction>MAX</InputAction>}></InputNumber>
      <Spacer y={0.2}></Spacer>
      <InputExternalInfo
        style={{ textAlign: 'right' }}
        {...{
          label: 'Balance',
          value: 1234.56789,
          type: 'PHA',
        }}
      />
      <ModalActions>
        <ModalAction>
          <Button>Cancel</Button>
        </ModalAction>
        <ModalAction>
          <Button type='primary' onClick={onNext}>
            Next
          </Button>
        </ModalAction>
      </ModalActions>
    </div>
  )
}

export default InputDataStep
