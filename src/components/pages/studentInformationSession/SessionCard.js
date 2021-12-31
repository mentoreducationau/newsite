import React, { useState } from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import {
  SessionCardWrapper,
  ContentWrapper,
  CourseDataText,
  ImageAndButtonWrapper,
  ImageWrapper,
  ButtonWrapper,
  SignUpButton,
  HintText,
  Wrapper,
  PersonNameText,
} from "./sis.css"
import { Link } from "gatsby"

const SessionCard = ({
  image,
  sessionDate,
  course,
  hosts,
  zoomWebinarId,
  toggleModal,
  toggleThankyouModal,
}) => {
  const nowTime = new Date().getTime()
  const parseSessionDate = Date.parse(sessionDate)
  const urlDate = sessionDate.replaceAll("-", "")
  const [signedUp, setSignedUp] = useState(false)
  console.log(parseSessionDate)
  return (
    <>
      {/* <Link
        to={
          "/student-information-session/" +
          course.courseCode.toLowerCase() +
          "-" +
          course.studyLevel.toLowerCase().replace(/ /g, "-") +
          "_" +
          course.courseName.toLowerCase().replace(/ /g, "-") +
          "-" +
          urlDate
        }
      > */}
        <SessionCardWrapper>
          <GatsbyImage image={getImage(image)} style={{ width: "50%" }} />
          <ContentWrapper>
            <CourseDataText>
              {course.courseCode +
                " - " +
                course.studyLevel +
                " " +
                course.courseName}
            </CourseDataText>
            <CourseDataText color="#DF2F16">
              {nowTime > parseSessionDate ? "Session Date: " : "Upcoming: "}
              {sessionDate}
            </CourseDataText>
            <CourseDataText color="#DF2F16" host>
              Hosts:
            </CourseDataText>
            <ImageAndButtonWrapper>
              <ImageWrapper>
                {hosts.map(item => (
                  <Wrapper key={item.name}>
                    <GatsbyImage
                      image={getImage(item.portrait)}
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                      }}
                    />
                    <PersonNameText>{item.name}</PersonNameText>
                  </Wrapper>
                ))}
              </ImageWrapper>
              <ButtonWrapper>
                {nowTime > parseSessionDate ? (
                  <SignUpButton
                    onClick={() =>
                      toggleThankyouModal(
                        course.courseCode.toLowerCase() +
                          "-" +
                          course.studyLevel.toLowerCase().replace(/ /g, "-") +
                          "_" +
                          course.courseName.toLowerCase().replace(/ /g, "-") +
                          "-" +
                          urlDate
                      )
                    }
                  >
                    WATCH NOW
                  </SignUpButton>
                ) : signedUp ? (
                  <SignUpButton
                    onClick={() =>
                      toggleThankyouModal(
                        course.courseCode.toLowerCase() +
                          "-" +
                          course.studyLevel.toLowerCase().replace(/ /g, "-") +
                          "_" +
                          course.courseName.toLowerCase().replace(/ /g, "-") +
                          "-" +
                          urlDate
                      )
                    }
                  >
                    SIGN UP
                  </SignUpButton>
                ) : (
                  <SignUpButton onClick={() => toggleModal(zoomWebinarId)}>
                    SIGN UP
                  </SignUpButton>
                )}

                <HintText>**Click anywhere to view detail</HintText>
              </ButtonWrapper>
            </ImageAndButtonWrapper>
          </ContentWrapper>
        </SessionCardWrapper>
      {/* </Link> */}
    </>
  )
}
export default SessionCard
