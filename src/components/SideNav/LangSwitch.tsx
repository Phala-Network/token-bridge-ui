import { changeLocale, IntlContext } from 'gatsby-plugin-intl'
import React, { useContext } from 'react'
import styled from 'styled-components'

type Props = {}

const LangSwitchStyles = styled.div`
  display: grid;
  grid-gap: 6px;
  grid-template-columns: repeat(2, 1fr);
  background: #373737;
  padding: 5px;
`

const LangSwitchButton = styled.button<{ active: boolean }>`
  background-color: ${(props) =>
    props.active ? props.theme.colors.phala : 'transparent'};
  color: ${(props) => (props.active ? 'black' : '#7A7A7A')};

  border: none;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 26px;
  height: 26px;
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
