import React from "react"
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

const SessionCard = ({ image, sessionDate, course }) => {
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
        <CourseDataText color="#DF2F16" host>Hosts:</CourseDataText>
        <ImageAndButtonWrapper>
          <ImageWrapper>
            <Wrapper>
              <StaticImage
                src="../../../images/mask-group.png"
                style={{ width: "80px", height: "80px", borderRadius: "50%" }}
              />
              <PersonNameText>Joe Bloggs</PersonNameText>
            </Wrapper>
            <Wrapper>
              <StaticImage
                src="../../../images/mask-group.png"
                style={{ width: "80px", height: "80px", borderRadius: "50%" }}
              />
              <PersonNameText>Joe Bloggs</PersonNameText>
            </Wrapper>
            <Wrapper>
              <StaticImage
                src="../../../images/mask-group.png"
                style={{ width: "80px", height: "80px", borderRadius: "50%" }}
              />
              <PersonNameText>Joe Bloggs</PersonNameText>
            </Wrapper>
          </ImageWrapper>
          <ButtonWrapper>
            <SignUpButton>Sign Up</SignUpButton>
            <HintText>**Click anywhere to view detail</HintText>
          </ButtonWrapper>
        </ImageAndButtonWrapper>
      </ContentWrapper>
    </SessionCardWrapper>
  )
}
export default SessionCard
