import React from "react"
import {
  CourseCardWrapper,
  CardButton,
  CourseNameText,
  ButtonWrapper,
} from "./courses.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { NoneDecorationA } from "../../../styles/ButtonStyles.css"
import { AbsoluteNoneDecorationLink } from "../../../styles/ButtonStyles.css"

const CourseCard = ({ course, toggleModal }) => {
  return (
    <>
      <CourseCardWrapper>
        {course.courseName !== null &&
          course.courseCourse !== null &&
          course.courseCode !== null && (
            <AbsoluteNoneDecorationLink
              to={
                "/courses/" +
                course.courseCode.toLowerCase() +
                "-" +
                course.studyLevel.toLowerCase().replace(/ /g, "-") +
                "_" +
                course.courseName.toLowerCase().replace(/ /g, "-")
              }
              style={{ color: "black" }}
            />
          )}
        <GatsbyImage
          image={getImage(course.heroImage)}
          style={{
            width: "100%",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
          alt="course-card-img"
        />
        <CourseNameText>
          {course.courseCode +
            " - " +
            course.studyLevel +
            " " +
            course.courseName}
        </CourseNameText>
        <ButtonWrapper>
          <NoneDecorationA
            href={
              `https://enrolments.mentor.edu.au/enrol-selfserve?course_code=` +
              course.courseCode +
              `&dc=courseadviser20`
            }
          >
            <CardButton>Enrol Online Now</CardButton>
          </NoneDecorationA>
          <CardButton
            fontSize="21px"
            lineHeight="28px"
            onClick={() => toggleModal(course.courseGuide.file.url)}
          >
            Download Course Guide
          </CardButton>
        </ButtonWrapper>
      </CourseCardWrapper>
    </>
  )
}

export default CourseCard
