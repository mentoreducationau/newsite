import React, { useRef } from "react"

import Layout from "../../components/layout"
import Seo from "../../components/Seo/Seo"
import {
  MainContainer,
  CourseContainer,
  StickySideBar,
} from "./index.css"
import {
  Knowmore,
  FooterForm,
  StudentsWork,
  CourseInfo,
  JourneyStarted,
  EnrolNow,
} from "../../components"
import MobileStickyBar from "./MobileStickyBar"
import CourseGuide from "../../components/Forms/CourseGuide/CourseGuide"
import { Container } from "../../styles/ContainerStyles.css"
import { Headline } from "../../styles/Typography.css"


const CoursesTemplate = ({ pageContext, location }) => {
  const courseData = pageContext.courseData
  const screenHeight = window.innerHeight
  const ref = useRef(null)

  const excuteScroll = () => {
    const pos =
      ref.current.getBoundingClientRect().top +
      window.pageYOffset -
      window.innerHeight / 10
    window.scrollTo({ top: pos, behavior: "smooth" })
  }

  return (
    <>
      <Layout
        pageContext={pageContext}
        location={location}
        crumbLabel={
          courseData.courseCode +
          " - " +
          courseData.studyLevel +
          " " +
          courseData.courseName
        }
        pageName={
          courseData.courseCode +
          " - " +
          courseData.studyLevel +
          " " +
          courseData.courseName
        }
        background={courseData.heroImage.file.url}
      >
        <Seo
          title={
            courseData.courseCode +
            " - " +
            courseData.studyLevel +
            " " +
            courseData.courseName
          }
        />
        
        <MobileStickyBar price={courseData.pricing.salePrice} />
        <Container>
          <Headline banner>
            {courseData.courseCode +
              " - " +
              courseData.studyLevel +
              " " +
              courseData.courseName}
          </Headline>
        </Container>
        <MainContainer>
          <CourseContainer>
            <CourseInfo
              outcomes={courseData.outcomes}
              entryRequirements={courseData.entryRequirements}
              unitsDelivery={courseData.unitsDelivery}
              learningExperience={courseData.learningExperience}
              paymentOptions={courseData.paymentOptions}
              landingIntro={courseData.landingIntro}
            />
            <JourneyStarted />
            <Knowmore course />
            <StudentsWork course />
            <div ref={ref}>
              <FooterForm course />
            </div>
          </CourseContainer>
          <StickySideBar screenHeight={screenHeight / 10}>
            <CourseGuide course />
            <EnrolNow
              price={courseData.pricing.salePrice}
              excuteScroll={excuteScroll}
            />
          </StickySideBar>
        </MainContainer>
      </Layout>
    </>
  )
}

export default CoursesTemplate
