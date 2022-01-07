import React from "react"
import { SectionContainer } from "../../../styles/ContainerStyles.css"
import { CourseCollectionHeadingText, CardsWrapper } from "./courses.css"
import CourseCard from "./CourseCard"

const CourseCollection = ({ courseCollection }) => {
  return (
    <SectionContainer marginBottom="70px">
      <CourseCollectionHeadingText>{courseCollection.heading}</CourseCollectionHeadingText>
      <CardsWrapper>
        {courseCollection.courses.map((it, idx) => (
          <CourseCard
            key={idx}
            course={it}
          />
        ))}
      </CardsWrapper>
    </SectionContainer>
  )
}
export default CourseCollection
