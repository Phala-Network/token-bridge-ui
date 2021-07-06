import React from 'react'
import BlockStripe from '../BlockStripe'
import Ticket from '../Ticket'

type Props = {}

const index: React.FC<Props> = () => {
  return (
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
    />
  )
}

export default index
