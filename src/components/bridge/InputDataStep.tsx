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

type Props = {
  onNext: () => void
} & StepProps

const InputDataStep: React.FC<Props> = (props) => {
  const { layout, onNext } = props
  const [balanceNumber, setBalanceNumber] = useState(0)
  const [account, setAccount] = useState<string>()
  const [amountInput, setAmountInput] = useState<number>()
  const [recipient, setRecipient] = useState<string>()
  const [tradeTypeSelectValue, setTradeTypeSelectValue] = useState(
    DEFAULT_VALUE
  )

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
