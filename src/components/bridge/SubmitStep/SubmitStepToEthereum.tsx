import { ExtrinsicStatus, Hash } from '@polkadot/types/interfaces'
import { Decimal } from 'decimal.js'
import { getAddress } from 'ethers/lib/utils'
import React, { useMemo, useState } from 'react'
import { useTransferSubmit } from '../../../libs/polkadot/extrinsics/bridgeTransfer'
import { useApiPromise } from '../../../libs/polkadot/hooks/useApiPromise'
import { useDecimalJsTokenDecimalMultiplier } from '../../../libs/polkadot/useTokenDecimals'
import { decimalToBalance } from '../../../libs/polkadot/utils/balances'
import { voidFn } from '../../../types/normal'
import Alert from '../../Alert/Alert'
import Button from '../../Button'
import { ModalAction, ModalActions } from '../../Modal'
import Spacer from '../../Spacer'
import { StepProps } from '../BridgeProcess'
import { InputDataStepResult } from '../InputDataStep'
import BaseInfo from './BaseInfo'
import Progress from './Progress'

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

      <Spacer></Spacer>

      <Alert>
        {/* Please be patient as the transaction may take a few minutes. You can
        follow each step of the transaction here once you confirm it! */}

        <Progress></Progress>
      </Alert>

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
