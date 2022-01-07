import React from "react"
import { Link } from "gatsby"
import {
  CourseCardWrapper,
  CardButton,
  CourseNameText,
  ButtonWrapper,
} from "./courses.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
      />
      <CourseNameText enrol={course.enrolmentForm}>
        {course.courseCode +
          " - " +
          course.studyLevel +
          " " +
          course.courseName}
      </CourseNameText>
      <ButtonWrapper enrol={course.enrolmentForm}>
        <Link
          to={
            "/courses/" +
            course.courseCode.toLowerCase() +
            "-" +
            course.studyLevel.toLowerCase().replace(/ /g, "-") +
            "_" +
            course.courseName.toLowerCase().replace(/ /g, "-")
          }
          style={{ textDecoration: "none", color: "black" }}
        >
          <CardButton>Enrol Now</CardButton>
        </Link>
        {course.enrolmentForm && (
          <a
            href={course.enrolmentForm.file.url}
            target="_blank"
            rel="noreferrer"
            rel="noopener"
          >
            <CardButton>Enrolment Form</CardButton>
          </a>
        )}

        <a
          href={course.courseGuide.file.url}
          target="_blank"
          rel="noreferrer"
          rel="noopener"
        >
          <CardButton>Brouchure</CardButton>
        </a>
      </ButtonWrapper>
    </CourseCardWrapper>
  )
}

export default CourseCard
