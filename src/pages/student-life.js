import * as React from "react"
// import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import StudentLifeTemplate from "../templates/StudentLifeTemplate"
import Layout from "../components/layout"

const StudentLifePage = ({ pageContext, location }) => (
  // <Layout
  //   pageContext={pageContext}
  //   location={location}
  //   crumbLabel="Student Life"
  // >
  <Layout>
    <Seo title="Student Life" />
    <StudentLifeTemplate />
  </Layout>
)

export default StudentLifePage
