import { IntlContext } from 'gatsby-plugin-intl'
import React, { useContext } from 'react'

type Props = {}

const LangSwitch: React.FC<Props> = (props) => {
  const { locale } = useContext(IntlContext)

  return <div>{locale}</div>
}

export default LangSwitch
