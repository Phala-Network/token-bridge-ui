import React from 'react'
import styled from 'styled-components'

type Props = {
  no: string
  bottomContent: React.ReactNode
  active: boolean
  name: string
}

const Root = styled.div`
  width: 56px;
  height: 200px;
  background: #202020;
  position: relative;
`

const No = styled.div`
  color: #ececec;
  font-weight: 700;
  text-align: right;
  font-size: 10px;
`

const Content = styled.div`
  align-items: flex-end;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: Lato;
  height: 56px;
  left: -72px;
  padding: 12px;
  position: absolute;
  top: 72px;
  transform-origin: center center;
  transform: rotate(-90deg);
  width: 200px;
`

const Name = styled.div<{ active: boolean }>`
  position: absolute;
  width: 46px;
  height: 16px;
  left: 5px;
  bottom: 5px;
  background: ${(props) => (props.active ? '#d1ff52' : '#878787')};
  line-height: 16px;
  font-family: Orbitron;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.07em;
  color: #000000;
`

const Ticket: React.FC<Props> = (props) => {
  const { no, bottomContent, active = false, name } = props

  return (
    <Root>
      <Content>
        <No>
          {no?.slice(0, 4)}...{no?.slice(-8)}
        </No>
        <div style={{ marginTop: 4 }}>{bottomContent}</div>
      </Content>
      {name && <Name active={active}>{name}</Name>}
    </Root>
  )
}

export default Ticket
