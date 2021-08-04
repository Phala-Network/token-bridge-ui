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
  const networkName = network?.name

  useEffect(() => {
    if (!address || !networkName) return

    const promiseFlag = ++flag

    ethers
      .getDefaultProvider(networkName)
      .getBalance(address)
      .then((balance) => {
        const balanceInEth = ethers.utils.formatEther(balance)

        if (promiseFlag >= flag) {
          setBalanceDecimal(new Decimal(balanceInEth))
        }
      })
  }, [address, networkName])

  return balanceDecimal
}
