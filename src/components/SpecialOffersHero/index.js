import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "../../styles/ContainerStyles.css"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Img from "gatsby-image"

const SpecialOffersHero = () => {
  const image = useStaticQuery(graphql`
    query SpecialOffersHeroImage {
      allFile(filter: { name: { in: ["specialoffer-promo-3"] } }) {
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
            name
          }
        }
      }
    }
  `)

  return (
    <Container style={{ marginTop: 0 }}>
      {/* <GatsbyImage
        image={getImage(
          image.allFile.edges.filter(
            item => item.node.name === "specialoffer-promo-3"
          )[0].node.childImageSharp
        )}
        imgStyle={{ width: "100%" }}
        alt="special-offers-hero"
      /> */}
      <Img
        fluid={
          image.allFile.edges.filter(
            item => item.node.name === "specialoffer-promo-3"
          )[0].node.childImageSharp.fluid
        }
      />
    </Container>
  )
}

export default SpecialOffersHero
