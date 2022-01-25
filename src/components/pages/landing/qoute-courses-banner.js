import React from "react"
import { QuotesContainer, QuotesWrapper, CoursesButton } from "./landing.css"

const QouteCoursesBanner = () => {
  return (
    <QuotesContainer>
      <QuotesWrapper>
        <h4>
          “Completing the Diploma of Financial Planning led me to gaining a{" "}
          <strong>promotion</strong> and a pay <strong>increase</strong> of
          nearly $10,000...”
        </h4>
        <CoursesButton>Courses</CoursesButton>
      </QuotesWrapper>
    </QuotesContainer>
  )
}

export default QouteCoursesBanner
