import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './GlobalStyle'
import theme from './theme'
import './fonts.css'

const WrapApp: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>
      {children}
    </ThemeProvider>
  )
}

export default WrapApp
