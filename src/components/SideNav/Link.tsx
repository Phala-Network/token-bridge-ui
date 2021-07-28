import React from 'react'
import styled from 'styled-components'
import GatsbyLink from '../GatsbyLink'

type Props = React.ComponentProps<typeof GatsbyLink>

const Wrap = styled(GatsbyLink)`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: #868686;
  padding: 8px 16px;
  margin: 8px 0;
  display: block;
  border: 1px solid transparent;
  cursor: pointer;
  max-width: 120px;
  text-decoration: none;
  transition: all 0.2s linear;
  position: relative;

  &:hover {
    color: #c9c9c9;
  }

  &.active {
    color: ${(props) => props.theme.colors.phala};
  }
`

const Link: React.FC<Props> = (props) => {
  const { children, to } = props

  return (
    <Wrap activeClassName="active" to={to}>
      {children}
    </Wrap>
  )
}

export default Link
