import { atomWithStorage } from 'jotai/utils'
import { TransactionInfo } from '../types/normal'

const transactionsAtom = atomWithStorage<TransactionInfo[]>('transactions', [])

export default transactionsAtom
