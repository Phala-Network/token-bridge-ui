import React from 'react'
import styled from 'styled-components'

const Point = styled.div`
  width: 12px;
  height: 12px;
  background: #202020;
  border: 10px solid #ececec;
  ${(props) => props.theme.size.sm} {
    display: none;
  }
`

const CategoryWrap = styled.div`
  position: relative;
  padding: 16px 48px 40px 160px;
  ${(props) => props.theme.size.sm} {
    padding: 16px 24px;
  }
`

const CategoryHeader = styled.div`
  display: flex;
  position: absolute;
  left: -16px;
  top: 0;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  color: #202020;
  ${(props) => props.theme.size.sm} {
    font-size: 14px;
    position: unset;
  }
`

const Title = styled.div`
  margin-top: 10px;
  ${(props) => props.theme.size.sm} {
    margin-top: 0;
  }
`

const Description = styled.div`
  margin-top: 8px;
  ${(props) => props.theme.size.sm} {
    font-size: 12px;
  }
`

const CategoryContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: -50px;
  ${(props) => props.theme.size.sm} {
    margin-top: 0;
  }
`

type Props = {
  title?: string
  description?: string
}

const Category: React.FC<Props> = (props) => {
  const { children, title, description } = props

  return (
    <CategoryWrap>
      <CategoryHeader>
        <Point></Point>
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
      </CategoryHeader>
      <CategoryContent>{children}</CategoryContent>
    </CategoryWrap>
  )
}

export default Category
