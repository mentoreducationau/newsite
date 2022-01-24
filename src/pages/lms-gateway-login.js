import * as React from "react"
import Seo from "../components/Seo/Seo"
import MELMSLoginTemplate from "../templates/MELMSLoginTemplate"
import Layout from "../components/layout"

const MELMSLoginPage = ({ pageContext, location }) => (
  <Layout pageContext={pageContext} location={location} crumbLabel="Mentor Education Learning Management System Login" pageName="MELMS Login">
    <Seo title="Mentor Education Learning Management System Login" />
    <MELMSLoginTemplate />
  </Layout>
)

export default MELMSLoginPage
