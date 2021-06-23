import React from 'react'
import styled from 'styled-components'
import LangSwitch from './LangSwitch'
import Link from './Link'
import Logo from './Logo'
import bg from './sidebar.jpg'

type Props = {}

const Wrap = styled.div`
  background-image: url(${bg});
  background-size: 100% auto;
  width: 240px;
  padding: 60px 30px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  box-shadow: 12px 16px 0px 0px #cccccc;
`

const SideNav: React.FC<Props> = (props) => {
  return (
    <Wrap>
      <Logo></Logo>
      <Link to="/">Wallet</Link>
      <Link to="/bridge">Bridge</Link>
      <Link to="/">Darkpool</Link>
      <Link to="/">Tokens</Link>
      <Link to="/">Transactions</Link>
      <Link to="/">Stakepad</Link>
      <Link to="/">KSM Crowdloan</Link>

      <LangSwitch></LangSwitch>
    </Wrap>
  )
}

export default React.memo(SideNav)
