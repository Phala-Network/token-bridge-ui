import React, { useState } from 'react'
import BaseLayout from '../../BaseLayout'
import WhiteCard from '../../WhiteCard'
import { Helmet } from 'react-helmet'
import Announcement from '../../Announcement'
import styled from 'styled-components'
import InputDataStep, { InputDataStepResult } from '../../bridge/InputDataStep'
import Modal from '../../Modal'
import SubmitStep from '../../bridge/SubmitStep'
import useSentry from '../../../hooks/useSentry'
import SubmitStep2 from '../../bridge/SubmitStep2'

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
            {submitData?.to.network === 'ethereum' && (
              <SubmitStep
                data={submitData}
                onPrev={() => setModalVisible(false)}
                onSubmit={onSubmit}
              />
            )}
            {submitData?.to.network === 'phala' && (
              <SubmitStep2
                data={submitData}
                onPrev={() => setModalVisible(false)}
                onSubmit={onSubmit}
              />
            )}
          </Modal>
        </WhiteCard>
      </RightContent>
    </BaseLayout>
  )
}

export default BridgePage
