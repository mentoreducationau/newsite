import React, { useRef, useState } from "react"
import styled from "styled-components"
import SessionLayout from "../../components/pages/studentSessionsTemplate/SessionLayout"
import Seo from "../../components/Seo/Seo"
import { ModalProvider, BaseModalBackground } from "styled-react-modal"
import {
  MainContainer,
  CourseDataContainer,
  StickySideBar,
  PriceButton,
  WatchNowSection,
  WatchNowTitle,
  IframeWrapper,
} from "./index.css"

import { EnrolNow } from "../../components"
import { Container } from "../../styles/ContainerStyles.css"
import { Headline, H3 } from "../../styles/Typography.css"
import CourseInfo from "../../components/JourneyStarted"
import { Knowmore } from "../../components"
import { JourneyStarted } from "../../components"
import { StudentsWork } from "../../components"
import { FooterForm } from "../../components"
import Form from "./Form"
import ThankyouModal from "../../components/pages/studentInformationSession/ThankyouModal"

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${props => props.opacity};
  align-items: start;
  transition: all 0.3s ease-in-out;
`

const StudentInformationSessionTemplate = ({ pageContext, location }) => {
  const sessionData = pageContext.sessionData
  const nowTime = new Date().getTime()
  const parseSessionDate = Date.parse(sessionData.sessionDate)
  const status = nowTime > parseSessionDate
  const screenHeight = window.innerHeight
  const ref = useRef(null)
  const [dateStatus, setDateStatus] = useState(true)

  const excuteScroll = () => {
    const pos = ref.current.getBoundingClientRect().top + window.pageYOffset - window.innerHeight/10
    window.scrollTo({ top: pos, behavior: "smooth" })
  }
  const [isOpen, setIsOpen] = useState(false)
  const [opacity, setOpacity] = useState(0)
  const [selectedZoomWebinarId, setSelectedZoomWebinarId] = useState(0)
  const [courseUrl, setCourseUrl] = useState("")

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
    <SessionLayout
      pageContext={pageContext}
      location={location}
      crumbLabel="session"
      sessionData={sessionData}
      status={status}
    >
      <Seo title="session" />
      <ModalProvider backgroundComponent={FadingBackground}>
        <Container>
          <Headline banner>
            {sessionData.course.courseCode +
              " - " +
              sessionData.course.studyLevel +
              " " +
              sessionData.course.courseName}
          </Headline>
        </Container>
        <MainContainer>
          <CourseDataContainer>
            {nowTime > parseSessionDate && (
              <WatchNowSection>
                <WatchNowTitle>WATCH NOW</WatchNowTitle>
                <IframeWrapper>
                  <iframe
                    src={sessionData.youtubeUrl.file.url}
                    frameborder="0"
                    webkitallowfullscreen=""
                    mozallowfullscreen=""
                    allowfullscreen=""
                    title="pathway-iframe-1"
                  ></iframe>
                </IframeWrapper>
              </WatchNowSection>
            )}

            <CourseInfo
              outcomes={sessionData.course.outcomes}
              entryRequirements={sessionData.course.entryRequirements}
              unitsDelivery={sessionData.course.unitsDelivery}
              learningExperience={sessionData.course.learningExperience}
              paymentOptions={sessionData.course.paymentOptions}
              landingIntro={sessionData.course.landingIntro}
            />
            <JourneyStarted />
            <Knowmore course />
            <StudentsWork course />
            <div ref={ref}>
              <FooterForm course />
            </div>
          </CourseDataContainer>
          <StickySideBar screenHeight={screenHeight / 10}>
            {!status ? (
              <>
                <Form course title="Register" buttonTitle="Register NOW!" />
                <Form
                  course
                  title="DownLoad Course Guide"
                  buttonTitle="Download"
                />
                <div>
                  <H3
                    course
                    style={{
                      textAlign: "center",
                      marginTop: "19px",
                    }}
                  >
                    ENROL NOW
                  </H3>
                  <a href="https://enrolments.mentor.edu.au/enrol-selfserve?course_code=${courseCode}&dc=courseadviser20">
                    <PriceButton>ENROL</PriceButton>
                  </a>
                </div>
              </>
            ) : (
              <>
                <Form
                  course
                  title="DownLoad Course Guide"
                  buttonTitle="Download"
                />
                <EnrolNow price="999" excuteScroll={excuteScroll} />
              </>
            )}
          </StickySideBar>
          <ThankyouModal
            isOpen={isOpen}
            opacity={opacity}
            toggleModal={toggleModal}
            afterOpen={afterOpen}
            beforeClose={beforeClose}
            courseUrl={courseUrl}
          />
        </MainContainer>
      </ModalProvider>
    </SessionLayout>
  )
}

export default StudentInformationSessionTemplate
