import * as React from "react"
import { useStaticQuery } from "gatsby"
import { graphql } from "gatsby"
import {
  IframeContainer,
  PathwayContainer,
  ImageWrapper,
  OneImgWrapper,
  TextWrapper,
} from "../../components/pages/about/index.css"
import { Paragraph, ParagraphMedium } from "../../styles/Typography.css"
import { pathwayCourses, businessArray } from "../../contents/career-pathway"
import Img from "gatsby-image"
import {
  Heading,
  RightSideWrapper,
} from "../../components/pages/student-information/index.css"

const CareerPathwayPage = ({ activeState }) => {
  const imageData = useStaticQuery(graphql`
    query EducationPathwayQuery {
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
    <RightSideWrapper activeState={activeState}>
      <Heading>Education Pathway</Heading>
      <PathwayContainer>
        <ParagraphMedium>EDUCATION PATHWAY COURSES</ParagraphMedium>
        {pathwayCourses.map((item, index) => (
          <div key={index}>
            <Paragraph>
              <b>{item.title}</b>
            </Paragraph>
            {item.items.map((it, idx) => (
              <Paragraph key={idx}>
                <a href={it.link}>{it.name}</a>
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
                  fluid={imageData.allFile.edges[0].node.childImageSharp.fluid}
                />
              </OneImgWrapper>
              <OneImgWrapper first="true">
                <Img
                  fluid={imageData.allFile.edges[1].node.childImageSharp.fluid}
                />
              </OneImgWrapper>
            </ImageWrapper>
          )}
          {index === 1 ? (
            <ImageWrapper>
              <TextWrapper>
                <Paragraph>
                  {item.description + ": "}
                  <a href={item.link}>{item.link}</a>
                </Paragraph>
              </TextWrapper>
              <OneImgWrapper>
                <Img
                  fluid={imageData.allFile.edges[0].node.childImageSharp.fluid}
                  alt="fluid-img"
                />
              </OneImgWrapper>
            </ImageWrapper>
          ) : (
            <Paragraph>
              {item.description + ": "}
              <a href={item.link}>{item.link}</a>
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
    </RightSideWrapper>
  )
}

export default CareerPathwayPage
