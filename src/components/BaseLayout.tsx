import React from 'react'
import SideNav from './SideNav'
import styled from 'styled-components'
import Tickets from './Tickets'
import MobileNav from './MobileNav'

type Props = {}

const HomePageWrap = styled.div`
  padding-left: 230px;
  display: flex;
  ${(props) => props.theme.size.sm} {
    display: block;
    padding-left: 0;
    padding-top: 40px;
  }
`

const Sider = styled.div`
  ${(props) => props.theme.size.sm} {
    display: none;
  }
`

const BaseLayout: React.FC<Props> = (props) => {
  const { children } = props

  return (
    <HomePageWrap>
      <Sider>
        <SideNav></SideNav>
        <Tickets></Tickets>
      </Sider>

      {children}

      <MobileNav />
    </HomePageWrap>
  )
}

export default BaseLayout
