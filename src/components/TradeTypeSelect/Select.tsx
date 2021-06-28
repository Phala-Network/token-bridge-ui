import React, { useState } from 'react'
import styled from 'styled-components'
import Backdrop from '../Backdrop'
import SelectIcon from './SelectIcon'

const SelectBodyWrap = styled.div`
  grid-gap: 20px;
  top: -8px;
  position: absolute;
  background-color: white;
  height: 392px;
  width: 168px;
  padding: 8px;
  z-index: 10000;
  animation: boxShadowKeyframes 0.15s forwards;

  @keyframes boxShadowKeyframes {
    to {
      box-shadow: 16px 16px 0px rgba(0, 0, 0, 0.3);
    }
  }
`

const SelectBody = styled.div`
  overflow-y: auto;
  height: 100%;
  display: grid;
  grid-gap: 20px;

  ::-webkit-scrollbar {
    width: 3px;
    background-color: #ececec;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0;
    background-color: #000000;
  }
`

const Value = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #202020;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;
  position: relative;
`

const SelectItem = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 8px;
  cursor: pointer;
  padding: 0 8px;

  &:hover {
    background-color: ${(props) => props.theme.colors.phala};
  }
`

const SelectWrap = styled.div`
  position: relative;
`

type Props = {
  onChange?: (value: any) => void
}

const Select: React.FC<Props> = (props) => {
  const { onChange } = props
  const [value, setValue] = useState('')
  const [visible, setVisible] = useState(false)
  const selectItems = [
    'USDT',
    'BTC',
    'ETH',
    'HT',
    'EOS',
    'BCH',
    'XRP',
    'LTC',
    'HUSD',
    'ETC',
    'BSV',
    'DASH',
    'LINK',
    'DOT',
    'FIL',
    'TRX',
    'ZEC',
    'ADA',
    'NEO',
    'XLM',
    'XMR',
    'VET',
    'DOGE',
    'YFI',
    'UNI',
    'ALGO',
    'XTZ',
  ]

  return (
    <SelectWrap>
      <Value onClick={() => setVisible(true)}>
        <span>{value || 'Select'}</span> <SelectIcon></SelectIcon>
      </Value>

      <Backdrop onClick={() => setVisible(false)} visible={visible}></Backdrop>

      {visible && (
        <SelectBodyWrap>
          <SelectBody>
            {selectItems.map((item) => {
              return (
                <SelectItem
                  onClick={() => {
                    setValue(item)
                    onChange?.(item)
                    setVisible(false)
                  }}
                  key={item}>
                  {item}
                </SelectItem>
              )
            })}
          </SelectBody>
        </SelectBodyWrap>
      )}
    </SelectWrap>
  )
}

export default Select
