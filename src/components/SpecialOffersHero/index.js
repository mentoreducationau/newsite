import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "../../styles/ContainerStyles.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const SpecialOffersHero = () => {
  const image = useStaticQuery(graphql`
    query SpecialOffersHeroImage {
      allFile(filter: { name: { in: ["specialoffer-promo-3"] } }) {
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
    <Container style={{ marginTop: 0 }}>
      <GatsbyImage
        image={getImage(
          image.allFile.edges.filter(
            item => item.node.name === "specialoffer-promo-3"
          )[0].node.childImageSharp
        )}
        imgStyle={{ width: "100%" }}
        alt="special-offers-hero"
      />
    </Container>
  )
}

export default SpecialOffersHero
