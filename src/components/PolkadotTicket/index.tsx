import React from 'react'
import styled from 'styled-components'
import BlockStripe from '../BlockStripe'
import Ticket, {
  DefaultStatus,
  DefaultStatusIcon,
  DefaultStatusName,
} from '../Ticket'

type Props = {}

const index: React.FC<Props> = () => {
  return (
    <Ticket>
      <DefaultStatus>
        <DefaultStatusIcon>
          <svg
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 10.0833V0H5.98L5.98 10.0833H0ZM17.02 0.000162334L17.02 4.12516L11.96 4.12516V10.0832H5.98001V16.0415H11.96L11.96 10.0835H17.94V5.9585H23V0.000162074L17.02 0.000162334ZM0 16.0417V22L23 22V16.0417L0 16.0417Z"
              fill="#03FFFF"
            />
          </svg>
        </DefaultStatusIcon>
        <DefaultStatusName>Connet Khala</DefaultStatusName>
      </DefaultStatus>
    </Ticket>
  )
  // return (
  //   <Ticket
  //     {...{
  //       no: '0xC28C2D8769A20C2002E',
  //       name: 'Phala',
  //       active: true,
  //       bottomContent: (
  //         <BlockStripe
  //           {...{
  //             color: '#ECECEC',
  //             backgroundColor: '#202020',
  //             blockSize: 4,
  //             column: 40,
  //             row: 4,
  //             random: 0.5,
  //           }}
  //         />
  //       ),
  //     }}
  //   />
  // )
}

export default index
