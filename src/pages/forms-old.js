import * as React from "react"
import Seo from "../components/Seo/Seo"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import StudentForms from "../components/pages/forms"

const FormsPage = ({ pageContext, location, data }) => (
  <Layout
    pageContext={pageContext}
    location={location}
    crumbLabel="Student Forms And Documents"
  >
    <Seo title="Student Forms And Documents" />
    <StudentForms
      formsData={data.allContentfulStudentFormsAndDocumentsSections.nodes}
    />
  </Layout>
)

export default FormsPage

export const formsData = graphql`
  query StudentFormsAndDocumentsQuery {
    allContentfulStudentFormsAndDocumentsSections {
      nodes {
        facultyName
        course {
          courseCode
          courseName
          studyLevel
          courseGuide {
            file {
              url
            }
          }
          enrolmentForm {
            file {
              url
            }
          }
        }
      }
    }
  }
`
