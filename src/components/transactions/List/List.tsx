import styled from 'styled-components'
import scrollbar from '../../../style/scrollbar'
import Item, { TransactionsListItemProps } from './Item'

type Props = {
  transactions: TransactionsListItemProps[]
}

const TransactionsListRoot = styled.div`
  ${scrollbar}
  margin-top: 6px;
  margin-right: 16px;
  height: 136px;
  overflow-y: scroll;
  opacity: 0;
  animation: 0.35s linear 0.15s opacity both;

  @keyframes opacity {
    to {
      opacity: 1;
    }
  }
`

const TransactionsList: React.FC<Props> = (props) => {
  const { transactions } = props

  return (
    <TransactionsListRoot>
      {transactions.map((transaction, index) => {
        return <Item {...transaction} key={index} />
      })}
    </TransactionsListRoot>
  )
}

export default TransactionsList
