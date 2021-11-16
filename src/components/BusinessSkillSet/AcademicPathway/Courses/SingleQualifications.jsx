import React, { useEffect } from "react"
import { CardsWrapper } from "./courseCard.css"
import CourseCard from "./CourseCard"

const SingleQualifications = ({ courses }) => {
  const [singleCourses, setSingleCourses] = React.useState([])
  // if (courses[6].type == "dualQualification") console.log("meh")

  useEffect(() => {
    const newSingleCourses = []
    courses &&
      courses.map(course => {
        if (course.type !== "dualQualification") newSingleCourses.unshift(course)
        return null
      })
    setSingleCourses(newSingleCourses)
  }, [courses])

  return (
    <CardsWrapper>
      {singleCourses.map((course, i) => (
        <CourseCard course={course} key={i} />
      ))}
    </CardsWrapper>
  )
}

export default SingleQualifications
