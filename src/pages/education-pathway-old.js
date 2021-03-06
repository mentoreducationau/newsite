import * as React from "react"
import Seo from "../components/Seo/Seo"
import Layout from "../components/layout"
import { useStaticQuery } from "gatsby"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import {
  TitleBanner,
  MainContainer,
  IframeContainer,
  PathwayContainer,
  ImageWrapper,
  OneImgWrapper,
  TextWrapper,
} from "../components/pages/about/index.css"
import { Headline, Paragraph, ParagraphMedium } from "../styles/Typography.css"
import { Container } from "../styles/ContainerStyles.css"
import { pathwayCourses, businessArray } from "../contents/career-pathway"
import Img from "gatsby-image"

const CareerPathwayPage = ({ pageContext, location }) => {
  const imageData = useStaticQuery(graphql`
    query MyQuery90 {
      allFile(
        filter: {
          extension: { regex: "/(png)/" }
          relativeDirectory: { eq: "career-pathway" }
        }
      ) {
        edges {
          node {
            id
            base
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout
      pageContext={pageContext}
      location={location}
      crumbLabel="Education Pathway"
      pageName="Education Pathway"
    >
      <Seo title="Education Pathway" />
      <TitleBanner style={{ backgroundAttachment: "fixed" }}>
        <Container>
          <Headline banner>Education</Headline>
          <Headline banner>Pathways</Headline>
        </Container>
      </TitleBanner>
      <MainContainer>
        <PathwayContainer>
          <ParagraphMedium>EDUCATION PATHWAY COURSES</ParagraphMedium>
          {pathwayCourses.map((item, index) => (
            <div key={index}>
              <Paragraph>
                <b>{item.title}</b>
              </Paragraph>
              {item.items.map((it, idx) => (
                <Paragraph key={idx}>
                  <Link to={it.link}>
                    {it.name}
                  </Link>
                </Paragraph>
              ))}
            </div>
          ))}
        </PathwayContainer>
        {businessArray.map((item, index) => (
          <PathwayContainer key={index}>
            <ParagraphMedium>{item.title}</ParagraphMedium>
            {index === 0 && (
              <ImageWrapper first="true">
                <OneImgWrapper first="true">
                  <Img
                    fluid={
                      imageData.allFile.edges[0].node.childImageSharp.fluid
                    }
                  />
                </OneImgWrapper>
                <OneImgWrapper first="true">
                  <Img
                    fluid={
                      imageData.allFile.edges[1].node.childImageSharp.fluid
                    }
                  />
                </OneImgWrapper>
              </ImageWrapper>
            )}
            {index === 1 ? (
              <ImageWrapper>
                <TextWrapper>
                  <Paragraph>
                    {item.description + ": "}
                    <Link to={item.link}>{item.link}</Link>
                  </Paragraph>
                </TextWrapper>
                <OneImgWrapper>
                  <Img
                    fluid={
                      imageData.allFile.edges[0].node.childImageSharp.fluid
                    }
                    alt="fluid-img"
                  />
                </OneImgWrapper>
              </ImageWrapper>
            ) : (
              <Paragraph>
                {item.description + ": "}
                <Link to={item.link}>{item.link}</Link>
              </Paragraph>
            )}

            {index === 0 && (
              <>
                <IframeContainer>
                  <iframe
                    src="https://www.youtube.com/embed/4CnIWoSoCU0"
                    frameBorder="0"
                    allowFullScreen=""
                    title="pathway-iframe-1"
                  ></iframe>
                </IframeContainer>
                {item.items.map((it, idx) => (
                  <React.Fragment key={idx}>
                    <Paragraph>
                      <b>{it.title}</b>
                    </Paragraph>
                    <Paragraph>{it.content}</Paragraph>
                  </React.Fragment>
                ))}
                <IframeContainer>
                  <iframe
                    src="https://www.youtube.com/embed/ZdhEiNw-j-4"
                    frameBorder="0"
                    allowFullScreen=""
                    title="pathway-iframe-2"
                  ></iframe>
                </IframeContainer>
              </>
            )}
            {item.subject_req && <p>*Subject to entry requirements.</p>}
          </PathwayContainer>
        ))}
      </MainContainer>
    </Layout>
  )
}

export default CareerPathwayPage
