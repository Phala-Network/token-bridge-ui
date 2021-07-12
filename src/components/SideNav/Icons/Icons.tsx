import React from 'react'
import styled from 'styled-components'
import Discord from './Discord'
import Feedback from './Feedback'

const IconsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  transform-origin: left center;

  svg {
    fill: gray;

    &:hover {
      fill: ${(props) => props.theme.colors.phala};
      cursor: pointer;
    }
  }
`

const Icons: React.FC<React.ComponentProps<typeof IconsWrap>> = (props) => {
  return (
    <IconsWrap {...props}>
      <Feedback></Feedback>
      <Discord></Discord>
    </IconsWrap>
  )
}

export default Icons
