import React, { useState } from 'react'
import InputAction from '../InputAction'
import InputExternalInfo from '../InputExternalInfo'
import Spacer from '../Spacer'
import TradeTypeSelect, { DEFAULT_VALUE } from '../TradeTypeSelect'
import Button from '../Button'
import { ModalAction, ModalActions } from '../Modal'
import { useEffect } from 'react'
import { StepProps } from './BridgeProcess'
import FormItem from './FormItem'
import FormLayout from './FormLayout'
import Input from '../Input'
import InputNumber from '../InputNumber'
import { voidFn } from '../../types/normal'

export type InputDataStepResult = {
  from: {
    type: string
    network: string
    account: string
  }
  to: {
    type: string
    network: string
    account: string
  }
  amount: number
}

type Props = {
  onNext: (data: InputDataStepResult) => void
  onCancel?: voidFn
} & StepProps

const InputDataStep: React.FC<Props> = (props) => {
  const { layout, onNext, onCancel } = props
  const [balanceNumber, setBalanceNumber] = useState(0)
  const [account, setAccount] = useState<string>()
  const [amountInput, setAmountInput] = useState<number>()
  const [recipient, setRecipient] = useState<string>()
  const [tradeTypeSelectValue, setTradeTypeSelectValue] = useState(
    DEFAULT_VALUE
  )

  console.log('tradeTypeSelectValue', tradeTypeSelectValue)

  useEffect(() => {
    setBalanceNumber(1234.5678)
  }, [])

  function setMyAddress() {
    console.info('todo setMyAddress')
  }

  function setMax() {
    console.info('todo setMax')
  }

  function onTradeTypeSelectChange(value: any) {
    console.info('todo onTradeTypeSelectChange')
    setTradeTypeSelectValue(value)
  }

  return (
    <>
      <FormLayout layout={layout}>
        <FormItem>
          <TradeTypeSelect
            disableSelect={true}
            value={tradeTypeSelectValue}
            onChange={onTradeTypeSelectChange}
          />
        </FormItem>

        <Spacer />

        <FormItem>
          <Input
            size="large"
            placeholder="Destination Address"
            after={<InputAction onClick={setMyAddress}>MY ADDRESS</InputAction>}
          />

          <Spacer y={1.2} />

          <InputNumber
            size="large"
            onChange={(value) => setAmountInput(value)}
            value={amountInput}
            placeholder="Amount (PHA)"
            after={<InputAction onClick={setMax}>MAX</InputAction>}
          />

          <Spacer y={0.2}></Spacer>

          <InputExternalInfo
            style={{ textAlign: 'right' }}
            label={'Balance'}
            value={balanceNumber}
            type={'PHA'}
          />
        </FormItem>
      </FormLayout>

      <ModalActions>
        {onCancel && (
          <ModalAction>
            <Button onClick={onCancel}>Cancel</Button>
          </ModalAction>
        )}

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
