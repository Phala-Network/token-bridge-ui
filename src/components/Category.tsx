import React from 'react'
import styled from 'styled-components'

const Point = styled.div`
  width: 12px;
  height: 12px;
  background: #202020;
  border: 10px solid #ececec;
`

const CategoryWrap = styled.div`
  border-left: 1px solid #cccccc;
  position: relative;
  padding: 0 0 40px 200px;
`

const CategoryHeader = styled.div`
  display: flex;
  position: absolute;
  left: -16px;
  top: 80px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  color: #202020;
`

const Title = styled.div`
  margin-top: 10px;
`

const Description = styled.div`
  margin-top: 8px;
`

const CategoryContent = styled.div`
  display: flex;
  flex-wrap: wrap;
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
