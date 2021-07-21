import { atomWithStorage } from 'jotai/utils'

const transactionsAtom = atomWithStorage<any[]>('transactions', [])

export default transactionsAtom
