import React from 'react'
import Button from './Button'
import InputAction from './InputAction'
import InputExternalInfo from './InputExternalInfo'
import InputNumber from './InputNumber'
import Modal from './Modal'
import Spacer from './Spacer'

type Props = {}

const TransferModal: React.FC<Props> = (props) => {
  return (
    <div>
      <Modal
        actions={[
          <Button key='submit' type='primary'>
            Submit
          </Button>,
          <Button key='cancel'>Cancel</Button>,
        ]}
        visible={true}
        title='Transfer Modal'>
        <Spacer></Spacer>
        <InputNumber
          size='large'
          placeholder='Address'
          after={<InputAction>MY ADDRESS</InputAction>}></InputNumber>
        <Spacer></Spacer>
        <InputNumber
          size='large'
          placeholder='Amount (PHA)'
          after={<InputAction>MAX</InputAction>}></InputNumber>

        <Spacer y={0.2}></Spacer>

        <InputExternalInfo
          style={{ textAlign: 'right' }}
          {...{
            label: 'Balance',
            value: 1234.56789,
            type: 'PHA',
          }}
        />
      </Modal>
    </div>
  )
}

export default TransferModal
