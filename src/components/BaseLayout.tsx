import React from 'react'
import SideNav from './SideNav'
import styled from 'styled-components'
import { up, down } from 'styled-breakpoints'
import Tickets from './Tickets'
import MobileNav from './MobileNav'

type Props = {}

const HomePageWrap = styled.div`
  ${up('md')} {
    display: flex;
    padding-left: 230px;
  }

  ${down('sm')} {
    display: block;
    padding-top: 40px;
  }
`

const Sider = styled.div`
  ${down('sm')} {
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
