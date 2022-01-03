import React, { useRef } from "react"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/Seo/Seo"
import {
  // HeroVideo,
  MainContainer,
  CourseContainer,
  StickySideBar,
} from "./index.css"

import {
  // CareerSkillSket,
  // CareerAccordion,
  Knowmore,
  FooterForm,
  StudentsWork,
  CourseInfo,
  JourneyStarted,
  // LiveTutorials,
  // Faq,
  EnrolNow,
  // Mission,
} from "../../components"
import CourseGuide from "../../components/Forms/CourseGuide/CourseGuide"
import { Container } from "../../styles/ContainerStyles.css"
import { Headline } from "../../styles/Typography.css"
// import playbutton from "../../images/svg/playbutton.svg"

const CoursesTemplate = ({ pageContext, location }) => {
  const courseData = pageContext.courseData
  const screenHeight = window.innerHeight
  const ref = useRef(null)

  const excuteScroll = () => {
    const pos = ref.current.getBoundingClientRect().top + window.pageYOffset - window.innerHeight/10
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
        {/* <HeroVideo>
          <StaticImage
            src="../../images/placeholder.png"
            alt="banner background"
            layout="fullWidth"
          />
          <img className="playbutton" src={playbutton} alt="play" />
          <Paragraph>
            Watch video for comprehensive overview of this course
          </Paragraph>
        </HeroVideo> */}
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
            {/* <LiveTutorials /> */}
            {/* <Faq /> */}
            {/* <CareerSkillSket
              course
              title="Where will this course take your career?"
            /> */}
            {/* <CareerAccordion /> */}
            <Knowmore course />
            {/* <Mission /> */}
            <StudentsWork course />
            <div ref={ref}>
              <FooterForm course />
            </div>
          </CourseContainer>
          <StickySideBar screenHeight={screenHeight / 10}>
            <CourseGuide course />
            <EnrolNow price={courseData.pricing.salePrice} excuteScroll={excuteScroll} />
          </StickySideBar>
        </MainContainer>
      </Layout>
    </>
  )
}

export default CoursesTemplate
