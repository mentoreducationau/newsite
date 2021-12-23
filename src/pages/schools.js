import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import { MainContainer } from "../components/pages/about/index.css"
import SEO from "../components/seo"
import { Headline, Paragraph, Title } from "../styles/Typography.css"
import Card from "../components/pages/forms/Card"

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

const Schools = ({ pageContext, location, data }) => {
  return (
    <Layout
      pageContext={pageContext}
      location={location}
      crumbLabel="Schools"
      pageName="Schools"
    >
      <SEO title="Mentor Education Schools" />
      <Headline style={{ color: "#707070" }} banner>
        Mentor Education - Schools
      </Headline>
      <MainContainer>
        {data.allContentfulSchool.nodes.map((item, index) => (
          <Paragraph key={index}>
            Mentor Education's{" "}
            <Link to={"/" + item.heading.toLowerCase().replaceAll(" ", "-")}>
              {item.heading}
            </Link>{" "}
            provides courses from Certificate III to Advanced Diploma Level,
            including qualifications in Accounting, Bookkeeping and Mortgage
            Broking.
          </Paragraph>
        ))}
        {data.allContentfulSchool.nodes.map((item, index) => (
          <div style={{ marginTop: "3.25rem" }} key={index}>
            <Title style={{ textAlign: "center" }} course>
              {item.heading}
            </Title>
            <CardsWrapper>
              {item.faculties.map((it, idx) => (
                <Card
                  key={idx}
                  heading={it.heading}
                  link={
                    "/" +
                    it.heading.toLowerCase().replaceAll(" & ", "-") +
                    "-courses"
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

export default Schools

export const SchoolsPageData = graphql`
  query PrivateDiningQuery {
    allContentfulSchool {
      nodes {
        heading
        introduction {
          raw
        }
        faculties {
          heading
        }
      }
    }
  }
`
