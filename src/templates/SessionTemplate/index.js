import React, { useRef, useState } from "react"
import {
  MainContainer,
  CourseContainer,
  StickySideBar,
  PriceButton,
} from "./index.css"

import { EnrolNow } from "../../components"
import { H3 } from "../../styles/Typography.css"
import Form from "./Form"

const SessionTemplate = () => {
  const screenHeight = window.innerHeight
  const ref = useRef(null)
  const [dateStatus, setDateStatus] = useState(true)

  const excuteScroll = () => {
    // const pos = ref.current.getBoundingClientRect().top + window.pageYOffset - window.innerHeight/10
    // window.scrollTo({ top: pos, behavior: "smooth" })
  }

  return (
    <>
      <MainContainer>
        <CourseContainer></CourseContainer>
        <StickySideBar screenHeight={screenHeight / 10}>
          {dateStatus ? (
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
      </MainContainer>
    </>
  )
}

export default SessionTemplate
