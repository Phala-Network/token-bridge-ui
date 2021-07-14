import React, { useMemo, useState } from 'react'
import Button from '../../Button'
import { ModalAction, ModalActions } from '../../Modal'
import { voidFn } from '../../../types/normal'
import { StepProps } from '../BridgeProcess'
import { InputDataStepResult } from '../InputDataStep'
import { useTransferSubmit } from '../../../libs/polkadot/extrinsics/bridgeTransfer'
import { useApiPromise } from '../../../libs/polkadot/hooks/useApiPromise'
import { useDecimalJsTokenDecimalMultiplier } from '../../../libs/polkadot/useTokenDecimals'
import { Decimal } from 'decimal.js'
import { decimalToBalance } from '../../../libs/polkadot/utils/balances'
import { getAddress } from 'ethers/lib/utils'
import { ExtrinsicStatus, Hash } from '@polkadot/types/interfaces'
import BaseInfo from './BaseInfo'

type Props = {
  onPrev?: voidFn
  onSubmit?: voidFn
  data?: InputDataStepResult
} & StepProps

const SubmitStepToEthereum: React.FC<Props> = (props) => {
  const { onSubmit, onPrev, layout, data } = props
  const { from, to, amount: amountFromPrevStep } = data || {}
  const { account: accountFrom } = from || {}
  const { account: accountTo } = to || {}

  const { api } = useApiPromise()
  const decimals = useDecimalJsTokenDecimalMultiplier(api)
  const transferSubmit = useTransferSubmit(42)
  const [submittedHash, setSubmittedHash] = useState<Hash>()
  const [isSubmitting, setSubmitting] = useState<boolean>(false)
  const [extrinsicStatus, setExtrinsicStatus] = useState<ExtrinsicStatus[]>([])

  const amount = useMemo(() => {
    if (!amountFromPrevStep || !api || !decimals) return

    return decimalToBalance(new Decimal(amountFromPrevStep), decimals, api)
  }, [amountFromPrevStep, api, decimals])

  const submit = async () => {
    if (!accountTo || !amount || !accountFrom) {
      return
    }

    try {
      setSubmitting(true)

      const accountToAddress = getAddress(accountTo)

      const hash = await transferSubmit?.(
        amount,
        accountToAddress,
        accountFrom,
        (status) => {
          console.log('status', status)
          setExtrinsicStatus([...extrinsicStatus, status])
        }
      )

      setSubmittedHash(hash)
    } catch (e) {
      console.error(e)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <BaseInfo layout={layout} data={data}></BaseInfo>

      {extrinsicStatus.map((status) => (
        <div>{status.type}</div>
      ))}

      {submittedHash && (
        <ModalActions>
          <ModalAction>
            <Button type="primary" onClick={onPrev}>
              Done
            </Button>
          </ModalAction>
        </ModalActions>
      )}

      {!submittedHash && (
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

export default SubmitStepToEthereum