import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  AboutCardWrapper,
  AboutUsContainer,
  CardsWrapper,
  TableDescCard,
  TableDescCardButton,
  TableDescCardButtonWrapper,
  TableDescCardImage,
  TableDescCardText,
  TableDescCardTitle,
} from "./index.css"

export default function AboutTable() {
  const data = useStaticQuery(graphql`
    query MyQuery87 {
      allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativeDirectory: { eq: "bleh" }
        }
      ) {
        edges {
          node {
            id
            base
            childImageSharp {
              fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `)
  const tableData = [
    {
      title: "Our Founder",
      image: data.allFile.edges[0].node.childImageSharp.fluid,
      text:
        "Find out more about our founder, Dr. Mark Sinclair, who established Mentor Education in 2003.",
    },
    {
      title: "News and Media Coverage",
      image: data.allFile.edges[2].node.childImageSharp.fluid,
      text: "The latest news and media coverage from Mentor Education.",
    },
    {
      title: "Media Releases",
      image: data.allFile.edges[3].node.childImageSharp.fluid,
      text: "The latest media releases from Mentor Education.",
    },
    {
      title: "Testimonials",
      image: data.allFile.edges[4].node.childImageSharp.fluid,
      text:
        "With over 20,000 graduates since 2003, here what students have to say about their learning experiences at Mentor Education.",
    },
    {
      title: "Employment Opportunities",
      image: data.allFile.edges[3].node.childImageSharp.fluid,
      text: "The latest employment opportunities at Mentor Education.",
    },
    {
      title: "Webinar Series",
      image: data.allFile.edges[1].node.childImageSharp.fluid,
      text: "The latest Webinars from Mentor Education.",
    },
  ]
  return (
    <AboutUsContainer marginBottom="2rem">
      <CardsWrapper>
        {tableData.map((it, index) => (
          <AboutCardWrapper key={index}>
            <TableDescCard>
              <TableDescCardImage>
                <Img fluid={it.image} alt="table-desc-image" />
              </TableDescCardImage>
              <TableDescCardTitle>{it.title}</TableDescCardTitle>
              <TableDescCardText>
                <p>{it.text}</p>
              </TableDescCardText>
              <TableDescCardButtonWrapper>
                <TableDescCardButton>Read More</TableDescCardButton>
              </TableDescCardButtonWrapper>
            </TableDescCard>
          </AboutCardWrapper>
        ))}
      </CardsWrapper>
    </AboutUsContainer>
  )
}
