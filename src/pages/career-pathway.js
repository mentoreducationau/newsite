import * as React from "react"
import Seo from "../components/Seo/Seo"
import Layout from "../components/layout"
import { useStaticQuery } from "gatsby"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import GatsbyImage from "gatsby-image"
import { Link } from "gatsby"
import {
  TitleBanner,
  MainContainer,
  IframeContainer,
  PathwayContainer,
} from "./about-us/index.css"
import { Headline, Paragraph, ParagraphMedium } from "../styles/Typography.css"
import { Container } from "../styles/ContainerStyles.css"
import { pathwayCourses, businessArray } from "../contents/career-pathway"

const CareerPathwayPage = ({ pageContext, location }) => {
  const image = useStaticQuery(graphql`
    query CareerPathwayImage {
      allFile(
        filter: {
          name: { in: ["ducere-logo-1", "TorrensUniversityAustralia_logo"] }
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
    <Layout
      pageContext={pageContext}
      location={location}
      crumbLabel="Education Pathway"
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
                <Paragraph>
                  <Link to={it.link} key={idx}>
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
              <div style={{ height: "30vh" }}>
                <GatsbyImage
                  image={getImage(
                    image.allFile.edges.filter(
                      item => item.node.name === "ducere-logo-1"
                    )[0].node.childImageSharp
                  )}
                  imgStyle={{ width: "100%" }}
                  alt="ducere-logo-1"
                />
                <GatsbyImage
                  image={getImage(
                    image.allFile.edges.filter(
                      item =>
                        item.node.name === "TorrensUniversityAustralia_logo"
                    )[0].node.childImageSharp
                  )}
                  imgStyle={{ width: "100%" }}
                  alt="TorrensUniversityAustralia_logo"
                />
              </div>
            )}
            {index === 1 ? (
              <div>
                <div style={{width: "75%"}}>
                  <Paragraph>
                    {item.description + ": "}
                    <Link to={item.link}>{item.link}</Link>
                  </Paragraph>
                </div>
                <div style={{width: "25%"}}>
                  <GatsbyImage
                    image={getImage(
                      image.allFile.edges.filter(
                        item => item.node.name === "ducere-logo-1"
                      )[0].node.childImageSharp
                    )}
                    imgStyle={{ width: "100%" }}
                    alt="ducere-logo-1"
                  />
                </div>
              </div>
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
                    frameborder="0"
                    webkitallowfullscreen=""
                    mozallowfullscreen=""
                    allowfullscreen=""
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
                    frameborder="0"
                    webkitallowfullscreen=""
                    mozallowfullscreen=""
                    allowfullscreen=""
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
