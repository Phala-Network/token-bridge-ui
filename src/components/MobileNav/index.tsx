import React from 'react'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import MobilePolkadotTicker from './MobilePolkadotTicket'
import PhalaIcon from '../../icons/phala_icon.svg'
import background from './mobile_nav_background.png'
import useSSR from '../../hooks/useSSR'

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  background-color: #101010;
  background-image: url(${background});
  justify-content: space-between;
  align-items: center;
  padding-right: 8px;
  ${up('md')} {
    display: none;
  }
`

const MobileNav: React.FC = () => {
  const { isBrowser } = useSSR()
  return (
    <Wrapper>
      <PhalaIcon></PhalaIcon>
      {isBrowser && <MobilePolkadotTicker></MobilePolkadotTicker>}
    </Wrapper>
  )
}

export default MobileNav
