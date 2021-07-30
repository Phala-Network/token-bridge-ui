import { khalaDev } from '@phala/typedefs'
import {
  EthereumNetworkOptions,
  SubstrateNetworkOptions,
} from './libs/configuration'

/**
 * Ethereum network is selected via MetaMask and etc.
 * Throws unsupported network on not defined networks in the following table
 */
export const ethereums: Record<number, EthereumNetworkOptions> = {
  1: {
    bridge: '0xf88337a0db6e24Dff0fCD7F92ab0655B97A68d38',
    erc20: '0x6c5ba91642f10282b576d91922ae6448c9d52f4e',
    erc20AssetHandler: '0x510EED5833f9aCf5b7a66Ef391eA5118b84b86f2',
    erc20ResourceId:
      '0x00000000000000000000000000000063a7e2be78898ba83824b0c0cc8dfb6001',
    peerChainIds: {
      'khala-dev': 1,
    },
  },
}

export const substrates: Record<string, SubstrateNetworkOptions> = {
  'khala-dev': {
    endpoint:
      process.env['PHALA_ENDPOINT'] ?? 'wss://pc-test-2.phala.network/khala/ws',
    peerChainIds: {
      1: 0,
    },
    typedefs: khalaDev,
  },
}
