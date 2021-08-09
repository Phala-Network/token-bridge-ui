import { ethereums } from '../config'
import { useEthers } from '../libs/ethereum/contexts/useEthers'

export function useCheckEthereumNetwork(): boolean {
  const { provider } = useEthers()

  const network = ethereums[provider?.network?.chainId as number]

  return !!network
}
