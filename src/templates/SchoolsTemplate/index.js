import React, { useState } from "react"
import styled from "styled-components"
import { ModalProvider, BaseModalBackground } from "styled-react-modal"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import CoursesIntro from "../../components/pages/schools/Intro"
import CourseCollection from "../../components/pages/courses/CourseCollection"
import SignUpModal from "../../components/pages/studentInformationSession/SignUpModal"

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
      crumbLabel={schoolData.heading}
      pageName="Schools"
    >
      <Seo title={schoolData.heading} />
      <ModalProvider backgroundComponent={FadingBackground}>
        <CoursesIntro heading={schoolData.heading} intro={intro} />
        {schoolData.faculties.map(faculty =>
          faculty.courseSections.map((courseSection, idx) => (
            <CourseCollection courseCollection={courseSection} toggleModal={toggleModal} key={idx} />
          ))
        )}
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

export default SchoolsTemplate
