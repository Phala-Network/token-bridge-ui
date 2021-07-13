import React, { useMemo, useState } from 'react'
import AmountInfo from '../../AmountInfo'
import Button from '../../Button'
import InfoTitle from '../../InfoTitle'
import InputExternalInfo from '../../InputExternalInfo'
import { ModalAction, ModalActions } from '../../Modal'
import Spacer from '../../Spacer'
import Address from '../../Address'
import { voidFn } from '../../../types/normal'
import { StepProps } from '../BridgeProcess'
import FormLayout from '../FormLayout'
import FormItem from '../FormItem'
import { InputDataStepResult } from '../InputDataStep'
import { useTransferSubmit } from '../../../libs/polkadot/extrinsics/bridgeTransfer'
import { useApiPromise } from '../../../libs/polkadot/hooks/useApiPromise'
import { useDecimalJsTokenDecimalMultiplier } from '../../../libs/polkadot/useTokenDecimals'
import { Decimal } from 'decimal.js'
import { decimalToBalance } from '../../../libs/polkadot/utils/balances'
import { getAddress } from 'ethers/lib/utils'
import { Hash } from '@polkadot/types/interfaces'

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

  const { api } = useApiPromise()
  const decimals = useDecimalJsTokenDecimalMultiplier(api)
  const transferSubmit = useTransferSubmit(/* NOTE: pass destination Ethereum network Id here to override */)
  const [submittedHash, setSubmittedHash] = useState<Hash>()
  const [isSubmitting, setSubmitting] = useState<boolean>(false)

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
        (status) => console.log('status', status)
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
