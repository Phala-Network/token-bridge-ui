import React from 'react'
import styled from 'styled-components'
import { TransactionInfo } from '../../../types/normal'
import Alert from '../../Alert'
import BaseInfo from '../../bridge/SubmitStep/BaseInfo'
import Spacer from '../../Spacer'

type Props = {
  transactionInfo: TransactionInfo
}

const Link = styled.a`
  text-decoration: underline;
  color: black;
`

const ResultStepToKhala: React.FC<Props> = (props) => {
  const { transactionInfo } = props

  const link = `https://kovan.etherscan.io/tx/${transactionInfo.hash}`

  return (
    <>
      <BaseInfo layout={'block'} data={transactionInfo} />

      <Spacer></Spacer>

      <Alert>
        <div>
          <Link href={link} target="_blank">
            Ethereum transaction
          </Link>{' '}
          is broadcasting, please check your Khala’s PHA balance later. It may
          take 2~10 minutes.
        </div>
      </Alert>
    </>
  )
}

export default ResultStepToKhala
