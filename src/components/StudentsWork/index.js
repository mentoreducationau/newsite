import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { studentsData } from "./student-data"

import { CompanyLogosWrapper, CourseContainer } from "./studentswork.css"
import { Container } from "../../styles/ContainerStyles.css"
import { Title } from "../../styles/Typography.css"

const StudentsWork = props => {
  const {
    allFile: { nodes: logos },
  } = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { relativeDirectory: { eq: "company-logos" } }) {
        nodes {
          name
          relativePath
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)
  return props.course ? (
    <CourseContainer>
      <Title course>Where our graduates are now employed</Title>
      <CompanyLogosWrapper>
        {studentsData.map(({ id, companyName, link, imgSrc }) => {
          const img = logos.filter(
            image => image.relativePath === `company-logos/${imgSrc}`
          )
          return (
            <a key={id} href={link} target="_blank" rel="noreferrer noopener">
              {(img.length > 0 && img[0].childImageSharp !== null) && (
                <GatsbyImage
                  image={img.length && img[0].childImageSharp.gatsbyImageData}
                  alt={companyName}
                />
              )}
            </a>
          )
        })}
      </CompanyLogosWrapper>
    </CourseContainer>
  ) : (
    <Container>
      <Title course>Where our graduates are now employed</Title>
      <CompanyLogosWrapper>
        {studentsData.map(({ id, companyName, link, imgSrc }) => {
          const img = logos.filter(
            image => image.relativePath === `company-logos/${imgSrc}`
          )
          return (
            <a key={id} href={link} target="_blank" rel="noreferrer noopener">
              <GatsbyImage
                image={img.length && img[0].childImageSharp.gatsbyImageData}
                alt={companyName}
              />
            </a>
          )
        })}
      </CompanyLogosWrapper>
    </Container>
  )
}

export default StudentsWork
