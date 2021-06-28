import React from 'react'
import styled from 'styled-components'
import Ticket from './Ticket'
import BlockStripe from './BlockStripe'
import Spacer from './Spacer'

type Props = {}

const TicketsRoot = styled.div`
  padding: 50px;
`

const TicketsInner = styled.div`
  position: fixed;
  top: 24px;
  z-index: 0;
`

const Tickets: React.FC<Props> = () => {
  return (
    <TicketsRoot>
      <TicketsInner>
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
            name: <div style={{ fontSize: 8 }}>Ethereum</div>,
            active: false,
            bottomContent: (
              <div>
                <span>442,236,966</span>
              </div>
            ),
          }}></Ticket>
      </TicketsInner>
    </TicketsRoot>
  )
}

export default Tickets
