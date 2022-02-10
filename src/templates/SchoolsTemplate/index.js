import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { ModalProvider, BaseModalBackground } from "styled-react-modal"
import Layout from "../../components/layout"
import Seo from "../../components/Seo/Seo"
import CoursesIntro from "../../components/pages/courses/Intro"
import CourseCollection from "../../components/pages/courses/CourseCollection"
import DownloadModal from "../../components/Modals/DownloadModal"
import ThankyouModal from "../../components/pages/studentInformationSession/ThankyouModal"
import {
  BackToTopArrow,
  ScrollWrapper,
} from "../../components/pages/courses/courses.css"

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${props => props.opacity};
  align-items: start;
  transition: all 0.3s ease-in-out;
`

const SchoolsTemplate = ({ pageContext, location }) => {
  const schoolData = pageContext.schoolData
  const intro =
    "The School of Accounting and Finance is one of three schools within Mentor Education. The school offers a range of courses from Certificate III to Advanced Diploma Level, with pathways to higher education. The school provides education and training for students seeking formal qualifications in careers from Bookkeepers and Accountants to Paraplanners and Assistant Financial Advisers (in a non-advice providing capacity).Mentor Education is committed to providing our students with skill and knowledge that is relevant, current and focusses on the future as well as the present. Our courses are developed not only to meet the Australian context but are relevant to the world of business across a number of industries."

  const [isOpen, setIsOpen] = useState(false)
  const [isThankyouOpen, setIsThankyouOpen] = useState(false)
  const [opacity, setOpacity] = useState(0)
  const [selectedZoomWebinarId, setSelectedZoomWebinarId] = useState(0)
  const [courseGuide, setCourseGuide] = useState("")
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

  const toggleThankyouModal = (sUrl, cUrl) => {
    setOpacity(0)
    // setCourseUrl(cUrl)
    // setSessionUrl(sUrl)
    setIsThankyouOpen(!isThankyouOpen)
  }

  const toggleModal = courseGuide => {
    setOpacity(0)
    setCourseGuide(courseGuide)
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

  const onDownload = () => {
    window.open(courseGuide, '_blank', 'noopener,noreferrer')
    setTimeout(() => {
      toggleThankyouModal()
    }, 2000);
  }

  return (
    <Layout
      pageContext={pageContext}
      location={location}
      crumbLabel={schoolData.heading}
      pageName="Schools"
    >
      <Seo title={schoolData.heading} />
      <ModalProvider backgroundComponent={FadingBackground}>
        <div ref={ref}>
          <CoursesIntro heading={schoolData.heading} intro={intro} />
        </div>
        {schoolData.faculties.map(faculty =>
          faculty.courseSections.map((courseSection, idx) => (
            <CourseCollection
              courseCollection={courseSection}
              toggleModal={toggleModal}
              key={idx}
            />
          ))
        )}
        <DownloadModal
          isOpen={isOpen}
          opacity={opacity}
          toggleModal={toggleModal}
          afterOpen={afterOpen}
          beforeClose={beforeClose}
          zoomWebinarId={selectedZoomWebinarId}
          onDownload={onDownload}
        />
        <ThankyouModal
          isOpen={isThankyouOpen}
          opacity={opacity}
          toggleModal={toggleThankyouModal}
          afterOpen={afterOpen}
          beforeClose={beforeClose}
          // courseUrl={courseUrl}
          // sessionUrl={sessionUrl}
        />
        <ScrollWrapper onClick={scrollToTop} showBackToTop={showBackToTop}>
          <BackToTopArrow />
        </ScrollWrapper>
      </ModalProvider>
    </Layout>
  )
}

export default SchoolsTemplate
