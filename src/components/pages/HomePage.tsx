import React from 'react'
import BalanceCard from '../BalanceCard'
import { PrimaryHeader, WhiteHeader } from '../BalanceCard/Header'
import Category from '../Category'
import styled from 'styled-components'
import BaseLayout from '../BaseLayout'

type Props = {}

const HomePage: React.FC<Props> = () => {
  const card = (
    <BalanceCard
      {...{
        balance: 888.8888,
        themeType: 'black',
        header: <PrimaryHeader>ePHA</PrimaryHeader>,
      }}
    />
  )

  const card1 = (
    <BalanceCard
      {...{
        balance: 12345.6789,
        themeType: 'black',
        header: <WhiteHeader>GRAPH</WhiteHeader>,
      }}
    ></BalanceCard>
  )

  return (
    <BaseLayout>
      <Category title="Title1" description={'Total: 372.6 PHA '}>
        {card}
        {card}
        {card}
        {card}
        {card}
        {card}
        {card}
      </Category>
      <Category title="Title2" description="description">
        {card1}
        {card1}
        {card1}
        {card1}
      </Category>
      <Category title="Title3" description="description">
        {card1}
        {card}
      </Category>
      <Category title="Title4" description="description">
        {card}
      </Category>
    </BaseLayout>
  )
}

export default HomePage
