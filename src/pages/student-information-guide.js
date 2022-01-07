import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CoursesIntro from "../components/pages/studentInformationGuide/Intro"
import CourseCollection from "../components/pages/studentInformationGuide/CourseCollection"

const StudentInformationGuidePage = ({ pageContext, location, data }) => {
  const { heading, coursesSelection } = data.allContentfulCoursesPage.nodes[0]
  const intro =
    "I’m baby knausgaard schlitz tote bag mlkshk flannel you probably haven’t heard of them prism retro quinoa ennui shabby chic. Marfa waistcoat fixie craft beer shoreditch man bun ethical mixtape keytar celiac selfies church-key. Gastropub 3 wolf moon lo-fi fingerstache truffaut, +1 cronut hella humblebrag. Fam heirloom synth pickled pinterest XOXO. Cloud bread pour-over scenester fixie 8-bit, raw denim venmo pork belly cornhole disrupt before they sold out blog."

  return (
    <Layout
      pageContext={pageContext}
      location={location}
      crumbLabel="Student Information Guide"
      pageName="Student Information Guide"
    >
      <SEO title="Student Information Guide" />
      <CoursesIntro heading="Student Information Guide" intro={intro} />

      {coursesSelection.map((item, index) => (
        <CourseCollection courseCollection={item} key={index} />
      ))}
    </Layout>
  )
}

export default StudentInformationGuidePage

export const CoursesPageData = graphql`
  query CoursesPageQuery1 {
    allContentfulCoursesPage {
      nodes {
        heading
        coursesSelection {
          heading
          courses {
            courseCode
            courseName
            studyLevel
            heroImage {
              gatsbyImageData(aspectRatio: 0.56)
            }
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
  }
`
