import React from 'react'
import Ticket, {
  DefaultStatus,
  DefaultStatusIcon,
  DefaultStatusName,
} from '../Ticket'
import logoImage from './logo.png'

type Props = {}

const index: React.FC<Props> = (props) => {
  return (
    <Ticket
      cover={
        <DefaultStatus>
          <DefaultStatusIcon>
            <img src={logoImage} alt="" />
          </DefaultStatusIcon>
          <DefaultStatusName>Connet METAMASK</DefaultStatusName>
        </DefaultStatus>
      }></Ticket>
  )
  // return (
  //   <Ticket
  //     {...{
  //       no: '0xC28C2D8769A20C2002E',
  //       name: <div style={{ fontSize: 8 }}>Ethereum</div>,
  //       active: false,
  //       bottomContent: (
  //         <div>
  //           <span>442,236,966</span>
  //         </div>
  //       ),
  //     }}
  //   />
  // )
}

export default index
