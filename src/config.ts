import { dev, khalaDev } from '@phala/typedefs'
import {
  EthereumNetworkOptions,
  SubstrateNetworkOptions,
} from './libs/configuration'
import { isDev } from './utils/isDev'
import { isTest } from './utils/isTest'

const isProduction = !isDev() && !isTest()

export const ethereums: Record<number, EthereumNetworkOptions> = !isProduction
  ? {
      42: {
        bridge: '0xe5F54e020f3E4964Ba11D269Cdda602A78d09917',
        erc20: '0x512f7a3c14b6ee86c2015bc8ac1fe97e657f75f2',
        erc20AssetHandler: '0xDf2E83f33dB8A9CcF3a00FCe18C3F509b974353D',
        erc20ResourceId:
          '0x00000000000000000000000000000063a7e2be78898ba83824b0c0cc8dfb6001',
        peerChainIds: {
          'poc4-dev': 1,
        },
      },
    }
  : {
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

export const substrates: Record<string, SubstrateNetworkOptions> = !isProduction
  ? {
      'poc4-dev': {
        endpoint:
          process.env['PHALA_ENDPOINT'] ?? 'wss://poc4-dev.phala.network/ws',
        peerChainIds: {
          42: 0,
        },
        typedefs: dev,
      },
    }
  : {
      'khala-dev': {
        endpoint:
          process.env['PHALA_ENDPOINT'] ??
          'wss://pc-test-2.phala.network/khala/ws',
        peerChainIds: {
          1: 0,
        },
        typedefs: khalaDev,
      },
    }
