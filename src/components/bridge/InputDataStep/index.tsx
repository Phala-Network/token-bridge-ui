import { Decimal } from 'decimal.js'
import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'
import ethereumAccountAtom from '../../../atoms/ethereumAccountAtom'
import polkadotAccountAtom from '../../../atoms/polkadotAccountAtom'
import useEthereumAccountBalanceDecimal from '../../../hooks/useEthereumAccountBalanceDecimal'
import usePolkadotAccountBalanceDecimal from '../../../hooks/usePolkadotAccountBalanceDecimal'
import { voidFn } from '../../../types/normal'
import validateAddress from '../../../utils/validateAddress'
import Button from '../../Button'
import ErrorText from '../../ErrorText'
import Input from '../../Input'
import InputAction from '../../InputAction'
import InputExternalInfo from '../../InputExternalInfo'
import InputNumber from '../../InputNumber'
import { ModalAction, ModalActions } from '../../Modal'
import Spacer from '../../Spacer'
import TradeTypeSelect, { TradeTypeSelectValue } from '../../TradeTypeSelect'
import DEFAULT_VALUE from '../../TradeTypeSelect/DEFAULT_VALUE'
import { StepProps } from '../BridgeProcess'
import FormItem from '../FormItem'
import FormLayout from '../FormLayout'
import ActionButton from './ActionButton'

export type InputDataStepResult = {
  from: {
    type: string
    network: string
    account: string
    balance: Decimal
  }
  to: {
    type: string
    network: string
    account: string
  }
  amount: Decimal
}

type Props = {
  onNext: (data: InputDataStepResult) => void
  onCancel?: voidFn
} & StepProps

const InputDataStep: React.FC<Props> = (props) => {
  const { layout, onNext, onCancel } = props
  const [amountInput, setAmountInput] = useState<number>()
  const [recipient, setRecipient] = useState<string>('')
  const [polkadotAccount] = useAtom(polkadotAccountAtom)
  const polkadotAccountAddress = polkadotAccount?.address
  const [ethereumAccount] = useAtom(ethereumAccountAtom)
  const ethereumAccountAddress = ethereumAccount?.address
  const [errorString, setErrorString] = useState('')

  const ethereumAccountBalanceDecimal = useEthereumAccountBalanceDecimal()
  const polkadotAccountBalanceDecimal = usePolkadotAccountBalanceDecimal()

  const [addressValid, setAddressValid] = useState(false)

  const [
    tradeTypeSelectValue,
    setTradeTypeSelectValue,
  ] = useState<TradeTypeSelectValue>(DEFAULT_VALUE)

  const isFromEthereum = tradeTypeSelectValue.from.network === 'ethereum'
  const currentAddress = isFromEthereum
    ? ethereumAccountAddress
    : polkadotAccountAddress

  const currentBalance = isFromEthereum
    ? ethereumAccountBalanceDecimal
    : polkadotAccountBalanceDecimal

  const maxAmount = currentBalance.toNumber()

  const isShowMaxButton = maxAmount > 0 && isFromEthereum

  const isShowRecipient = isFromEthereum
    ? !!polkadotAccountAddress
    : !!ethereumAccountAddress

  useEffect(() => {
    setAddressValid(validateAddress(recipient))
  }, [recipient])

  function setMyAddress() {
    const address = isFromEthereum
      ? polkadotAccountAddress
      : ethereumAccountAddress

    setRecipient(address || '')
  }

  function setMax() {
    setAmountInput(maxAmount)
  }

  const onTradeTypeSelectChange = (value: TradeTypeSelectValue) => {
    setTradeTypeSelectValue(value)
    setErrorString('')
  }

  useEffect(() => {
    setRecipient('')
  }, [currentAddress])

  const submit = () => {
    const accountFrom = isFromEthereum
      ? ethereumAccountAddress
      : polkadotAccountAddress
    const amountTo = amountInput

    setErrorString('')

    if (!amountTo) {
      setErrorString('Need enter amount')
      return
    }

    if (!recipient) {
      setErrorString('Need enter recipient')
      return
    }

    if (!validateAddress(recipient)) {
      setErrorString('Need enter the correct recipient')
      return
    }

    if (!accountFrom) {
      setErrorString('Need login')
      return
    }

    if (new Decimal(amountTo).greaterThan(new Decimal(maxAmount))) {
      setErrorString('Insufficient balance')
      return
    }

    onNext({
      from: {
        ...tradeTypeSelectValue.from,
        account: accountFrom,
        balance: currentBalance,
      },
      to: {
        ...tradeTypeSelectValue.to,
        account: recipient,
      },
      amount: new Decimal(amountTo),
    })
  }

  return (
    <>
      <div style={{ height: 26 }}>
        <InputExternalInfo
          label={'Balance'}
          type={'PHA'}
          value={currentBalance}
        />
      </div>

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
          <InputNumber
            size="large"
            onChange={(value) => {
              setAmountInput(value as number)
              setErrorString('')
            }}
            value={amountInput}
            placeholder="Amount (PHA)"
            after={
              isShowMaxButton ? (
                <InputAction onClick={setMax}>MAX</InputAction>
              ) : null
            }
          />

          <Spacer y={1.2} />

          <Input
            value={recipient}
            onChange={(value) => {
              setRecipient(value)
              setErrorString('')
            }}
            size="large"
            placeholder="Destination Address"
            after={
              isShowRecipient && !addressValid ? (
                <InputAction onClick={setMyAddress}>MY ADDRESS</InputAction>
              ) : null
            }
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
          <ActionButton
            isFromEthereum={isFromEthereum}
            onClick={submit}></ActionButton>
        </ModalAction>
      </ModalActions>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ErrorText>{errorString}</ErrorText>
      </div>
    </>
  )
}

export default InputDataStep
