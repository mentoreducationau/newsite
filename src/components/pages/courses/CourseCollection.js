import React from "react"
import { SectionContainer } from "../../../styles/ContainerStyles.css"
import { CourseCollectionHeadingText, CardsWrapper } from "./courses.css"
import CourseCard from "./CourseCard"

const CourseCollection = ({ courseCollection, toggleModal }) => {
  return (
    <SectionContainer>
      <CourseCollectionHeadingText>{courseCollection.heading}</CourseCollectionHeadingText>
      <CardsWrapper>
        {courseCollection.courses.map((it, idx) => (
          <CourseCard
            key={idx}
            course={it}
            toggleModal={toggleModal}
          />
        ))}
      </CardsWrapper>
    </SectionContainer>
  )
}
export default CourseCollection
