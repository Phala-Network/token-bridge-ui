import React from 'react'
import Ticket from '../Ticket'

type Props = {}

const index: React.FC<Props> = (props) => {
  return (
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
      }}
    />
  )
}

export default index
