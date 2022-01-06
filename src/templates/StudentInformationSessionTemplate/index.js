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
import DownloadThankyouModal from "./DownloadThankyouModal"

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${props => props.opacity};
  align-items: start;
  transition: all 0.3s ease-in-out;
`

const StudentInformationSessionTemplate = ({ pageContext, location }) => {
  const sessionData = pageContext.sessionData
  const nowTime = new Date().getTime()
  const parseSessionDate = Date.parse(sessionData.sessionDate)
  const courseUrl =
    sessionData.course.courseCode.toLowerCase() +
    "-" +
    sessionData.course.studyLevel.toLowerCase().replace(/ /g, "-") +
    "_" +
    sessionData.course.courseName.toLowerCase().replace(/ /g, "-")
  const sessionUrl =
    courseUrl + "-" + sessionData.sessionDate.toLowerCase().replace(/-/g, "")
  const status = nowTime > parseSessionDate
  const screenHeight = window.innerHeight
  const [isThankyouOpen, setIsThankyouOpen] = useState(false)
  const [opacity, setOpacity] = useState(0)

  const toggleThankyouModal = () => {
    setOpacity(0)
    setIsThankyouOpen(!isThankyouOpen)
  }

  const openDownloadWindow = () => {
    setTimeout(() => {
      window.open("", '_blank', 'noopener,noreferrer')
    }, 3000);
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

  const ref = useRef(null)
  const excuteScroll = () => {
    const pos =
      ref.current.getBoundingClientRect().top +
      window.pageYOffset -
      window.innerHeight / 10
    window.scrollTo({ top: pos, behavior: "smooth" })
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
            {status && (
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
                <Form
                  course
                  title="Register"
                  buttonTitle="Register NOW!"
                  toggleModal={toggleThankyouModal}
                />
                <Form
                  course
                  title="DownLoad Course Guide"
                  buttonTitle="Download"
                  toggleModal={toggleThankyouModal}
                  openDownloadWindow={openDownloadWindow}
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
                  {/* <a href="https://enrolments.mentor.edu.au/enrol-selfserve?course_code=${courseCode}&dc=courseadviser20"> */}
                    <PriceButton>ENROL</PriceButton>
                  {/* </a> */}
                </div>
              </>
            ) : (
              <>
                <Form
                  course
                  title="DownLoad Course Guide"
                  buttonTitle="Download"
                  toggleModal={toggleThankyouModal}
                  openDownloadWindow={openDownloadWindow}
                />
                <EnrolNow price={sessionData.course.pricing.salePrice} excuteScroll={excuteScroll} />
              </>
            )}
          </StickySideBar>
          <DownloadThankyouModal
            isOpen={isThankyouOpen}
            opacity={opacity}
            toggleModal={toggleThankyouModal}
            afterOpen={afterOpen}
            beforeClose={beforeClose}
            courseUrl={courseUrl}
            sessionUrl={sessionUrl}
          />
        </MainContainer>
      </ModalProvider>
    </SessionLayout>
  )
}

export default StudentInformationSessionTemplate
