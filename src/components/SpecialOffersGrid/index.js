import React from "react"
import { specialOffersArray } from "../../contents/courseArrayForSpecialOffers.js"
import { useStaticQuery, graphql } from "gatsby"
import ImageGridWrapper from "./ImageGridWrapper"

import { Container, SectionWrapper } from "../../styles/ContainerStyles.css"
import { CourseCardWrapper, CardsWrapper } from "./index.css"

const SpecialOffersGrid = () => {
  const images = useStaticQuery(graphql`
    query SpecialOffersImage {
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
          {specialOffersArray.map((item, index) => (
            <CourseCardWrapper>
              <ImageGridWrapper
                key={index}
                title={item.title}
                content={item.content}
                image={
                  images.allFile.edges.filter(
                    item => item.node.name === "studentinfo_timetable"
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

export default SpecialOffersGrid
