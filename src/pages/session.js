import * as React from "react"
import Seo from "../components/Seo/Seo"
import Layout from "../components/layout"
import SessionTemplate from "../templates/SessionTemplate"

const SessionPage = ({ pageContext, location }) => (
  <Layout pageContext={pageContext} location={location} crumbLabel="Session" pageName="Session">
    <Seo title="Session" />
    <SessionTemplate />
  </Layout>
)

export default SessionPage
