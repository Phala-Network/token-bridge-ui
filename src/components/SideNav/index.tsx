import React from 'react'
import styled from 'styled-components'
import Spacer from '../Spacer'
import LangSwitch from './LangSwitch'
import Link from './Link'
import Logo from './Logo'
import bg from './sidebar.jpg'

type Props = {}

const SideNavWrap = styled.div`
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Header = styled.div``

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  align-items: flex-start;
`

const ExternalLink = styled.a`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-decoration-line: underline;
  color: #868686;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.phala};
  }
`

const SideNav: React.FC<Props> = (props) => {
  return (
    <SideNavWrap>
      <Header>
        <Logo></Logo>
        <Link to="/">Wallet</Link>
        <Link to="/bridge">Bridge</Link>
        <Link to="/">Darkpool</Link>
        <Link to="/">Tokens</Link>
        <Link to="/">Transactions</Link>
        <Link to="/">Stakepad</Link>
        <Link to="/">KSM Crowdloan</Link>
      </Header>

      <Footer>
        <ExternalLink target="__blank" href="https://polkadot.js.org/">
          Polkadot.js
        </ExternalLink>
        <ExternalLink>Minersboard</ExternalLink>
        <ExternalLink target="__blank" href="https://phala.network">
          Phala.network
        </ExternalLink>
        <Spacer></Spacer>
        <LangSwitch></LangSwitch>
      </Footer>
    </SideNavWrap>
  )
}

export default React.memo(SideNav)
