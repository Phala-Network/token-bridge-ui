import { Decimal } from 'decimal.js'
import { ethers } from 'ethers'
import { useAtom } from 'jotai'
import React, { useEffect, useMemo, useState } from 'react'
import ethereumAccountAtom from '../../atoms/ethereumAccountAtom'
import polkadotAccountAtom from '../../atoms/polkadotAccountAtom'
import { useBalance } from '../../hooks/useBalance'
import { useErc20BalanceQuery } from '../../libs/ethereum/queries/useErc20BalanceQuery'
import { voidFn } from '../../types/normal'
import Button from '../Button'
import ErrorText from '../ErrorText'
import Input from '../Input'
import InputAction from '../InputAction'
import InputExternalInfo from '../InputExternalInfo'
import InputNumber from '../InputNumber'
import { ModalAction, ModalActions } from '../Modal'
import Spacer from '../Spacer'
import TradeTypeSelect, { TradeTypeSelectValue } from '../TradeTypeSelect'
import DEFAULT_VALUE from '../TradeTypeSelect/DEFAULT_VALUE'
import { StepProps } from './BridgeProcess'
import FormItem from './FormItem'
import FormLayout from './FormLayout'

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

  const polkadotAccountBalance = useBalance(polkadotAccountAddress)
  const { data: ethereumAccountBalance } = useErc20BalanceQuery(
    ethereumAccountAddress
  )

  const ethereumAccountBalanceNumber = useMemo(() => {
    if (ethereumAccountBalance) {
      return parseFloat(
        ethers.utils.formatUnits(
          ethereumAccountBalance as ethers.BigNumberish,
          18
        )
      )
    } else {
      return 0
    }
  }, [ethereumAccountBalance])

  const polkadotAccountBalanceNumber = useMemo(
    () =>
      polkadotAccountBalance
        ? polkadotAccountBalance!.toNumber() / 10 ** 12
        : 0,
    [polkadotAccountBalance]
  )

  const ethereumAccountBalanceString = useMemo(() => {
    return ethereumAccountBalance !== undefined
      ? `${ethereumAccountBalanceNumber} PHA`
      : ethereumAccount !== undefined
      ? '...'
      : undefined
  }, [ethereumAccountBalance])

  const [
    tradeTypeSelectValue,
    setTradeTypeSelectValue,
  ] = useState<TradeTypeSelectValue>(DEFAULT_VALUE)

  const isFromEthereum = tradeTypeSelectValue.from.network === 'ethereum'
  const currentAddress = isFromEthereum
    ? ethereumAccountAddress
    : polkadotAccountAddress

  function setMyAddress() {
    setRecipient(
      isFromEthereum ? polkadotAccountAddress! : ethereumAccountAddress!
    )
  }

  function setMax() {
    setAmountInput(
      isFromEthereum
        ? ethereumAccountBalanceNumber!
        : polkadotAccountBalanceNumber!
    )
  }

  const onTradeTypeSelectChange = (value: TradeTypeSelectValue) => {
    setTradeTypeSelectValue(value)
  }

  useEffect(() => {
    setRecipient('')
    setAmountInput(0)
  }, [currentAddress])

  const submit = () => {
    const accountFrom = isFromEthereum
      ? ethereumAccountAddress
      : polkadotAccountAddress
    const amountTo = amountInput!

    setErrorString('')

    if (!amountTo) {
      setErrorString('need enter amount')
      return
    }

    if (!recipient) {
      setErrorString('need enter recipient')
      return
    }

    if (!accountFrom) {
      setErrorString('need login')
      return
    }

    onNext({
      from: {
        ...tradeTypeSelectValue.from,
        account: accountFrom!,
        balance: new Decimal(
          isFromEthereum
            ? ethereumAccountBalanceNumber
            : polkadotAccountBalanceNumber
        ),
      },
      to: {
        ...tradeTypeSelectValue.to,
        account: recipient!,
      },
      amount: new Decimal(amountTo),
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
            onChange={setRecipient}
            size="large"
            placeholder="Destination Address"
            after={<InputAction onClick={setMyAddress}>MY ADDRESS</InputAction>}
          />

          <Spacer y={1.2} />

          <InputNumber
            size="large"
            onChange={(value) => setAmountInput(value as number)}
            value={amountInput}
            placeholder="Amount (PHA)"
            after={<InputAction onClick={setMax}>MAX</InputAction>}
          />

          <Spacer y={0.2}></Spacer>

          {!isFromEthereum && polkadotAccountBalance && (
            <InputExternalInfo
              style={{ textAlign: 'right' }}
              label={'Balance'}
              value={polkadotAccountBalance?.toHuman()}
            />
          )}

          {isFromEthereum && ethereumAccountBalanceString && (
            <InputExternalInfo
              style={{ textAlign: 'right' }}
              label={'Balance'}
              value={ethereumAccountBalanceString}
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

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ErrorText>{errorString}</ErrorText>
      </div>
    </>
  )
}

export default InputDataStep
