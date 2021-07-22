import { Link as GatsbyLink } from 'gatsby-plugin-intl'
import React from 'react'
import styled from 'styled-components'

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

  &:hover,
  &.active {
    color: ${(props) => props.theme.colors.phala};
    border: 1px solid ${(props) => props.theme.colors.phala};
    box-shadow: 4px 4px 0px ${(props) => props.theme.colors.phala};
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
