import styled from 'styled-components'
import { useAtom } from 'jotai'
import ethereumAccountAtom from '../../atoms/ethereumAccountAtom'
import EthereumIcon from '../../icons/ethereum.svg'
import abridgeString from '../../utils/abridgeString'

const Wrapper = styled.div`
  display: flex;
  color: #92a5ff;
  align-items: center;
  font-family: PT Mono;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 0.07em;
`

const MobileEthereumTicket: React.FC = () => {
  const [ethereumAccount] = useAtom(ethereumAccountAtom)
  const address = ethereumAccount?.address

  if (!address) return null

  return (
    <Wrapper>
      <EthereumIcon width="24" height="24"></EthereumIcon>
      {abridgeString(address)}
    </Wrapper>
  )
}

export default MobileEthereumTicket
