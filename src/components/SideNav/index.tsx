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
  height: 100vh;
  padding: 60px 30px;
  box-sizing: border-box;
`

const index: React.FC<Props> = (props) => {
  return (
    <Wrap>
      <Logo></Logo>
      <Link>Wallet</Link>
      <Link>Bridge</Link>
      <Link>Darkpool</Link>
      <Link>Tokens</Link>
      <Link>Transactions</Link>
      <Link>Stakepad</Link>
      <Link>KSM Crowdloan</Link>
    </Wrap>
  )
}

export default index
