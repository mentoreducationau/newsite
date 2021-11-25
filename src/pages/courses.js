import * as React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import CoursesTemplate from "../templates/CoursesTemplate"

const CoursesPage = ({pageContext, location }) => (
  <Layout pageContext={pageContext} location={location} crumbLabel="Courses">
    <Seo title="Courses" />
    <CoursesTemplate />
  </Layout>
)

export default CoursesPage