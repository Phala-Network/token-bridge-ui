import React from 'react'
import GlobalStyle from './GlobalStyle'

const WrapApp: React.FC = ({ children }) => {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      {children}
    </div>
  )
}

export default WrapApp
