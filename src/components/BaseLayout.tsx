import React from 'react'
import Ticket from './Ticket'
import BlockStripe from './BlockStripe'
import Spacer from './Spacer'
import SideNav from './SideNav'
import styled from 'styled-components'

type Props = {}

const HomePageWrap = styled.div`
  padding-left: 230px;
  display: flex;
`

const Tickets = styled.div`
  padding: 80px 50px;
`

const BaseLayout: React.FC<Props> = (props) => {
  const { children } = props

  return (
    <HomePageWrap>
      <SideNav></SideNav>
      <Tickets>
        <Ticket
          {...{
            no: '0xC28C2D8769A20C2002E',
            name: 'Phala',
            active: true,
            bottomContent: (
              <BlockStripe
                {...{
                  color: '#ECECEC',
                  backgroundColor: '#202020',
                  blockSize: 4,
                  column: 40,
                  row: 4,
                  random: 0.5,
                }}
              />
            ),
          }}
        ></Ticket>
        <Spacer y={2}></Spacer>
        <Ticket
          {...{
            no: '0xC28C2D8769A20C2002E',
            name: 'Ethereum',
            active: false,
            bottomContent: (
              <div>
                <span>442,236,966</span>
              </div>
            ),
          }}
        ></Ticket>
      </Tickets>

      <div>{children}</div>
    </HomePageWrap>
  )
}

export default BaseLayout
