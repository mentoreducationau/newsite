import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import { H3, Paragraph } from "../../../../styles/Typography.css"
import CourseGuide from "../../../Forms/CourseGuide/CourseGuide"

import {
  CourseCardModalContainer,
  CourseCardModalWrapper,
  CloseButton,
  LeftContainer,
  InnerWrapper,
  RightContainer,
} from "./courseCard.css"

const CourseCardModal = ({ display, setDisplayModal, course }) => {
  return (
    <CourseCardModalWrapper display={display ? display.toString() : undefined}>
      <CourseCardModalContainer>
        <CloseButton onClick={() => setDisplayModal(false)}>X</CloseButton>

        <InnerWrapper>
          <LeftContainer>
            <StaticImage
              src="../../../../images/card-imgs/photos/eg.png"
              alt="course-modal-image"
            />
            <H3>
              {course.courseCode} - {course.courseName}
            </H3>
            {course.introduction.includes("\n") ? (
              <Paragraph>
                {" "}
                {course.introduction.substring(
                  0,
                  course.introduction.indexOf("\n")
                )}
              </Paragraph>
            ) : (
              <Paragraph>{course.introduction}</Paragraph>
            )}
          </LeftContainer>
          <RightContainer>
            <CourseGuide />
            <H3>
              <a
                href={`https://www.mentor.edu.au/courses/${course.link}`}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Visit Course Page{" "}
              </a>
            </H3>
          </RightContainer>
        </InnerWrapper>
      </CourseCardModalContainer>
    </CourseCardModalWrapper>
  )
}

export default CourseCardModal
