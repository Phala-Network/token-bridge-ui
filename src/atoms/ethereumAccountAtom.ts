import { atomWithStorage } from 'jotai/utils'
import { Account } from '../types/normal'

const ethereumAccountAtom = atomWithStorage<Account | undefined>(
  'ethereumAccount',
  undefined
)

export default ethereumAccountAtom
