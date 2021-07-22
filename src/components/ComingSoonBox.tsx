import styled from 'styled-components'

const ComingSoonBox = styled.div`
  user-select: none;
  margin-top: 50px;
  padding: 33px 37px;
  color: #ececec;
  background: #ffffff;
  font-family: Lato;
  font-size: 20px;
  flex: 1;

  div + div {
    margin-top: 14px;
    ${(props) => props.theme.size.sm} {
      margin-top: 6px;
    }
  }

  ${(props) => props.theme.size.sm} {
    margin-top: 12px;
    padding: 21px 24px;
  }
`

export default ComingSoonBox
