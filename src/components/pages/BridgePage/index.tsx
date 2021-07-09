import React, { useState } from 'react'
import BaseLayout from '../../BaseLayout'
import WhiteCard from '../../WhiteCard'
import { Helmet } from 'react-helmet'
import Announcement from '../../Announcement'
import styled from 'styled-components'
import InputDataStep, { InputDataStepResult } from '../../bridge/InputDataStep'
import Modal from '../../Modal'
import SubmitStep from '../../bridge/SubmitStep'

type Props = {}

const RightContent = styled.div`
  display: grid;
  grid-gap: 30px;
  padding: 48px;
  width: 100%;
`

const BridgePage: React.FC<Props> = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [submitData, setSubmitData] = useState<InputDataStepResult>()

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
      </RightContent>
    </BaseLayout>
  )
}

export default BridgePage
