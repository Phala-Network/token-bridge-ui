import { captureException } from '@sentry/react'
import { Decimal } from 'decimal.js'
import { ethers } from 'ethers'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import ethereumAccountAtom from '../atoms/ethereumAccountAtom'
import { useEthersNetworkQuery } from '../libs/ethereum/queries/useEthersNetworkQuery'

let flag = 0

export default function useEthereumAccountBalanceETHDecimal(): Decimal {
  const [balanceDecimal, setBalanceDecimal] = useState<Decimal>(new Decimal(-1))
  const [ethereumAccount] = useAtom(ethereumAccountAtom)
  const { data: network } = useEthersNetworkQuery()
  const address = ethereumAccount?.address

  useEffect(() => {
    if (!address || !network) return

    const promiseFlag = ++flag

    try {
      ethers
        .getDefaultProvider(network)
        .getBalance(address)
        .then((balance) => {
          const balanceInEth = ethers.utils.formatEther(balance)

          if (promiseFlag >= flag) {
            setBalanceDecimal(new Decimal(balanceInEth))
          }
        })
        .catch((error) => {
          console.error(error)

          captureException(error)
        })
    } catch (error) {
      console.error(error)

      captureException(error)
    }
  }, [address, network])

  return balanceDecimal
}
