import React from "react"
import { Link } from "gatsby"
import {
  CourseCardWrapper,
  CardButton,
  CourseNameText,
  ButtonWrapper,
} from "./schools.css"

const FacultyCard = ({ faculty }) => {
  return (
    <CourseCardWrapper>
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
      <div
        style={{
          width: "100%",
          height: "197px",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
          marginBottom: "13px",
          backgroundColor: "gray",
        }}
      ></div>
      <CourseNameText>{faculty.heading}</CourseNameText>
      <ButtonWrapper>
        <Link
          to={
            "/schools/" +
            faculty.heading
              .toLowerCase()
              .replaceAll(" & ", "-")
              .replaceAll(" ", "-") +
            "/"
          }
        >
          <CardButton fontSize="21px" lineHeight="28px">
            View Faculty
          </CardButton>
        </Link>
      </ButtonWrapper>
      {/* </Link> */}
    </CourseCardWrapper>
  )
}

export default FacultyCard
