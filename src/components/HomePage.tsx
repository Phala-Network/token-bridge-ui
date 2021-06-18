import React from 'react'
import BalanceCard from './BalanceCard'
import { PrimaryHeader } from './BalanceCard/Header'
import SideNav from './SideNav'
import Category from './Category'
import styled from 'styled-components'
import Ticket from './Ticket'
import BlockStripe from './BlockStripe'
import Spacer from './Spacer'

type Props = {}

const HomePageWrap = styled.div`
  padding-left: 230px;
  display: flex;
`

const Tickets = styled.div`
  padding: 80px 50px;
`

const HomePage: React.FC<Props> = (props) => {
  const card = (
    <BalanceCard
      {...{
        balance: 888.8888,
        themeType: 'black',
        header: <PrimaryHeader>ePHA</PrimaryHeader>,
      }}
    />
  )

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
          }}></Ticket>
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
          }}></Ticket>
      </Tickets>

      <div>
        <Category title='Title1' description={'description'}>
          {card}
          {card}
          {card}
          {card}
          {card}
          {card}
          {card}
        </Category>
        <Category title='Title2' description='description'>
          {card}
          {card}
          {card}
          {card}
          {card}
        </Category>
        <Category title='Title3' description='description'>
          {card}
        </Category>
      </div>
    </HomePageWrap>
  )
}

export default HomePage
