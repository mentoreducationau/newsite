import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import { MainContainer } from "../components/pages/about/index.css"
import SEO from "../components/seo"
import { Headline, Title } from "../styles/Typography.css"
import Card from "../components/pages/forms/Card"

export const CardsWrapper = styled.div`
  --repeat: auto-fit;

  @media (min-width: calc(250px * 5)) {
    --repeat: 3;
  }

  display: grid;
  grid-template-columns: repeat(
    var(--repeat, auto-fit),
    minmax(calc(250px * 1), 1fr)
  );
  grid-template-rows: auto;
  gap: 27px;
  width: 100%;
`

const CoursesPage = ({ pageContext, location, data }) => {
  const {
    heading,
    coursesSelection,
  } = data.allContentfulCoursesPage.nodes[0]
  console.log(heading, coursesSelection)
  return (
    <Layout pageContext={pageContext} location={location} crumbLabel={heading}>
      <SEO title={heading} />
      <Headline style={{ color: "#707070" }} banner>
        {heading}
      </Headline>
      <MainContainer>
        {coursesSelection.map((item, index) => (
          <div style={{ marginTop: "3.25rem" }} key={index}>
            <Title style={{ textAlign: "center" }} course>
              {item.heading}
            </Title>
            <CardsWrapper>
              {item.courses.map((it, idx) => (
                <Card
                  key={idx}
                  heading={it.courseCode + " - " + it.courseName}
                  link={
                    "/courses/" +
                    it.courseName.toLowerCase().replaceAll(" ", "-") +
                    "-" +
                    it.courseCode.toLowerCase()
                  }
                />
              ))}
            </CardsWrapper>
          </div>
        ))}
      </MainContainer>
    </Layout>
  )
}

export default CoursesPage

export const CoursesPageData = graphql`
  query CoursesPageQuery {
    allContentfulCoursesPage {
      nodes {
        heading
        coursesSelection {
          heading
          courses {
            courseCode
            courseName
          }
        }
      }
    }
  }
`
