import * as React from "react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import WebinarTemplate from "../templates/WebinarTemplate"

const SecondPage = ({ location }) => (
  <Layout location={location} crumbLabel="Page 2">
    <Seo title="Page two" />
    <WebinarTemplate />
  </Layout>
)

export default SecondPage
