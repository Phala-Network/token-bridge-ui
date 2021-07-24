import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import Modal from './Modal'
import Button from './Button'
import useAllBalances from '../hooks/useAllBalances'
import { useApiPromise } from '../libs/polkadot/hooks/useApiPromise'
import { useDecimalJsTokenDecimalMultiplier } from '../libs/polkadot/useTokenDecimals'
import { bnToDecimal } from '../libs/polkadot/utils/balances'
import { vest } from '../libs/polkadot/extrinsics/vest'
import { useAtom } from 'jotai'
import polkadotAccountAtom from '../atoms/polkadotAccountAtom'

type Props = {
  visible: boolean
  onClose: () => void
}

const Text = styled.div`
  font-family: Lato;
  font-size: 12px;
  color: #878787;
`

const Info = styled.div`
  font-size: 12px;
  margin-top: 32px;
  font-family: PT Mono;

  span {
    font-family: Lato;
    font-weight: bold;
  }
`

const ClaimModal: React.FC<Props> = ({ visible, onClose }) => {
  const [loading, setLoading] = useState(false)
  const allBalances = useAllBalances()
  const { api } = useApiPromise()
  const polkadotAccount = useAtom(polkadotAccountAtom)[0]?.address
  const decimals = useDecimalJsTokenDecimalMultiplier(api)
  const vestingLocked = useMemo<string>(() => {
    if (allBalances?.vestingLocked && decimals) {
      return bnToDecimal(allBalances.vestingLocked, decimals).toString()
    }
    return ''
  }, [allBalances, decimals])
  const vestedClaimable = useMemo<string>(() => {
    if (allBalances?.vestedClaimable && decimals) {
      return bnToDecimal(allBalances.vestedClaimable, decimals).toString()
    }
    return ''
  }, [allBalances, decimals])

  const confirm = useCallback(() => {
    if (api && polkadotAccount) {
      setLoading(true)
      vest({ api, sender: polkadotAccount })
        .then(() => {
          toast('Success')
          onClose()
        })
        .catch(() => {
          setLoading(false)
        })
    }
  }, [api, polkadotAccount, onClose])

  const canClaim = Boolean(vestedClaimable) && vestedClaimable !== '0'

  return (
    <Modal
      visible={visible}
      onClose={onClose}
      title="Claim PHA"
      actions={[
        <Button onClick={onClose} key="reject">
          Cancel
        </Button>,
        <Button
          disabled={loading || !canClaim}
          onClick={confirm}
          key="confirm"
          type="primary">
          {loading ? 'Confirming' : 'Confirm'}
        </Button>,
      ]}>
      <Text>
        You still have {vestingLocked || '-'} PHA to unlock, now you can unlock{' '}
        {vestedClaimable || '-'} PHA
      </Text>
      {canClaim && (
        <Info>
          <span>Claim now:</span> {vestedClaimable} PHA
        </Info>
      )}
    </Modal>
  )
}

export default ClaimModal
