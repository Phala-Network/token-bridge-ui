import { Provider as JotaiProvider } from 'jotai'
import React, { useRef } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'
import { EthersProvider } from './libs/ethereum/contexts/useEthers'
import { Web3Provider as EthereumWeb3Provider } from './libs/ethereum/contexts/useWeb3'
import { ApiPromiseProvider } from './libs/polkadot/hooks/useApiPromise'
import { NetworkContextProvider } from './libs/polkadot/hooks/useSubstrateNetwork'
import { Web3Provider as PolkadotWeb3Provider } from './libs/polkadot/hooks/useWeb3'
import theme from './theme'
import './ReactToastify.css'
import './fonts.css'
import './tooltip.css'

const WrapApp: React.FC = ({ children }) => {
  const client = useRef(new QueryClient())

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={client.current}>
        <EthereumWeb3Provider>
          <JotaiProvider>
            <EthersProvider>
              <NetworkContextProvider
                defaultNetwork={
                  process.env.GATSBY_DEFAULT_NETWORK ?? 'poc4-dev'
                }>
                <ApiPromiseProvider>
                  <PolkadotWeb3Provider originName="ChainBridge Operator">
                    {children}
                  </PolkadotWeb3Provider>
                </ApiPromiseProvider>
              </NetworkContextProvider>
            </EthersProvider>
          </JotaiProvider>
        </EthereumWeb3Provider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default WrapApp
