import React, { useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import { MainContainer } from "../components/pages/about/index.css"
import SEO from "../components/seo"
import { ModalProvider, BaseModalBackground } from "styled-react-modal"
import { Headline, Title } from "../styles/Typography.css"
import Card from "../components/pages/forms/Card"
import CoursesIntro from "../components/pages/courses/Intro"
import { SectionContainer } from "../styles/ContainerStyles.css"
import CourseCollection from "../components/pages/courses/CourseCollection"
import SignUpModal from "../components/pages/studentInformationSession/SignUpModal"

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${props => props.opacity};
  align-items: start;
  transition: all 0.3s ease-in-out;
`

const CoursesPage = ({ pageContext, location, data }) => {
  const { heading, coursesSelection } = data.allContentfulCoursesPage.nodes[0]
  const intro =
    "I’m baby knausgaard schlitz tote bag mlkshk flannel you probably haven’t heard of them prism retro quinoa ennui shabby chic. Marfa waistcoat fixie craft beer shoreditch man bun ethical mixtape keytar celiac selfies church-key. Gastropub 3 wolf moon lo-fi fingerstache truffaut, +1 cronut hella humblebrag. Fam heirloom synth pickled pinterest XOXO. Cloud bread pour-over scenester fixie 8-bit, raw denim venmo pork belly cornhole disrupt before they sold out blog."

  const [isOpen, setIsOpen] = useState(false)
  const [opacity, setOpacity] = useState(0)
  const [selectedZoomWebinarId, setSelectedZoomWebinarId] = useState(0)

  const toggleModal = id => {
    setOpacity(0)
    setSelectedZoomWebinarId(id)
    setIsOpen(!isOpen)
  }

  const afterOpen = () => {
    setTimeout(() => {
      setOpacity(1)
    }, 100)
  }

  const beforeClose = () => {
    return new Promise(resolve => {
      setOpacity(0)
      setTimeout(resolve, 300)
    })
  }

  return (
    <Layout
      pageContext={pageContext}
      location={location}
      crumbLabel={heading}
      pageName={heading}
    >
      <SEO title={heading} />
      <ModalProvider backgroundComponent={FadingBackground}>
        <CoursesIntro heading={heading} intro={intro} />
        <MainContainer>
          {coursesSelection.map((item, index) => (
            <CourseCollection courseCollection={item} key={index} toggleModal={toggleModal} />
          ))}
        </MainContainer>
        <SignUpModal
          isOpen={isOpen}
          opacity={opacity}
          toggleModal={toggleModal}
          afterOpen={afterOpen}
          beforeClose={beforeClose}
          zoomWebinarId={selectedZoomWebinarId}
        />
      </ModalProvider>
    </Layout>
  )
}

export default CoursesPage

export const CoursesPageData = graphql`
  query CoursesPageQuery {
    allContentfulCoursesPage {
      nodes {
        heading
        coursesSelection {
          heading
          courses {
            courseCode
            courseName
            studyLevel
            heroImage {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
