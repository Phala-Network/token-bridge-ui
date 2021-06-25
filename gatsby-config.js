/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require('path')

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/i18n`,
        languages: [`en`, `zh`],
        defaultLanguage: `en`,
        redirect: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-E0PDMEJQ0T'],
      },
    },
  ],
}