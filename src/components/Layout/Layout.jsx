import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import Header from "../Header/Header"
import "./layout.css"
import FooterNew from "../Footer/footerNew"
import GlobalStyles from "../../styles/GlobalStyles.css"
import { Typography } from "../../styles/Typography.css"

const Layout = ({ children, pageContext, location, crumbLabel }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext
  const customCrumbLabel = crumbLabel
    ? crumbLabel
    : location.pathname.toLowerCase().replace("-", " ")
  console.log(location, crumbs, customCrumbLabel)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <Typography />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>
          <Breadcrumb
            crumbs={crumbs}
            location={location}
            crumbLabel={customCrumbLabel}
          />
          {children}
        </main>
        <FooterNew />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
