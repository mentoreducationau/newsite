/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import * as React from "react"
import { ThemeProvider } from "styled-components"
import theme from "./src/constant/theme"
// import GlobalStyles from "./src/styles/GlobalStyles.css"
// import { Typography } from "./src/styles/Typography.css"
import "gatsby-plugin-breadcrumb/gatsby-plugin-breadcrumb.css"
import "react-accessible-accordion/dist/fancy-example.css"
import { ActiveMenuProvider } from "./src/hooks/ActiveMenu"

const App = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      {/* // <GlobalStyles />
      <Typography />  */}
      <ActiveMenuProvider>{element}</ActiveMenuProvider>
    </ThemeProvider>
  )
}

export const wrapRootElement = ({ element }) => {
  return <App element={element} />
}
