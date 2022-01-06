import React from "react"
import { SectionContainer } from "../../../styles/ContainerStyles.css"
import { CourseCollectionHeadingText, CardsWrapper } from "./schools.css"
import FacultyCard from "./FacultyCard"

const FacultyCollection = ({ school }) => {
  return (
    <SectionContainer marginBottom="70px">
      <CourseCollectionHeadingText>{school.heading}</CourseCollectionHeadingText>
      <CardsWrapper>
        {school.faculties.map((it, idx) => (
          <FacultyCard
            key={idx}
            faculty={it}
          />
        ))}
      </CardsWrapper>
    </SectionContainer>
  )
}
export default FacultyCollection
