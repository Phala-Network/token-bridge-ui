import React, { useState } from 'react'
import InputAction from '../InputAction'
import InputExternalInfo from '../InputExternalInfo'
import Spacer from '../Spacer'
import TradeTypeSelect, {
  DEFAULT_VALUE,
  TradeTypeSelectValue,
} from '../TradeTypeSelect'
import Button from '../Button'
import { ModalAction, ModalActions } from '../Modal'
import { useEffect } from 'react'
import { StepProps } from './BridgeProcess'
import FormItem from './FormItem'
import FormLayout from './FormLayout'
import Input from '../Input'
import InputNumber from '../InputNumber'
import { voidFn } from '../../types/normal'
import polkadotAccountAtom from '../../atoms/polkadotAccountAtom'
import { useBalance } from '../../libs/polkadot/useBalance'
import { useAtom } from 'jotai'

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
  const [amountInput, setAmountInput] = useState<number>()
  const [recipient, setRecipient] = useState<string>()
  const [polkadotAccount] = useAtom(polkadotAccountAtom)
  const balance = useBalance(polkadotAccount?.address)
  const [
    tradeTypeSelectValue,
    setTradeTypeSelectValue,
  ] = useState<TradeTypeSelectValue>(DEFAULT_VALUE)

  function setMyAddress() {
    setRecipient(polkadotAccount?.address)
  }

  function setMax() {
    setAmountInput(balance!.toNumber() / 10 ** 12)
  }

  const onTradeTypeSelectChange = (value: TradeTypeSelectValue) => {
    console.info('todo onTradeTypeSelectChange', value)
    setTradeTypeSelectValue(value)
  }

  const submit = () => {
    onNext({
      from: {
        ...tradeTypeSelectValue.from,
        account: polkadotAccount?.address!,
      },
      to: {
        ...tradeTypeSelectValue.to,
        account: recipient!,
      },
      amount: amountInput!,
    })
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
            value={recipient}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRecipient(e.currentTarget.value)
            }
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

          {balance && (
            <InputExternalInfo
              style={{ textAlign: 'right' }}
              label={'Balance'}
              value={balance?.toHuman()}
            />
          )}
        </FormItem>
      </FormLayout>

      <ModalActions>
        {onCancel && (
          <ModalAction>
            <Button onClick={onCancel}>Cancel</Button>
          </ModalAction>
        )}

        <ModalAction>
          <Button type="primary" onClick={submit}>
            Next
          </Button>
        </ModalAction>
      </ModalActions>
    </>
  )
}

export default InputDataStep
