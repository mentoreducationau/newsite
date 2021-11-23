import * as React from "react"
// import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import StudentInformationTemplate from "../templates/StudentInfromationTemplate"
import Layout from "../components/layout"

const StudentInformationPage = ({ pageContext, location }) => (
  // <Layout pageContext={pageContext} location={location} crumbLabel="Student Information">
  <Layout>
    <Seo title="Student Information" />
    <StudentInformationTemplate />
  </Layout>
)

export default StudentInformationPage
