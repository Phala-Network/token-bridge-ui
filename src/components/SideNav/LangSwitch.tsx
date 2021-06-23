import { changeLocale, IntlContext } from 'gatsby-plugin-intl'
import React, { useContext } from 'react'
import styled from 'styled-components'

type Props = {}

const LangSwitchStyles = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  background: #373737;
  padding: 6px;
  width: 46px;
`

const LangSwitchButton = styled.button<{ active: boolean }>`
  background-color: ${(props) =>
    props.active ? props.theme.colors.phala : 'transparent'};
  color: ${(props) => (props.active ? 'black' : '#7A7A7A')};

  border: none;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 8px;
  line-height: 20px;
  height: 20px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.phala};
    color: black;
  }

  &:active {
    opacity: 0.6;
  }
`

const LangSwitch: React.FC<Props> = () => {
  const { locale } = useContext(IntlContext)

  return (
    <LangSwitchStyles>
      <LangSwitchButton
        onClick={() => changeLocale('en')}
        active={locale === 'en'}
      >
        En
      </LangSwitchButton>
      <LangSwitchButton
        onClick={() => changeLocale('zh')}
        active={locale === 'zh'}
      >
        中
      </LangSwitchButton>
    </LangSwitchStyles>
  )
}

export default LangSwitch
