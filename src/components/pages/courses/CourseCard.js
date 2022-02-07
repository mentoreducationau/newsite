import React from "react"
// import { Link } from "gatsby"
import {
  CourseCardWrapper,
  CardButton,
  CourseNameText,
  ButtonWrapper,
} from "./courses.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const CourseCard = ({ course, toggleModal }) => {
  return (
    <CourseCardWrapper >
      {/* <Link
        to={
          "/courses/" +
          course.courseCode.toLowerCase() +
          "-" +
          course.studyLevel.toLowerCase().replace(/ /g, "-") +
          "_" +
          course.courseName.toLowerCase().replace(/ /g, "-")
        }
        style={{textDecoration: "none", color: "black"}}
      > */}
        <GatsbyImage
          image={getImage(course.heroImage)}
          style={{
            width: "100%",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            marginBottom: "13px",
          }}
        />
        <CourseNameText>
          {course.courseCode +
            " - " +
            course.studyLevel +
            " " +
            course.courseName}
        </CourseNameText>
        <ButtonWrapper>
          <a
            href="https://enrolments.mentor.edu.au/enrol-selfserve?course_code=courseCodedc=courseadviser20"
            style={{ textDecoration: "none" }}
          >
            <CardButton>Enrol Online Now</CardButton>
          </a>
          <CardButton fontSize="21px" lineHeight="28px" onClick={()=>toggleModal(course.courseGuide.file.url)}>
            Download Course Guide
          </CardButton>
        </ButtonWrapper>
      {/* </Link> */}
    </CourseCardWrapper>
  )
}

export default CourseCard
