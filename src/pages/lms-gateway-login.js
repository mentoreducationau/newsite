import * as React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import MELMSLoginTemplate from "../templates/MELMSLoginTemplate"

const MELMSLoginPage = ({ pageContext, location }) => (
  <Layout pageContext={pageContext} location={location} crumbLabel="Mentor Education Learning Management System Login">
    <Seo title="Mentor Education Learning Management System Login" />
    <MELMSLoginTemplate />
  </Layout>
)

export default MELMSLoginPage
