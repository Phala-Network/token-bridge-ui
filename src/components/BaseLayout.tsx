import React from 'react'
import SideNav from './SideNav'
import styled from 'styled-components'
import Tickets from './Tickets'

type Props = {}

const HomePageWrap = styled.div`
  padding-left: 230px;
  display: flex;
`

const BaseLayout: React.FC<Props> = (props) => {
  const { children } = props

  return (
    <HomePageWrap>
      <SideNav></SideNav>
      <Tickets></Tickets>

      {children}
    </HomePageWrap>
  )
}

export default BaseLayout
