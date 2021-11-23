import * as React from "react"
import Layout from "../../components/layout"
// import Layout from "../../components/Layout/Layout"
import Seo from "../../components/Seo/Seo"
import CourseTemplate from "../../templates/CourseTemplate"

const CoursePage = ({ pageContext, location, ...props }) => {
  const courseId = props.params.courseId

  return (
    // <Layout pageContext={pageContext} location={location} crumbLabel={courseId}>
    <Layout>
      <Seo title="Courses" />
      <CourseTemplate />
    </Layout>
  )
}

export default CoursePage
