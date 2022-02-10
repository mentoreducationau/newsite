import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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
import { NoneDecorationLink } from "../../../styles/ButtonStyles.css"

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
  const courseUrl =
    course.courseCode.toLowerCase() +
    "-" +
    course.studyLevel.toLowerCase().replace(/ /g, "-") +
    "_" +
    course.courseName.toLowerCase().replace(/ /g, "-")
  const sessionUrl = courseUrl + "-" + sessionDate.replaceAll("-", "")
  const [signedUp, setSignedUp] = useState(false)

  return (
    <>
      {nowTime > parseSessionDate ? (
        <NoneDecorationLink
          to={"/student-information-session/" + sessionUrl}
          style={{ color: "hsla(0, 0%, 0%, 0.8)" }}
        >
          <SessionCardWrapper>
            <GatsbyImage
              image={getImage(image)}
              style={{ width: "50%" }}
              alt="session-card-img"
            />
            <ContentWrapper>
              <CourseDataText>
                {course.courseCode +
                  " - " +
                  course.studyLevel +
                  " " +
                  course.courseName}
              </CourseDataText>
              <CourseDataText color="#DF2F16">
                Session Date: {sessionDate}
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
                        alt="image-and-button-img"
                      />
                      <PersonNameText>{item.name}</PersonNameText>
                    </Wrapper>
                  ))}
                </ImageWrapper>
                <ButtonWrapper>
                  {/* {nowTime > parseSessionDate ? ( */}
                    <SignUpButton
                      onClick={() => toggleThankyouModal(sessionUrl, courseUrl)}
                    >
                      WATCH NOW
                    </SignUpButton>
                  {/* ) : signedUp ? (
                    <SignUpButton
                      onClick={() => toggleThankyouModal(sessionUrl, courseUrl)}
                    >
                      SIGN UP
                    </SignUpButton>
                  ) : (
                    <SignUpButton
                      onClick={() =>
                        toggleModal(zoomWebinarId, sessionUrl, courseUrl)
                      }
                    >
                      SIGN UP
                    </SignUpButton>
                  )} */}

                  <HintText>**Click anywhere to view detail</HintText>
                </ButtonWrapper>
              </ImageAndButtonWrapper>
            </ContentWrapper>
          </SessionCardWrapper>
        </NoneDecorationLink>
      ) : (
        <SessionCardWrapper>
          <GatsbyImage
            image={getImage(image)}
            style={{ width: "50%" }}
            alt="session-card-img"
          />
          <ContentWrapper>
            <CourseDataText>
              {course.courseCode +
                " - " +
                course.studyLevel +
                " " +
                course.courseName}
            </CourseDataText>
            <CourseDataText color="#DF2F16">
              Upcoming: {sessionDate}
            </CourseDataText>
            <CourseDataText color="#DF2F16" host>
              Hosts:
            </CourseDataText>
            <ImageAndButtonWrapper>
              <ImageWrapper>
                {hosts.map((item, index) => (
                  <Wrapper key={index}>
                    <GatsbyImage
                      image={getImage(item.portrait)}
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                      }}
                      alt="img-test"
                    />
                    <PersonNameText>{item.name}</PersonNameText>
                  </Wrapper>
                ))}
              </ImageWrapper>
              <ButtonWrapper>
                {/* {nowTime > parseSessionDate ? (
                  <SignUpButton
                    onClick={() => toggleThankyouModal(sessionUrl, courseUrl)}
                  >
                    WATCH NOW
                  </SignUpButton>
                ) :  */}
                {signedUp ? (
                  <SignUpButton
                    onClick={() => toggleThankyouModal(sessionUrl, courseUrl)}
                  >
                    SIGN UP
                  </SignUpButton>
                ) : (
                  <SignUpButton
                    onClick={() =>
                      toggleModal(zoomWebinarId, sessionUrl, courseUrl)
                    }
                  >
                    SIGN UP
                  </SignUpButton>
                )}

                <HintText>**Click anywhere to view detail</HintText>
              </ButtonWrapper>
            </ImageAndButtonWrapper>
          </ContentWrapper>
        </SessionCardWrapper>
      )}
    </>
  )
}
export default SessionCard
