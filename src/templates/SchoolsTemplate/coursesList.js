import React from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import Seo from "../../components/Seo/Seo"
import { MainContainer } from "../../components/pages/about/index.css"

import { Headline, Title } from "../../styles/Typography.css"
import Card from "../../components/pages/forms/Card"
import Renderer from "../../rich-text-renderers/sample"

const CardsWrapper = styled.div`
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

const CoursesList = ({ pageContext, location }) => {
  const facultyData = pageContext.facultyData

  return (
    <Layout
      pageContext={pageContext}
      location={location}
      crumbLabel={facultyData.heading}
      pageName="Schools"
    >
      <Seo title={facultyData.heading} />
      <Headline style={{ color: "#707070" }} banner>
        {facultyData.heading}
      </Headline>
      <MainContainer>
        <Renderer node={facultyData.introduction} />

        {facultyData.courseSections.map((courseSection, idx) => (
          <div style={{ marginTop: "3.25rem" }} key={idx}>
            <Title style={{ textAlign: "center" }} course>
              {courseSection.heading}
            </Title>
            <CardsWrapper>
              {courseSection.courses.map((it, ix) => (
                <Card
                  key={ix}
                  heading={
                    it.courseCode + " - " + it.studyLevel + " " + it.courseName
                  }
                  link={
                    "/courses/" +
                    it.courseCode.toLowerCase() +
                    "-" +
                    it.studyLevel.toLowerCase().replace(/ /g, "-") +
                    "_" +
                    it.courseName.toLowerCase().replace(/ /g, "-")
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

export default CoursesList
