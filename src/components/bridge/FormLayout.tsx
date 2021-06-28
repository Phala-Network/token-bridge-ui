import React from 'react'
import { StepProps } from './BridgeProcess'

type Props = StepProps

const FormLayout: React.FC<Props> = (props) => {
  const { layout } = props

  return (
    <div style={{ display: layout === 'inline' ? 'flex' : 'block' }}>
      {props.children}
    </div>
  )
}

export default FormLayout
