/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import PageTransition from "gatsby-plugin-page-transitions"
import Helmet from "react-helmet"
import { Typography } from "../styles/Typography.css"
import Header from "../components/Header/Header"
// import Footer from "./footer";
import Footer from "./Footer/footer"
import "./layout.css"

const Layout = ({ children, pageContext, location, crumbLabel }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext
  const customCrumbLabel = crumbLabel
    ? crumbLabel
    : location.pathname.toLowerCase().replace("-", " ")
  const data = useStaticQuery(graphql`
    query SiteTitleQuery1 {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Typography />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <PageTransition>
        <div
          style={{
            margin: `0 auto`,
            // maxWidth: "100vw",
            minHeight: "1000px",
          }}
        >
          <main
            style={{
              margin: `0`,
              minHeight: "100vh",
            }}
          >
            {crumbLabel !== "Home" && (
              <Breadcrumb
                crumbs={crumbs}
                location={location}
                crumbLabel={customCrumbLabel}
              />
            )}

            {children}
          </main>
          <Footer />
        </div>
      </PageTransition>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
