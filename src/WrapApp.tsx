import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './GlobalStyle'
import theme from './theme'
import { polkadot } from './config'
import { EthersProvider } from './libs/ethereum/contexts/useEthers'
import { useRef } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Web3Provider as EthereumWeb3Provider } from './libs/ethereum/contexts/useWeb3'
import { Web3Provider as PolkadotWeb3Provider } from './libs/polkadot/hooks/useWeb3'
import { ApiPromiseProvider } from './libs/polkadot/hooks/useApiPromise'
import './fonts.css'

const WrapApp: React.FC = ({ children }) => {
  const client = useRef(new QueryClient())

  return (
    <QueryClientProvider client={client.current}>
      <EthereumWeb3Provider>
        <EthersProvider>
          <PolkadotWeb3Provider originName="ChainBridge Operator">
            <ApiPromiseProvider
              endpoint={polkadot.endpoint}
              registryTypes={polkadot.typedefs}>
              <ThemeProvider theme={theme}>
                <GlobalStyle></GlobalStyle>
                {children}
              </ThemeProvider>
            </ApiPromiseProvider>
          </PolkadotWeb3Provider>
        </EthersProvider>
      </EthereumWeb3Provider>
    </QueryClientProvider>
  )
}

export default WrapApp
