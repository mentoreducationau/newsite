import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import PageTransition from "gatsby-plugin-page-transitions"
import { Helmet } from "react-helmet"
import { Typography } from "../../../styles/Typography.css"
import Footer from "../../Footer/footer"
import "../../layout.css"
import SessionHeader from "./SessionHeader"

const SessionLayout = ({ children, pageContext, location, crumbLabel, background, sessionData, status }) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery4 {
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
      <SessionHeader siteTitle={data.site.siteMetadata.title} background={background} sessionData={sessionData} status={status} />
   
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
            {children}
          </main>
          <Footer />
        </div>
   
    </>
  )
}

SessionLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SessionLayout
