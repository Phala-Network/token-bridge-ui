import React, { useState } from 'react'
import Button from '../../Button'
import { ModalAction, ModalActions } from '../../Modal'
import { voidFn } from '../../../types/normal'
import { StepProps } from '../BridgeProcess'
import { useErc20Deposit } from '../../../libs/ethereum/bridge/deposit'
import { ethers } from 'ethers'
import { AllowanceApprove } from '../../ethereum/AllowanceGrant'
import { decodeAddress } from '@polkadot/util-crypto'
import { u8aToHex } from '@polkadot/util'
import { ErrorBoundary } from 'react-error-boundary'
import EthereumAllowance from '../EthereumAllowance'
import BaseInfo from './BaseInfo'
import { InputDataStepResult } from '../InputDataStep'

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

    try {
      const response = await submitDeposit?.(
        ethers.utils.parseUnits(amountFromPrevStep?.toString()!, 18),
        recipient
      )

      setTxResponse(response)

      console.log('response', response)
    } catch (error) {
      setTxError(error)

      console.log('error', error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <BaseInfo layout={layout} data={data}></BaseInfo>

      <ErrorBoundary fallbackRender={() => null}>
        <AllowanceApprove owner={accountFrom!} />
      </ErrorBoundary>

      <EthereumAllowance account={accountFrom}></EthereumAllowance>

      {lastTxResponse && (
        <ModalActions>
          <ModalAction>
            <Button type="primary" onClick={onPrev}>
              Done
            </Button>
          </ModalAction>
        </ModalActions>
      )}

      {!lastTxResponse && (
        <ModalActions>
          {onPrev && !isSubmitting && (
            <ModalAction>
              <Button onClick={onPrev}>Back</Button>
            </ModalAction>
          )}
          {onSubmit && (
            <ModalAction>
              <Button loading={isSubmitting} type="primary" onClick={submit}>
                {isSubmitting ? 'Submitting' : 'Submit'}
              </Button>
            </ModalAction>
          )}
        </ModalActions>
      )}
    </>
  )
}

export default SubmitStepToPhala