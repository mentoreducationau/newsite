import * as React from "react"
import Seo from "../components/Seo/Seo"
import Layout from "../components/layout"
import StudentLife from "../components/pages/studentLife"

const StudentLifePage = ({ pageContext, location }) => (
  <Layout
    pageContext={pageContext}
    location={location}
    crumbLabel="Student Life"
    pageName="Student Life"
  >
    <Seo title="Student Life" />
    <StudentLife />
  </Layout>
)

export default StudentLifePage
