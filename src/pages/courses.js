import React, { useState, useRef, useEffect } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { ModalProvider, BaseModalBackground } from "styled-react-modal"
import CoursesIntro from "../components/pages/courses/Intro"
import { SectionContainer } from "../styles/ContainerStyles.css"
import CourseCollection from "../components/pages/courses/CourseCollection"
import SignUpModal from "../components/pages/studentInformationSession/SignUpModal"
import CoursesSearch from "../components/pages/courses/CourseSearch"
import CourseCard from "../components/pages/courses/CourseCard"
import {
  BackToTopArrow,
  CardsWrapper,
  ScrollWrapper,
} from "../components/pages/courses/courses.css"

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
  const dropdownRef = useRef(null)
  const courseCollections = []
  const allCoursesArray = []
  const [searchText, setSearchText] = useState("")
  const [showBackToTop, setShowBackToTop] = useState(false)

  coursesSelection.map((item, index) => {
    const collection = { value: index, label: item.heading }
    courseCollections.push(collection)
    item.courses.map(it => {
      allCoursesArray.push(it)
    })
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
    const pos =
      collectionsRef.current[el].getBoundingClientRect().top +
      window.pageYOffset -
      window.innerHeight / 10
    window.scrollTo({ top: pos, behavior: "smooth" })
  }

  const handleScroll = () => {
    const position =
      dropdownRef.current.getBoundingClientRect().top +
      window.pageYOffset -
      window.innerHeight / 10

    if (position < window.scrollY) {
      setShowBackToTop(true)
    } else {
      setShowBackToTop(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToDropdown = () => {
    const pos =
      dropdownRef.current.getBoundingClientRect().top +
      window.pageYOffset -
      window.innerHeight / 10
    window.scrollTo({ top: pos, behavior: "smooth" })
  }

  return (
    <Layout
      pageContext={pageContext}
      location={location}
      crumbLabel={heading}
      pageName={heading}
    >
      <Seo title={heading} />
      <ModalProvider backgroundComponent={FadingBackground}>
        <CoursesIntro heading={heading} intro={intro} />
        <div ref={dropdownRef}>
          <CoursesSearch
            options={courseCollections}
            allCoursesArray={allCoursesArray}
            searchText={searchText}
            setSearchText={setSearchText}
            excuteScroll={excuteScroll}
          />
        </div>

        {searchText === "" ? (
          coursesSelection.map((item, index) => (
            <div key={index} ref={el => (collectionsRef.current[index] = el)}>
              <CourseCollection
                courseCollection={item}
                toggleModal={toggleModal}
              />
            </div>
          ))
        ) : (
          <SectionContainer marginBottom="70px">
            <CardsWrapper>
              {allCoursesArray
                .filter(
                  course =>
                    course.courseCode
                      .toLowerCase()
                      .includes(searchText.toLowerCase()) ||
                    course.courseName
                      .toLowerCase()
                      .includes(searchText.toLowerCase()) ||
                    course.studyLevel
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                )
                .map(filterCourse => (
                  <CourseCard course={filterCourse} toggleModal={toggleModal} />
                ))}
            </CardsWrapper>
          </SectionContainer>
        )}

        <ScrollWrapper onClick={scrollToDropdown} showBackToTop={showBackToTop}>
          <BackToTopArrow />
        </ScrollWrapper>

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
