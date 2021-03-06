import { u8aToHex } from '@polkadot/util'
import { decodeAddress } from '@polkadot/util-crypto'
// import { Button } from 'baseui/button'
// import { FormControl } from 'baseui/form-control'
// import { Input } from 'baseui/input'
// import { KIND as NotificationKind, Notification } from 'baseui/notification'
import { BigNumber, ethers } from 'ethers'
import { useMemo, useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import { InjectedAccountSelect as PolkadotInjectedAccountSelect } from '../components/polkadot/AccountSelect'
import { useErc20Deposit } from '../libs/ethereum/bridge/deposit'
import { useErc20AssetHandlerAllowanceQuery } from '../libs/ethereum/queries/useErc20AllowanceQuery'
import { useTransactionReceiptQuery } from '../libs/ethereum/queries/useTransactionReceiptQuery'

const validAmount = /^\d+(\.(\d+)?)?$/

const TransferToSubstratePage = (): JSX.Element => {
  const [account, setAccount] = useState<string>()
  const [amount, setAmount] = useState<BigNumber>()
  const [recipient, setRecipient] = useState<string>()
  const { data: allowance } = useErc20AssetHandlerAllowanceQuery(account)

  const submitDeposit = useErc20Deposit(account)

  const isAllowanceEnough = useMemo(
    () => amount !== undefined && allowance?.gte(amount) === true,
    [allowance, amount]
  )

  const handleAmountChange = (value: string) => {
    if (validAmount.test(value)) {
      setAmount(ethers.utils.parseUnits(value, 18))
    } else {
      setAmount(undefined)
    }
  }

  const handleRecipientChange = (value?: string) => {
    try {
      setRecipient(u8aToHex(decodeAddress(value)))
    } catch {
      setRecipient(undefined)
    }
  }

  const caption = useMemo(() => {
    if (amount !== undefined) {
      return `${ethers.utils.formatUnits(
        amount,
        18
      )} PHA will be transfer to Phala`
    } else {
      return 'Enter a valid amount to be transfer to Phala chain'
    }
  }, [amount])

  /* submission */

  const [lastTxError, setTxError] = useState<Error>()
  const [
    lastTxResponse,
    setTxResponse,
  ] = useState<ethers.providers.TransactionResponse>()
  const [isSubmitting, setSubmitting] = useState<boolean>(false)
  const { data: lastTxReceiept } = useTransactionReceiptQuery(
    lastTxResponse?.hash
  )

  const ready = useMemo(
    () =>
      account !== undefined &&
      amount !== undefined &&
      recipient !== undefined &&
      !isSubmitting,
    [account, amount, isSubmitting, recipient]
  )

  const handleSubmit = () => {
    if (amount === undefined || recipient === undefined) {
      return
    }

    setTxError(undefined)
    setTxResponse(undefined)
    setSubmitting(true)

    submitDeposit?.(amount, recipient)
      .then((response) => setTxResponse(response))
      .catch((error) => setTxError(error))
      .finally(() => setSubmitting(false))
  }

  return (
    <>
      {/* <EthereumInjectedAccountSelectWithBalanceCaption
        label="From Ethereum Account"
        onChange={(account) => setAccount(account)}
      /> */}

      {/* <FormControl
        label={() => 'Amount'}
        caption={caption}
        positive={undefined}> */}
      {/* <Input
        // error={amount === undefined}
        onChange={(e: { currentTarget: { value: string } }) =>
          handleAmountChange(e.currentTarget.value)
        }
      /> */}
      {/* </FormControl> */}

      <PolkadotInjectedAccountSelect
        creatable
        label="To Phala Recipient"
        onChange={(account) => handleRecipientChange(account)}
      />

      <Button
        onClick={() => handleSubmit()}
        disabled={!ready || isSubmitting}
        isLoading={isSubmitting}>
        Submit
      </Button>

      {/* {account !== undefined && !isAllowanceEnough && amount !== undefined && (
        <Notification
          kind={NotificationKind.negative}
          overrides={{ Body: { style: { width: '100%' } } }}>
          You have to approve our bridge before transfering.
          <AllowanceApprove owner={account} value={amount} />
        </Notification>
      )}

      {lastTxError && (
        <Notification
          kind={NotificationKind.negative}
          overrides={{ Body: { style: { width: 'auto' } } }}>
          {lastTxError?.message ?? JSON.stringify(lastTxError)}
        </Notification>
      )}

      {lastTxResponse && (
        <Notification
          kind={
            lastTxReceiept?.confirmations !== undefined &&
            lastTxReceiept.confirmations > 0
              ? NotificationKind.positive
              : NotificationKind.warning
          }
          overrides={{ Body: { style: { width: 'auto' } } }}>
          {lastTxResponse?.hash && (
            <DepositStatus hash={lastTxResponse?.hash} />
          )}
        </Notification>
      )} */}
    </>
  )
}

export default TransferToSubstratePage
