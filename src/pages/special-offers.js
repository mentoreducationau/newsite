import React, { useState, useEffect, useRef } from "react"
import Seo from "../components/Seo/Seo"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import OffersIntro from "../components/pages/specialOffers/Intro"
import CardCollection from "../components/pages/specialOffers/CardCollection"
import {
  BackToTopArrow,
  ScrollWrapper,
} from "../components/pages/courses/courses.css"

const SpecialOffersPage = ({ pageContext, location, data }) => {
  const [showBackToTop, setShowBackToTop] = useState(true)
  const ref = useRef(null)
  const handleScroll = () => {
    const position =
      ref.current.getBoundingClientRect().top +
      window.pageYOffset -
      window.innerHeight / 10
    setShowBackToTop(position < window.scrollY)
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    const pos =
      ref.current.getBoundingClientRect().top +
      window.pageYOffset -
      window.innerHeight / 10
    window.scrollTo({ top: pos, behavior: "smooth" })
  }
  return (
    <Layout
      pageContext={pageContext}
      location={location}
      crumbLabel="Special Offers"
      pageName="Special Offers"
      background={
        data.allContentfulSpecialsOffers.nodes[0].heroImage[0].file.url
      }
    >
      <Seo title="Special Offers" />
      <div ref={ref}>
        <OffersIntro />
      </div>
      {data.allContentfulSpecialsOffers.nodes[0].pageSections.map(
        (item, index) => (
          <CardCollection key={index} cardCollection={item} />
        )
      )}
      <ScrollWrapper onClick={scrollToTop} showBackToTop={showBackToTop}>
        <BackToTopArrow />
      </ScrollWrapper>
    </Layout>
  )
}

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
