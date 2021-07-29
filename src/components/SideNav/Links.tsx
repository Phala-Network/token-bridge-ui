import React from 'react'
import { isDev } from '../../utils/isDev'
import { isTest } from '../../utils/isTest'
import ActiveOutline from './ActiveOutline'
import Link from './Link'

const Links: React.FC = () => {
  return (
    <div id="navLinks" style={{ position: 'relative', paddingTop: 1 }}>
      <ActiveOutline />

      <Link to="/">Assets</Link>
      {(isDev() || isTest()) && <Link to="/bridge/">Bridge</Link>}

      {/* <Link to="/darkpool">Darkpool</Link> */}
      {/* <Link to="/tokens">Tokens</Link> */}
      {/* <Link to="/transactions">Transactions</Link> */}
      {/* <Link to="/stakepad">Stakepad</Link> */}
      {/* <Link to="/crowdloan">KSM Crowdloan</Link> */}
    </div>
  )
}

export default Links
