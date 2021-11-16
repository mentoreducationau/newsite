import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import {
  CourseCardContainer,
  CourseCardWrapper,
  CourseCardTitle,
  CourseCardButton,
  CourseCardButtonContainer,
} from "./index.css"
import { H4 } from "../../styles/Typography.css"

const CourseCard = ({ course }) => {
  return (
    <CourseCardContainer>
      <CourseCardWrapper>
        <StaticImage
          src="../../images/card-imgs/acc/courseImage.png"
          alt="course-image"
          layout="fullWidth"
        />
        <CourseCardTitle>
          <H4 card>{course.courseCode} — {course.courseName}</H4>
        </CourseCardTitle>
        <CourseCardButtonContainer>
          <CourseCardButton>Course Guide</CourseCardButton>
        </CourseCardButtonContainer>
      </CourseCardWrapper>
    </CourseCardContainer>
  )
}

export default CourseCard
