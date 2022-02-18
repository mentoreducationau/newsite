import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  RightSideWrapper,
  Heading,
  IntroText,
} from "../../components/pages/student-information/index.css"
import { NoneDecorationA } from "../../styles/ButtonStyles.css"

const StudentInformationGuide = () => {
  const guideLink = useStaticQuery(graphql`
    query StudentInformationGuideQuery {
      allContentfulStudentFormsAndDocumentsSections(
        filter: { contentful_id: { eq: "5ls59IFwkNrUGjXpfJzohd" } }
      ) {
        nodes {
          studentInformationGuideSection {
            file {
              url
            }
            title
          }
        }
      }
    }
  `)

  const heading = "Student Information Guide"
  const data = [
    {
      link: guideLink.allContentfulStudentFormsAndDocumentsSections.nodes[0]
        .studentInformationGuideSection[0].file.url,
      intro1: "Looking for further information about Mentor Education? ",
      intro2: " to download our Student Information Guide.",
    },
    {
      link: guideLink.allContentfulStudentFormsAndDocumentsSections.nodes[0]
        .studentInformationGuideSection[2].file.url,
      intro1: " ",
      intro2: " to download the Mentor Education Student Code of Conduct.",
    },
  ]
  return (
    <RightSideWrapper>
      <Heading>{heading}</Heading>
      {data.map(item => (
        <IntroText key={item.link}>
          {item.intro1}
          <NoneDecorationA
            href={item.link}
            target="_blank"
            rel="noreferrer"
            style={{ color: "blue" }}
          >
            Click here
          </NoneDecorationA>
          {item.intro2}
        </IntroText>
      ))}
    </RightSideWrapper>
  )
}

export default StudentInformationGuide
