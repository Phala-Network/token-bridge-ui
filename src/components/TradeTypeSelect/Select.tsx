import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from '../Modal'
import SelectIcon from './SelectIcon'

const SelectBody = styled.div`
  overflow-y: auto;
  height: 100%;
  display: grid;
  grid-gap: 20px;

  ::-webkit-scrollbar {
    width: 6px;
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
  width: 100px;
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
    background-color: #d1ff52;
  }
`

type Props = {
  onChange?: (value: any) => void
}

const Select: React.FC<Props> = (props) => {
  const { onChange } = props
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
    <div>
      <Value onClick={() => setVisible(true)}>
        <span>Select</span> <SelectIcon></SelectIcon>
      </Value>
      <Modal
        bodyStyle={{ height: 392, width: 168, padding: 8 }}
        onClose={() => setVisible(false)}
        visible={visible}>
        <SelectBody>
          {selectItems.map((item) => {
            return (
              <SelectItem
                onClick={() => {
                  onChange?.(item)
                  setVisible(false)
                }}
                key={item}>
                {item}
              </SelectItem>
            )
          })}
        </SelectBody>
      </Modal>
    </div>
  )
}

export default Select
