import React from "react"
import PropTypes from "prop-types"
import PageTransition from "gatsby-plugin-page-transitions"
import { Helmet } from "react-helmet"
import "materialize-css/dist/css/materialize.min.css"
import { Typography } from "../styles/Typography.css"
import Footer from "./Footer/footer"
import "./layout.css"
if (typeof window !== "undefined") {
  require("materialize-css/dist/js/materialize.min.js")
}

const LandingLayout = ({ children, pageContext, location, crumbLabel }) => {
  return (
    <>
      <Typography />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Helmet>
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
            {children}
          </main>
          <Footer />
        </div>
      </PageTransition>
    </>
  )
}

LandingLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LandingLayout
