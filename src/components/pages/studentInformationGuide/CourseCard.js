import React from "react"
import {
  CourseCardWrapper,
  CardButton,
  CourseNameText,
  ButtonWrapper,
} from "./courses.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { NoneDecorationA, NoneDecorationLink } from "../../../styles/ButtonStyles.css"

const CourseCard = ({ course }) => {
  return (
    <CourseCardWrapper>
      <GatsbyImage
        image={getImage(course.heroImage)}
        style={{
          width: "100%",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
          marginBottom: "13px",
        }}
        alt="course-card-img"
      />
      <CourseNameText enrol={course.enrolmentForm}>
        {course.courseCode +
          " - " +
          course.studyLevel +
          " " +
          course.courseName}
      </CourseNameText>
      <ButtonWrapper enrol={course.enrolmentForm}>
        <NoneDecorationLink
          to={
            "/courses/" +
            course.courseCode.toLowerCase() +
            "-" +
            course.studyLevel.toLowerCase().replace(/ /g, "-") +
            "_" +
            course.courseName.toLowerCase().replace(/ /g, "-")
          }
          style={{ color: "black" }}
        >
          <CardButton>Enrol Now</CardButton>
        </NoneDecorationLink>
        {course.enrolmentForm && (
          <NoneDecorationA
            href={course.enrolmentForm.file.url}
            target="_blank"
            rel="noreferrer"
          >
            <CardButton>Enrolment Form</CardButton>
          </NoneDecorationA>
        )}

        <NoneDecorationA
          href={course.courseGuide.file.url}
          target="_blank"
          rel="noreferrer"
        >
          <CardButton>Brouchure</CardButton>
        </NoneDecorationA>
      </ButtonWrapper>
    </CourseCardWrapper>
  )
}

export default CourseCard
