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

const SessionCard = ({
  image,
  sessionDate,
  course,
  hosts,
  zoomWebinarId,
  toggleModal,
}) => {
  const nowTime = new Date().getTime()
  const parseSessionDate = Date.parse(sessionDate)
  const [signedUp, setSignedUp] = useState(true)
  return (
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
        <CourseDataText color="#DF2F16">Upcoming:{sessionDate}</CourseDataText>
        <CourseDataText color="#DF2F16" host>
          Hosts:
        </CourseDataText>
        <ImageAndButtonWrapper>
          <ImageWrapper>
            {hosts.map(item => (
              <Wrapper key={item.name}>
                <GatsbyImage
                  image={getImage(item.portrait)}
                  style={{ width: "80px", height: "80px", borderRadius: "50%" }}
                />
                <PersonNameText>{item.name}</PersonNameText>
              </Wrapper>
            ))}
          </ImageWrapper>
          <ButtonWrapper>
            {nowTime > parseSessionDate ? (
              <SignUpButton>
                WATCH NOW
              </SignUpButton>
            ) : (
              <SignUpButton onClick={() => toggleModal(zoomWebinarId, signedUp)}>
                SIGN UP
              </SignUpButton>
            )}

            <HintText>**Click anywhere to view detail</HintText>
          </ButtonWrapper>
        </ImageAndButtonWrapper>
      </ContentWrapper>
    </SessionCardWrapper>
  )
}
export default SessionCard
