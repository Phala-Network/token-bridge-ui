import styled from 'styled-components'

export const Header = styled.div`
  font-family: Lato;
  height: 24px;
  padding: 0 8px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
`

export const BlackHeader = styled(Header)`
  background-color: #202020;
  color: #ffffff;
`

export const WhiteHeader = styled(Header)`
  background-color: #ffffff;
  color: #202020;
`

export const PrimaryHeader = styled(Header)`
  background-color: #d1ff52;
  color: #202020;
`
