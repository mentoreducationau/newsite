import React from "react"
import { StaticImage } from "gatsby-plugin-image" 

import CourseCardModal from "./CourseCardModal"
import { useDisableBodyScroll } from "../../../../utils/bodyScroll"

import {
  CourseCardContainer,
  CourseCardWrapper,
  CourseCardTitle,
  CourseCardButton,
  CourseCardButtonContainer,
} from "./courseCard.css"
import { H4 } from "../../../../styles/Typography.css"

const CourseCard = ({ course, dualCourse = false }) => {
//   console.log(`course`, course)
  const [displayModal, setDisplayModal] = React.useState(false)

  useDisableBodyScroll(displayModal)

  if (course === []) return null

  return (
    <CourseCardContainer>
      <CourseCardWrapper>
        <StaticImage src="../../../../images/card-imgs/acc/eg.png" alt="course-image" />
        {!dualCourse && (
          <CourseCardTitle>
            <H4 card>{course.courseCode} —</H4> {course.courseName}
          </CourseCardTitle>
        )}
        {dualCourse && (
          <>
            <CourseCardTitle>{course.courseName}</CourseCardTitle>
            <CourseCardTitle>
              {course.courseA.courseCode} - {course.courseA.courseName}
            </CourseCardTitle>
            <CourseCardTitle>
              {course.courseB.courseCode} - {course.courseB.courseName}
            </CourseCardTitle>
          </>
        )}
        <CourseCardButtonContainer>
          {/* <CourseCardButton>Course Guide</CourseCardButton> */}
          <CourseCardButton onClick={() => setDisplayModal(true)}>
            Find Out More
          </CourseCardButton>
        </CourseCardButtonContainer>
      </CourseCardWrapper>
      <CourseCardModal
        display={displayModal}
        course={course}
        setDisplayModal={setDisplayModal}
      />
    </CourseCardContainer>
  )
}

export default CourseCard
