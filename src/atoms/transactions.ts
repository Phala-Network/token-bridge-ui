import { atomWithStorage } from 'jotai/utils'

const transactionsAtom = atomWithStorage<any[] | undefined>('transactions', [])

export default transactionsAtom
