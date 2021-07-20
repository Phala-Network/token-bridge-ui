import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import useSentry from '../../../hooks/useSentry'
import Announcement from '../../Announcement'
import BaseLayout from '../../BaseLayout'
import InputDataStep, { InputDataStepResult } from '../../bridge/InputDataStep'
import SubmitStep from '../../bridge/SubmitStep'
import Modal from '../../Modal'
import Transactions from '../../transactions/Transactions'
import WhiteCard from '../../WhiteCard'

const RightContent = styled.div`
  display: grid;
  grid-gap: 30px;
  padding: 48px;
  width: 100%;
`

const BridgePage: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [submitData, setSubmitData] = useState<InputDataStepResult>()
  useSentry()

  const showSubmitModal = (data: InputDataStepResult) => {
    setModalVisible(true)
    setSubmitData(data)
  }

  const onSubmit = () => {
    setModalVisible(false)
  }

  return (
    <BaseLayout>
      <Helmet>
        <title>Bridge</title>
      </Helmet>
      <RightContent>
        <Announcement></Announcement>

        <WhiteCard>
          <InputDataStep layout={'inline'} onNext={showSubmitModal} />

          <Modal visible={modalVisible} title="Bridge Modal">
            <SubmitStep
              data={submitData}
              onPrev={() => setModalVisible(false)}
              onSubmit={onSubmit}
            />
          </Modal>
        </WhiteCard>

        <Transactions></Transactions>
      </RightContent>
    </BaseLayout>
  )
}

export default BridgePage
