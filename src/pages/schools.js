import React, { useState, useEffect, useRef } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CoursesIntro from "../components/pages/schools/Intro"
import FacultyCollection from "../components/pages/schools/FacultyCollection"
import {
  BackToTopArrow,
  ScrollWrapper,
} from "../components/pages/courses/courses.css"

const SchoolsPage = ({ pageContext, location, data }) => {
  const ref = useRef(null)
  const schools = data.allContentfulSchool.nodes
  const pageHeading = "Mentor Education - Schools"
  const intro =
    "I'm baby quinoa XOXO cronut venmo food truck wayfarers poutine hoodie VHS tilde cred polaroid fam vexillologist trust fund. Authentic locavore typewriter snackwave bitters, keffiyeh wolf 3 wolf moon. Selfies umami paleo organic sartorial shabby chic asymmetrical cray marfa etsy microdosing subway tile chambray. Vexillologist lo-fi letterpress pabst tumblr banh mi schlitz mixtape food truck 8-bit. Pug single-origin coffee salvia, polaroid mumblecore cred microdosing paleo craft beer before they sold out aesthetic pitchfork."
  const [showBackToTop, setShowBackToTop] = useState(true)
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
      crumbLabel="schools"
      pageName="Schools"
    >
      <Seo title={pageHeading} />
      <div ref={ref}>
        <CoursesIntro heading={pageHeading} intro={intro} />
      </div>
      {schools.map((item, index) => (
        <FacultyCollection school={item} key={index} />
      ))}
      <ScrollWrapper onClick={scrollToTop} showBackToTop={showBackToTop}>
        <BackToTopArrow />
      </ScrollWrapper>
    </Layout>
  )
}

export default SchoolsPage

export const SchoolsPageData = graphql`
  query SchoolsPageQuery {
    allContentfulSchool {
      nodes {
        heading
        faculties {
          heading
        }
      }
    }
  }
`
