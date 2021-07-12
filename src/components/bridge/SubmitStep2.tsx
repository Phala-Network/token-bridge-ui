import React, { useMemo, useState } from 'react'
import AmountInfo from '../AmountInfo'
import Button from '../Button'
import InfoTitle from '../InfoTitle'
import InputExternalInfo from '../InputExternalInfo'
import { ModalAction, ModalActions } from '../Modal'
import Spacer from '../Spacer'
import Address from '../Address'
import { voidFn } from '../../types/normal'
import { StepProps } from './BridgeProcess'
import FormLayout from './FormLayout'
import FormItem from './FormItem'
import { InputDataStepResult } from './InputDataStep'
import { useErc20Deposit } from '../../libs/ethereum/bridge/deposit'
import { BigNumber, ethers } from 'ethers'
import { AllowanceApprove } from '../ethereum/AllowanceGrant'
import { decodeAddress } from '@polkadot/util-crypto'
import { u8aToHex } from '@polkadot/util'

type Props = {
  onPrev?: voidFn
  onSubmit?: voidFn
  data?: InputDataStepResult
} & StepProps

const SubmitStep: React.FC<Props> = (props) => {
  const { onSubmit, onPrev, layout, data } = props
  const { from, to, amount: amountFromPrevStep } = data || {}
  const { account: accountFrom } = from || {}
  const { account: accountTo } = to || {}
  const submitDeposit = useErc20Deposit(accountFrom)
  const [account, setAccount] = useState<string>()
  const [recipient, setRecipient] = useState<string>()
  const [
    lastTxResponse,
    setTxResponse,
  ] = useState<ethers.providers.TransactionResponse>()
  const [lastTxError, setTxError] = useState<Error>()
  const [isSubmitting, setSubmitting] = useState<boolean>(false)

  const submit = () => {
    setTxError(undefined)
    setTxResponse(undefined)
    setSubmitting(true)

    submitDeposit?.(
      ethers.utils.parseUnits(amountFromPrevStep?.toString()!, 18),
      u8aToHex(decodeAddress(accountTo))
    )
      .then((response) => setTxResponse(response))
      .catch((error) => setTxError(error))
      .finally(() => setSubmitting(false))
  }

  return (
    <>
      <FormLayout layout={layout}>
        <FormItem>
          <InfoTitle>From</InfoTitle>
          <AmountInfo
            network={from?.network}
            amount={12345.67891}
            type={from?.type}
          />
        </FormItem>

        <Spacer></Spacer>

        <FormItem>
          <InfoTitle>To</InfoTitle>
          <AmountInfo
            network={to?.network}
            amount={12345.67891}
            type={to?.type}>
            <Address>{to?.account}</Address>
          </AmountInfo>
          <InputExternalInfo
            style={{ textAlign: 'right' }}
            label="Balance"
            value={1234.56789}
            type={'PHA'}
          />
        </FormItem>
      </FormLayout>

      <AllowanceApprove owner={account!} />

      <ModalActions>
        {onPrev && (
          <ModalAction>
            <Button onClick={onPrev}>Back</Button>
          </ModalAction>
        )}
        {onSubmit && (
          <ModalAction>
            <Button type="primary" onClick={submit}>
              Submit
            </Button>
          </ModalAction>
        )}
      </ModalActions>
    </>
  )
}

export default SubmitStep

class LazyPromise {
  private _promise: Promise<any> | null = null

  constructor(private _fn: () => Promise<any>) {}

  get promise(): Promise<any> {
    if (!this._promise) {
      this._promise = this._fn()
    }

    return this._promise
  }

  public put(value: any): void {}
}
