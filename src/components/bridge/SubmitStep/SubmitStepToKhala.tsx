import { u8aToHex } from '@polkadot/util'
import { decodeAddress } from '@polkadot/util-crypto'
import { ethers } from 'ethers'
import { useAtom } from 'jotai'
import React, { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import transactionsAtom from '../../../atoms/transactions'
import { useErc20Deposit } from '../../../libs/ethereum/bridge/deposit'
import { voidFn } from '../../../types/normal'
import Alert from '../../Alert/Alert'
import Button from '../../Button'
import { ModalAction, ModalActions } from '../../Modal'
import { StepProps } from '../BridgeProcess'
import EthereumAllowance from '../EthereumAllowance'
import { InputDataStepResult } from '../InputDataStep'
import BaseInfo from './BaseInfo'

type Props = {
  onPrev?: voidFn
  onSubmit?: voidFn
  data?: InputDataStepResult
} & StepProps

const SubmitStepToKhala: React.FC<Props> = (props) => {
  const [transactions, setTransactions] = useAtom(transactionsAtom)
  const { onSubmit, onPrev, layout, data } = props
  const { from, to, amount: amountFromPrevStep } = data || {}
  const { account: accountFrom } = from || {}
  const { account: accountTo } = to || {}
  const submitDeposit = useErc20Deposit(accountFrom)
  const [
    lastTxResponse,
    setTxResponse,
  ] = useState<ethers.providers.TransactionResponse>()
  const [isSubmitting, setSubmitting] = useState<boolean>(false)

  const submit = async () => {
    setTxResponse(undefined)
    setSubmitting(true)

    const recipient = u8aToHex(decodeAddress(accountTo))

    try {
      const amount = ethers.utils.parseUnits(
        amountFromPrevStep?.toString() || '0',
        18
      )

      const response = await submitDeposit?.(amount, recipient)

      setTxResponse(response)

      setTransactions([{ ...data, hash: response?.hash }, ...transactions])
    } catch (error) {
      console.error(error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <BaseInfo layout={layout} data={data}></BaseInfo>

      <Alert>
        Please be patient as the transaction may take a few minutes. You can
        follow each step of the transaction here once you confirm it!
      </Alert>

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
              <ErrorBoundary fallbackRender={() => null}>
                <EthereumAllowance
                  placeholder={<Button type="primary">Allowance</Button>}
                  account={accountFrom}>
                  <Button
                    loading={isSubmitting}
                    type="primary"
                    onClick={submit}>
                    {isSubmitting ? 'Submitting' : 'Submit'}
                  </Button>
                </EthereumAllowance>
              </ErrorBoundary>
            </ModalAction>
          )}
        </ModalActions>
      )}
    </>
  )
}

export default SubmitStepToKhala
