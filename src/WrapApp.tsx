import { Provider as JotaiProvider } from 'jotai'
import React, { useRef } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Slide, ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import './fonts.css'
import GlobalStyle from './GlobalStyle'
import { EthersProvider } from './libs/ethereum/contexts/useEthers'
import { Web3Provider as EthereumWeb3Provider } from './libs/ethereum/contexts/useWeb3'
import { ApiPromiseProvider } from './libs/polkadot/hooks/useApiPromise'
import { NetworkContextProvider } from './libs/polkadot/hooks/useSubstrateNetwork'
import { Web3Provider as PolkadotWeb3Provider } from './libs/polkadot/hooks/useWeb3'
import './ReactToastify.css'
import theme from './theme'
import './tooltip.css'

const WrapApp: React.FC = ({ children }) => {
  const client = useRef(new QueryClient())

  return (
    <QueryClientProvider client={client.current}>
      <EthereumWeb3Provider>
        <JotaiProvider>
          <EthersProvider>
            <NetworkContextProvider defaultNetwork="poc4-dev">
              <PolkadotWeb3Provider originName="ChainBridge Operator">
                <ApiPromiseProvider>
                  <ThemeProvider theme={theme}>
                    <GlobalStyle></GlobalStyle>
                    {children}
                    <ToastContainer transition={Slide}></ToastContainer>
                  </ThemeProvider>
                </ApiPromiseProvider>
              </PolkadotWeb3Provider>
            </NetworkContextProvider>
          </EthersProvider>
        </JotaiProvider>
      </EthereumWeb3Provider>
    </QueryClientProvider>
  )
}

export default WrapApp
