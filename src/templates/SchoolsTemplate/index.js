import React from "react"
import styled from "styled-components"

import Layout from "../../components/layout"
import { MainContainer } from "../../components/pages/about/index.css"
import SEO from "../../components/seo"
import {
  Headline,
  ParagraphMedium,
  Title,
} from "../../styles/Typography.css"
import Card from "../../components/pages/forms/Card"
import Renderer from "../../rich-text-renderers/sample"

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

const SchoolsTemplate = ({ pageContext, location }) => {
  const schoolData = pageContext.schoolData
  console.log(schoolData)
  const requireData = [
    {
      heading: "Accounting Faculty Courses",
      courses: [
        {
          heading: "Advanced Diploma Of Accounting",
          courseId: "FNS67568",
        },
        {
            heading: "Advanced Diploma Of Accounting",
            courseId: "FNS67568",
          },
          {
            heading: "Advanced Diploma Of Accounting",
            courseId: "FNS67568",
          },
      ],
    },
    {
        heading: "Accounting Skill Sets",
        courses: [
          {
            heading: "Advanced Diploma Of Accounting",
            courseId: "FNS67568",
          },
          {
              heading: "Advanced Diploma Of Accounting",
              courseId: "FNS67568",
            },
            {
              heading: "Advanced Diploma Of Accounting",
              courseId: "FNS67568",
            },
        ],
      },
  ]

  return (
    <Layout
      pageContext={pageContext}
      location={location}
      crumbLabel={schoolData.heading}
    >
      <SEO title={schoolData.heading} />
      <Headline style={{ color: "#707070" }} banner>
        {schoolData.heading}
      </Headline>
      <MainContainer>
        <ParagraphMedium>{schoolData.heading}</ParagraphMedium>
        <Renderer node={schoolData.instruction} />
        {requireData.map((item, index) => (
          <div style={{ marginTop: "3.25rem" }} key={index}>
            <Title style={{ textAlign: "center" }} course>
              {item.heading}
            </Title>
            <CardsWrapper>
              {item.courses.map((it, idx) => (
                <Card
                  key={idx}
                  heading={it.courseId + "-" + it.heading}
                  link={
                    "/courses/" +
                    it.heading.toLowerCase().replaceAll(" ", "-") +
                    "-" +
                    it.courseId.toLowerCase()
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

export default SchoolsTemplate
