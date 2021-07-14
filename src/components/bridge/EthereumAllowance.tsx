import { ethers } from 'ethers'
import React, { useMemo } from 'react'
import { useErc20AssetHandlerAllowanceQuery } from '../../libs/ethereum/queries/useErc20AllowanceQuery'

type Props = {
  account?: string
}

const EthereumAllowance: React.FC<Props> = (props) => {
  const { account } = props
  const { data: allowance } = useErc20AssetHandlerAllowanceQuery(account)

  const allowanceText = useMemo(
    () => allowance !== undefined && ethers.utils.formatUnits(allowance, 18),
    [allowance]
  )

  console.log('allowanceText', allowanceText, allowance)

  return <div>{allowanceText ? 'y' : 'n'}</div>
}

export default EthereumAllowance
