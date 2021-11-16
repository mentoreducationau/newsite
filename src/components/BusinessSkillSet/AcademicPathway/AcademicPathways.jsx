import React from "react"

import SingleQualification from "./Courses/SingleQualifications"
import DualQualifications from "./Courses/DualQualifications"

import { courses } from "../courses"

import { Container, SectionWrapper } from "../../../styles/ContainerStyles.css"
import { CardsHeaderWrapper, TitleWrapper, CardsHeader } from "./AcademicPathway.css"

const AcademicPathways = () => {
  const [cards, setCards] = React.useState("single")

  return (
    <Container style={{ marginTop: 0 }}>
      <CardsHeaderWrapper>
        <TitleWrapper>
          <CardsHeader
            isActive={cards === "single"}
            onClick={() => setCards("single")}
          >
            Single Qualification Study
          </CardsHeader>
          <CardsHeader
            isActive={cards === "dual"}
            onClick={() => setCards("dual")}
          >
            Dual Qualification Study
          </CardsHeader>
        </TitleWrapper>
      </CardsHeaderWrapper>
      <SectionWrapper justifyContent="center" style={{ overflow: `visible` }}>
        {cards === "single" ? (
          <SingleQualification courses={courses} />
        ) : (
          <DualQualifications courses={courses} />
        )}
      </SectionWrapper>
    </Container>
  )
}

export default AcademicPathways
