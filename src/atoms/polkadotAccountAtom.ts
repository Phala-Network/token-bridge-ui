import { atomWithStorage } from 'jotai/utils'

const polkadotAccountAtom = atomWithStorage<string | undefined>(
  'polkadotAccount',
  undefined
)

export default polkadotAccountAtom
