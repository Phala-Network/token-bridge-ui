import { Link } from 'gatsby'
import { IntlContextConsumer } from 'gatsby-plugin-intl'
import { FC } from 'react'

// https://github.com/wiziple/gatsby-plugin-intl/blob/master/src/link.js
// create the link component with the intl context,
// instead of using the default link component because it will crash
// if the intl context is not available
const GatsbyLink: FC<any> = ({ to, language, children, onClick, ...rest }) => (
  <IntlContextConsumer>
    {(intl: { language: any; routed: any }) => {
      const languageLink = language || intl?.language
      const link = intl?.routed || language ? `/${languageLink}${to}` : `${to}`

      const handleClick = (e: any) => {
        if (language) {
          localStorage.setItem('gatsby-intl-language', language)
        }
        if (onClick) {
          onClick(e)
        }
      }

      return (
        <Link {...rest} to={link} onClick={handleClick}>
          {children}
        </Link>
      )
    }}
  </IntlContextConsumer>
)

export default GatsbyLink
