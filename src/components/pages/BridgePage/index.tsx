import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'
import Announcement, { AnnouncementLink } from '../../Announcement'
import InputDataStep, { InputDataStepResult } from '../../bridge/InputDataStep'
import SubmitStepModal from '../../bridge/SubmitStep/SubmitStepModal'
import Transactions from '../../transactions/Transactions'
import WhiteCard from '../../WhiteCard'

const RightContent = styled.div`
  display: grid;
  grid-gap: 30px;
  padding: 48px;
  width: 100%;
  box-sizing: border-box;

  ${down('md')} {
    padding: 20px;
  }

  ${down('sm')} {
    padding: 0 0 20px 0;
  }
`

const BridgePage: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [submitData, setSubmitData] = useState<InputDataStepResult>()

  const showSubmitModal = (data: InputDataStepResult) => {
    setSubmitData(data)
    setModalVisible(true)
  }

  return (
    <>
      <Helmet>
        <title>Phala App</title>
      </Helmet>
      <RightContent>
        <Announcement>
          Technical upgrade and maintenance, temporarily unavailable.You can
          contact us on{' '}
          <AnnouncementLink
            target="_blank"
            href="https://discord.com/invite/kpYj9GWjwN">
            Discord
          </AnnouncementLink>
          .
        </Announcement>
        <WhiteCard>
          <InputDataStep layout={'flex'} onNext={showSubmitModal} />

          <SubmitStepModal
            setModalVisible={setModalVisible}
            visible={modalVisible}
            submitData={submitData}
          />
        </WhiteCard>

        <Transactions />
      </RightContent>
    </>
  )
}

export default BridgePage
