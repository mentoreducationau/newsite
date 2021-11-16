import React from "react"
import { studentInformation } from "../../contents/student-information.js"
import { useStaticQuery, graphql } from "gatsby"
import ImageGridWrapper from "./ImageGridWrapper"

import { Container, SectionWrapper } from "../../styles/ContainerStyles.css"
import { CourseCardWrapper, CardsWrapper } from "./index.css"

const ImageGrid = () => {
  const images = useStaticQuery(graphql`
    query StudentInformationImage {
      allFile(
        filter: {
          name: {
            in: [
              "studentinfo_timetable"
              "aboutus_employment"
              "studentinfo_lms"
              "studentinfo_studentlife"
              "studentinfo_forms"
              "studentinfo_gui"
              "aboutus_webinar"
              "studentinfo_pathways"
              "studentinfo_questions"
            ]
          }
        }
      ) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
            name
          }
        }
      }
    }
  `)

  return (
    <Container style={{ marginTop: 0 }}>
      <SectionWrapper justifyContent="center" style={{ overflow: `visible` }}>
        <CardsWrapper>
          {studentInformation.map((student, index) => (
            <CourseCardWrapper>
              <ImageGridWrapper
                key={index}
                title={student.title}
                content={student.content}
                image={
                  images.allFile.edges.filter(
                    item => item.node.name === student.image
                  )[0].node.childImageSharp
                }
              />
            </CourseCardWrapper>
          ))}
        </CardsWrapper>
      </SectionWrapper>
    </Container>
  )
}

export default ImageGrid
