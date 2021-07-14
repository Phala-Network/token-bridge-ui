import React, { useState } from 'react'
import AmountInfo from '../../AmountInfo'
import Button from '../../Button'
import InfoTitle from '../../InfoTitle'
import { ModalAction, ModalActions } from '../../Modal'
import Spacer from '../../Spacer'
import Address from '../../Address'
import { voidFn } from '../../../types/normal'
import { StepProps } from '../BridgeProcess'
import FormLayout from '../FormLayout'
import FormItem from '../FormItem'
import { InputDataStepResult } from '../InputDataStep'
import { useErc20Deposit } from '../../../libs/ethereum/bridge/deposit'
import { ethers } from 'ethers'
import { AllowanceApprove } from '../../ethereum/AllowanceGrant'
import { decodeAddress } from '@polkadot/util-crypto'
import { u8aToHex } from '@polkadot/util'
import { ErrorBoundary } from 'react-error-boundary'
import EthereumAllowance from '../EthereumAllowance'

type Props = {
  onPrev?: voidFn
  onSubmit?: voidFn
  data?: InputDataStepResult
} & StepProps

const SubmitStepToPhala: React.FC<Props> = (props) => {
  const { onSubmit, onPrev, layout, data } = props
  const { from, to, amount: amountFromPrevStep } = data || {}
  const { account: accountFrom } = from || {}
  const { account: accountTo } = to || {}
  const submitDeposit = useErc20Deposit(accountFrom)
  const [
    lastTxResponse,
    setTxResponse,
  ] = useState<ethers.providers.TransactionResponse>()
  const [lastTxError, setTxError] = useState<Error>()
  const [isSubmitting, setSubmitting] = useState<boolean>(false)

  const submit = async () => {
    setTxError(undefined)
    setTxResponse(undefined)
    setSubmitting(true)

    const recipient = u8aToHex(decodeAddress(accountTo))

    const response = await submitDeposit?.(
      ethers.utils.parseUnits(amountFromPrevStep?.toString()!, 18),
      recipient
    )

    setTxResponse(response)

    // .catch((error) => setTxError(error))
    // .finally(() => setSubmitting(false))
  }

  return (
    <>
      <FormLayout layout={layout}>
        <FormItem>
          <InfoTitle>From</InfoTitle>
          <AmountInfo
            network={from?.network}
            amount={from?.balance.toString()}
            type={from?.type}
          />
        </FormItem>

        <Spacer></Spacer>

        <FormItem>
          <InfoTitle>To</InfoTitle>
          <AmountInfo
            network={to?.network}
            amount={amountFromPrevStep?.toString()}
            type={to?.type}>
            <Address>{to?.account}</Address>
          </AmountInfo>
        </FormItem>
      </FormLayout>

      <ErrorBoundary fallbackRender={() => null}>
        <AllowanceApprove owner={accountFrom!} />
      </ErrorBoundary>

      <EthereumAllowance account={accountFrom}></EthereumAllowance>

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

export default SubmitStepToPhala
