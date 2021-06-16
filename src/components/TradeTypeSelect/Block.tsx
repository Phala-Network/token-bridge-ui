import styled from 'styled-components'
import { Property } from 'csstype'
import { ComponentProps } from 'react'
import Select from './Select'

const BlockWrap = styled.div<{ backgroundColor?: Property.BackgroundColor }>`
  padding: 16px;
  width: 100%;
  background: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  width: 100px;
  color: #202020;
`

const Divider = styled.div`
  width: 0.5px;
  height: 31px;
  background: #202020;
  opacity: 0.2;
`

type Props = { title: string } & ComponentProps<typeof BlockWrap>

const Block: React.FC<Props> = (props) => {
  const { backgroundColor, title } = props

  return (
    <BlockWrap backgroundColor={backgroundColor}>
      <Title>{title}</Title>
      <Select></Select>
      <Divider></Divider>
      <Select></Select>
    </BlockWrap>
  )
}

export default Block
