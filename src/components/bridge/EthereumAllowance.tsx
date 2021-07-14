import { ethers } from 'ethers'
import React, { useMemo, cloneElement } from 'react'
import { ethereums } from '../../config'
import { useEthers } from '../../libs/ethereum/contexts/useEthers'
import { useErc20Contract } from '../../libs/ethereum/erc20/useErc20Contract'
import { useErc20AssetHandlerAllowanceQuery } from '../../libs/ethereum/queries/useErc20AllowanceQuery'

type Props = {
  account?: string
  placeholder: React.ReactElement
  children: React.ReactElement
}

const EthereumAllowance = (props: Props) => {
  const { account, placeholder, children } = props
  const { data: allowance } = useErc20AssetHandlerAllowanceQuery(account)
  const { contract } = useErc20Contract()
  const { provider, signer } = useEthers()

  const allowanceText = useMemo(
    () => allowance !== undefined && ethers.utils.formatUnits(allowance, 18),
    [allowance]
  )

  const startApprove = () => {
    const network = ethereums[provider?.network.chainId as number]

    if (
      contract === undefined ||
      network === undefined ||
      signer === undefined
    ) {
      return
    }

    const contractSigned = contract.connect(signer)

    contractSigned.functions['approve']?.(
      network.erc20AssetHandler,
      ethers.utils.parseUnits('11451419810', 18)
    )
  }

  return allowanceText
    ? children
    : cloneElement(placeholder, { onClick: startApprove })
}

export default EthereumAllowance
