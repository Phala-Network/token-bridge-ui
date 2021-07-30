import { u8aToHex } from '@polkadot/util'
import { decodeAddress } from '@polkadot/util-crypto'
import { ethers } from 'ethers'
import { useAtom } from 'jotai'
import React, { useState } from 'react'
import transactionsAtom from '../../../atoms/transactions'
import { useErc20Deposit } from '../../../libs/ethereum/bridge/deposit'
import { voidFn } from '../../../types/normal'
import Button from '../../Button'
import { ModalAction, ModalActions } from '../../Modal'
import { StepProps } from '../BridgeProcess'
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

export default SubmitStepToKhala
