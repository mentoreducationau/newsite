import React, { useState, useRef } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ModalProvider, BaseModalBackground } from "styled-react-modal"
import CoursesIntro from "../components/pages/courses/Intro"
import { SectionContainer } from "../styles/ContainerStyles.css"
import CourseCollection from "../components/pages/courses/CourseCollection"
import SignUpModal from "../components/pages/studentInformationSession/SignUpModal"
import CoursesSearch from "../components/pages/courses/CourseSearch"

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
  const collectionsRef = useRef([])
  const courseCollections = []

  coursesSelection.map((item, index) => {
    const collection = { value: index, label: item.heading }
    courseCollections.push(collection)
  })

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

  const excuteScroll = el => {
    const pos = collectionsRef.current[el].getBoundingClientRect().top + window.pageYOffset - window.innerHeight / 10
    window.scrollTo({ top: pos, behavior: "smooth" })
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
        <CoursesSearch options={courseCollections} excuteScroll={excuteScroll} />
        {coursesSelection.map((item, index) => (
          <div key={index} ref={el => (collectionsRef.current[index] = el)}>
            <CourseCollection
              courseCollection={item}
              toggleModal={toggleModal}
            />
          </div>
        ))}
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
              gatsbyImageData(aspectRatio: 0.56)
            }
          }
        }
      }
    }
  }
`
