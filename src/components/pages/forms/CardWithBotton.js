import React from "react"
import { Link } from "gatsby"
import { Paragraph } from "../../../styles/Typography.css"
import { CourseCardWrapper } from "../../ImageGrid/index.css"
import {
  ButtonWrapper,
  ButtonsGroup,
  RightWrapper,
  CardWrapper,
  LeftWrapper,
} from "./index.css"

const CardWithButton = ({ course }) => {
  return (
    <CourseCardWrapper style={{ padding: "0" }}>
      <CardWrapper>
        <LeftWrapper>
          <Paragraph style={{ marginBottom: "0" }}>
            <Link
              to={
                "/courses/" +
                course.courseCode.toLowerCase() +
                "-" +
                course.studyLevel.toLowerCase().replace(/ /g, "-") +
                "_" +
                course.courseName.toLowerCase().replace(/ /g, "-")
              }
            >
              {course.courseCode +
                " - " +
                course.studyLevel +
                " " +
                course.courseName}
            </Link>
          </Paragraph>
          <ButtonsGroup>
            <ButtonWrapper>
              <Link to={course.courseGuide.file.url}>
                <button className="waves-effect waves-light btn red">
                  BROCHURE
                  <i className="material-icons right">play_circle_outline</i>
                </button>
              </Link>
            </ButtonWrapper>
            <ButtonWrapper>
              <a
                href="https://enrolments.mentor.edu.au/enrol-selfserve?course_code=courseCodedc=courseadviser20"
                style={{ textDecoration: "none" }}
              >
                <button className="waves-effect waves-light btn red">
                  ENROL ONLINE
                  <i className="material-icons right">play_circle_outline</i>
                </button>
              </a>
            </ButtonWrapper>
            <ButtonWrapper style={{ marginBottom: "0" }}>
              <Link to={course.enrolmentForm.file.url}>
                <button className="waves-effect waves-light btn red">
                  ENROLMENT FORM
                  <i className="material-icons right">play_circle_outline</i>
                </button>
              </Link>
            </ButtonWrapper>
          </ButtonsGroup>
        </LeftWrapper>
        <RightWrapper></RightWrapper>
      </CardWrapper>
    </CourseCardWrapper>
  )
}

export default CardWithButton
