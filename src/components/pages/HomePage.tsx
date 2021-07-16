import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import ComingSoonBox from '../ComingSoonBox'
import BalanceCard from '../BalanceCard'
import { BlackHeader } from '../BalanceCard/Header'
import Category from '../Category'
import BaseLayout from '../BaseLayout'
import KhalaIcon from '../../icons/khala.svg'
import EthereumIcon from '../../icons/ethereum.svg'

type Props = {}

const COMING_SOON_CATEGORIES: string[] = ['Parachain Assets', 'Bridge Assets']

const ContentWrapper = styled.div`
  padding-top: 56px;
  margin-left: 50px;
  flex: 1;
  border-left: 1px solid #cccccc;
  min-height: 100vh;
  box-sizing: border-box;
`

const HomePage: React.FC<Props> = () => {
  return (
    <BaseLayout>
      <Helmet>
        <title>Wallet</title>
      </Helmet>
      <ContentWrapper>
        <Category title="Phala" description={'Total: 372.6 PHA '}>
          {/* FIXME: balance can be preset with name and icon */}
          <BalanceCard
            themeType="white"
            header={
              <BlackHeader>
                <EthereumIcon width="24" height="24" />
                Ethereum
              </BlackHeader>
            }
            balance={0}
            disableTransfer
            disableConvert></BalanceCard>
          <BalanceCard
            themeType="white"
            header={
              <BlackHeader>
                <KhalaIcon width="24" height="24" />
                Khala
              </BlackHeader>
            }
            balance={0}
            disableTransfer
            disableConvert></BalanceCard>
        </Category>
        {COMING_SOON_CATEGORIES.map((category) => (
          <Category title={category} key={category}>
            <ComingSoonBox>
              <div style={{ fontWeight: 'bold' }}>{category}</div>
              <div>Coming Soon</div>
            </ComingSoonBox>
          </Category>
        ))}
      </ContentWrapper>
    </BaseLayout>
  )
}

export default HomePage
