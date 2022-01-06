import React from "react"
import styled from "styled-components"

import Layout from "../../components/layout"
import { MainContainer } from "../../components/pages/about/index.css"
import SEO from "../../components/seo"
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

const SchoolsTemplate = ({ pageContext, location }) => {
  const schoolData = pageContext.schoolData

  return (
    <Layout
      pageContext={pageContext}
      location={location}
      crumbLabel={schoolData.heading}
      pageName="Schools"
    >
      <SEO title={schoolData.heading} />
      <Headline style={{ color: "#707070" }} banner>
        {schoolData.heading}
      </Headline>
      <MainContainer>
        <Renderer node={schoolData.introduction} />
        {schoolData.faculties.map((faculty, index) =>
          faculty.courseSections.map((courseSection, idx) => (
            <div style={{ marginTop: "3.25rem" }} key={idx}>
              <Title style={{ textAlign: "center" }} course>
                {courseSection.heading}
              </Title>
              <CardsWrapper>
                {courseSection.courses.map((it, ix) => (
                  <Card
                    key={ix}
                    heading={it.courseCode + " - " + it.studyLevel + " " + it.courseName}
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
          ))
        )}
      </MainContainer>
    </Layout>
  )
}

export default SchoolsTemplate
