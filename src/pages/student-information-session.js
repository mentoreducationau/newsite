import * as React from "react"
import Seo from "../components/Seo/Seo"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SessionCard from "../components/pages/studentInformationSession/SessionCard"

const StudentInformationSessionPage = ({ pageContext, location, data }) => {
  console.log(data)
  return (
    <Layout
      pageContext={pageContext}
      location={location}
      crumbLabel="Student Information Session"
      pageName="Student Information Session"
    >
      <Seo title="Student Information Session" />
      <div
        style={{
          width: "90%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {data.allContentfulStudentInformationSession.nodes.map(item => (
          <SessionCard
            image={item.coverImage}
            sessionDate={item.sessionDate}
            course={item.course}
            hosts={item.hosts}
          />
        ))}
      </div>
    </Layout>
  )
}

export default StudentInformationSessionPage

export const sisData = graphql`
  query StudentInformationSessionQuery {
    allContentfulStudentInformationSession {
      nodes {
        id
        coverImage {
          gatsbyImageData(aspectRatio: 1.8, layout: FULL_WIDTH)
        }
        sessionDate
        course {
          courseCode
          courseName
          studyLevel
        }
        hosts {
          name
          portrait {
            gatsbyImageData(aspectRatio: 1)
          }
        }
      }
    }
  }
`
