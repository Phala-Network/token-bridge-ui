import { Decimal } from 'decimal.js'
import { useAtom } from 'jotai'
import React, { useMemo } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import polkadotAccountAtom from '../../atoms/polkadotAccountAtom'
import { useBalance } from '../../hooks/useBalance'
// import EthereumIcon from '../../icons/ethereum.svg'
import usePHAPrice from '../../hooks/usePHAPrice'
import KhalaIcon from '../../icons/khala.svg'
import BalanceCard from '../BalanceCard'
import { BlackHeader } from '../BalanceCard/Header'
import BaseLayout from '../BaseLayout'
import Category from '../Category'
import ComingSoonBox from '../ComingSoonBox'

const COMING_SOON_CATEGORIES: string[] = ['Parachain Assets', 'Bridge Assets']

const ContentWrapper = styled.div`
  padding-top: 56px;
  margin-left: 50px;
  flex: 1;
  border-left: 1px solid #cccccc;
  min-height: 100vh;
  box-sizing: border-box;

  ${(props) => props.theme.size.sm} {
    padding-top: 0;
    margin-left: 0;
    border-left: none;
    min-height: initial;
  }
`

const HomePage: React.FC = () => {
  const PHAPrice = usePHAPrice()
  const [polkadotAccount] = useAtom(polkadotAccountAtom)
  const polkadotAccountAddress = polkadotAccount?.address
  const polkadotAccountBalance = useBalance(polkadotAccountAddress)

  // NOTE: copied from InputDataStep.tsx
  const polkadotAccountBalanceNumber = useMemo<Decimal | undefined>(
    () =>
      polkadotAccountBalance &&
      new Decimal(polkadotAccountBalance.toString()).div(10 ** 12),
    [polkadotAccountBalance]
  )

  // const totalBalanceNumber = polkadotAccountBalanceNumber || 0

  return (
    <BaseLayout>
      <Helmet>
        <title>Phala App</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Helmet>
      <ContentWrapper>
        <Category
          title="Phala"
          // description={`Total: ${totalBalanceNumber} PHA`}
        >
          {/* FIXME: balance can be preset with name and icon */}
          {/* <BalanceCard
            themeType="white"
            header={
              <BlackHeader>
                <EthereumIcon width="24" height="24" />
                Ethereum
              </BlackHeader>
            }
            balance={ethereumAccountBalanceNumber}
            disableTransfer
            disableBridge
            disableConvert
            dollar={ethereumAccountBalanceNumber * PHAPrice}></BalanceCard> */}
          <BalanceCard
            themeType="white"
            header={
              <BlackHeader>
                <KhalaIcon width="24" height="24" />
                K-PHA
              </BlackHeader>
            }
            balance={polkadotAccountBalanceNumber}
            disableTransfer
            disableBridge
            disableConvert
            dollar={polkadotAccountBalanceNumber?.mul(PHAPrice)}></BalanceCard>
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
