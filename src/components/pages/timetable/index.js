import React from "react"

import { TitleBanner, MainContainer, ParagraphWrapper } from "./index.css"
import { Headline } from "../../../styles/Typography.css"
import { Container } from "../../../styles/ContainerStyles.css"
import { Paragraph } from "../../../styles/Typography.css"
import Accordion from "../../Accordion/Accordion"
import { courseArrayForTimetable } from "../../../contents/courseArrayForTimetable"

const Timetable = () => {
  return (
    <>
      <TitleBanner style={{ backgroundAttachment: "fixed" }}>
        <Container>
          <Headline banner>TimeTable</Headline>
        </Container>
      </TitleBanner>
      <MainContainer>
        <ParagraphWrapper>
          <Paragraph>
            Mentor Education offer students a blend of study options including
            online-self paced courses, virtual classes and on-campus classes.
            Mentor Education is currently running online virtual classes and
            on-campus in class study for the following qualifications:
          </Paragraph>
        </ParagraphWrapper>
        {courseArrayForTimetable.map((item, index) => (
          <Accordion key={index} item={item} />
        ))}
      </MainContainer>
    </>
  )
}

export default Timetable
