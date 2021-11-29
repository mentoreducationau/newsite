import * as React from "react"
import Seo from "../components/Seo/Seo"
import Layout from "../components/layout"
import StudentForms from "../components/pages/forms"

const FormsPage = ({ pageContext, location }) => (
  <Layout pageContext={pageContext} location={location} crumbLabel="Student Forms And Documents">
    <Seo title="Student Forms And Documents" />
    <StudentForms />
  </Layout>
)

export default FormsPage
