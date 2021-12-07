import React, { useEffect, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/Seo/Seo"
import {
  HeroVideo,
  MainContainer,
  CourseContainer,
  StickySideBar,
} from "./index.css"

import {
  CareerSkillSket,
  CareerAccordion,
  Knowmore,
  FooterForm,
  StudentsWork,
  CourseInfo,
  JourneyStarted,
  LiveTutorials,
  Faq,
  EnrolNow,
  Mission,
} from "../../components"
import CourseGuide from "../../components/Forms/CourseGuide/CourseGuide"
import { Container } from "../../styles/ContainerStyles.css"
import { Headline, Paragraph } from "../../styles/Typography.css"
import playbutton from "../../images/svg/playbutton.svg"

const CoursesTemplate = ({ pageContext, location }) => {
  const ref = useRef(null)
  const handleScroll = () => {
    const position = ref.current.getBoundingClientRect().top - window.innerHeight / 10
    position < 0 ? ref.current.style.paddingTop = "5rem" : ref.current.style.paddingTop = "0rem"
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <>
      <Layout
        pageContext={pageContext}
        location={location}
        crumbLabel="Courses"
      >
        <Seo title="Courses" />
        <HeroVideo>
          <StaticImage
            src="../../images/placeholder.png"
            alt="banner background"
            layout="fullWidth"
          />
          <img className="playbutton" src={playbutton} alt="play" />
          <Paragraph>
            Watch video for comprehensive overview of this course
          </Paragraph>
        </HeroVideo>
        <Container>
          <Headline banner>
            ABC123456 - Certificate IV in Account and Bookkeeping
          </Headline>
        </Container>
        <MainContainer>
          <CourseContainer>
            <CourseInfo />
            <JourneyStarted />
            <LiveTutorials />
            <Faq />
            <CareerSkillSket
              course
              title="Where will this course take your career?"
            />
            <CareerAccordion />
            <Knowmore course />
            <Mission />
            <StudentsWork course />
            <FooterForm course />
          </CourseContainer>
          <StickySideBar ref={ref}>
            <CourseGuide course />
            <EnrolNow />
          </StickySideBar>
        </MainContainer>
      </Layout>
    </>
  )
}

export default CoursesTemplate
