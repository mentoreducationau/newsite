import * as React from "react"
import Seo from "../components/Seo/Seo"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import OffersIntro from "../components/pages/specialOffers/Intro"
import CardCollection from "../components/pages/specialOffers/CardCollection"

const SpecialOffersPage = ({ pageContext, location, data }) => (
  <Layout
    pageContext={pageContext}
    location={location}
    crumbLabel="Special Offers"
    pageName="Special Offers"
    background={data.allContentfulSpecialsOffers.nodes[0].heroImage[0].file.url}
  >
    <Seo title="Special Offers" />
    {/* <SpecialOffersTemplate offersData={data.allContentfulSpecialsOffers.nodes[0].pageSections}/> */}
    <OffersIntro />
    {data.allContentfulSpecialsOffers.nodes[0].pageSections.map((item, index) => (
        <CardCollection key={index} cardCollection={item} />
    ))}
  </Layout>
)

export default SpecialOffersPage

export const specialOfferData = graphql`
  query SpecialOfferQuery {
    allContentfulSpecialsOffers {
      nodes {
        heroImage {
          file {
            url
          }
        }
        pageSections {
          sectionHeading
          courses {
            courseCode
            courseName
            studyLevel
            pricing {
              salePrice
              tutorialsSalePrice
            }
          }
        }
      }
    }
  }
`
