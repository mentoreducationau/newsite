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
import {
  CourseCollectionNavigationText,
  TopNavigationWrapper,
} from "../components/pages/specialOffers/offers.css"
import { SectionContainer } from "../styles/ContainerStyles.css"

const SpecialOffersPage = ({ pageContext, location, data }) => {
  const [showBackToTop, setShowBackToTop] = useState(true)
  const ref = useRef(null)
  const sectionsRef = useRef([])
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
  const scrollToSection = el => {
    const pos =
      sectionsRef.current[el].getBoundingClientRect().top +
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
      <SectionContainer marginBottom="42px" mobWidth="75%">
        <TopNavigationWrapper>
          {data.allContentfulSpecialsOffers.nodes[0].pageSections.map(
            (item, index) =>
              index !== 0 && (
                <CourseCollectionNavigationText
                  key={index}
                  onClick={() => scrollToSection(index)}
                >
                  {item.sectionHeading}
                </CourseCollectionNavigationText>
              )
          )}
        </TopNavigationWrapper>
      </SectionContainer>
      {data.allContentfulSpecialsOffers.nodes[0].pageSections.map(
        (item, index) => (
          <div ref={el => (sectionsRef.current[index] = el)} key={index}>
            <CardCollection cardCollection={item} />
          </div>
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
