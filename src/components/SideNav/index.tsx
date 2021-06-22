import React from 'react'
import styled from 'styled-components'
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
      {/* <Link>Darkpool</Link>
      <Link>Tokens</Link>
      <Link>Transactions</Link>
      <Link>Stakepad</Link>
      <Link>KSM Crowdloan</Link> */}
    </Wrap>
  )
}

export default React.memo(SideNav)
