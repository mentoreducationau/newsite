import React from "react"
import { useState } from "react"

import { TitleBanner, MainContainer, ParagraphWrapper } from "./index.css"

import { Headline } from "../../../styles/Typography.css"
import { Container } from "../../../styles/ContainerStyles.css"
import { Paragraph } from "../../../styles/Typography.css"
import Accordion from "../../Accordion/Accordion"
import { courseArrayForTimetable } from "../../../contents/courseArrayForTimetable"

const Timetable = () => {

    const [openState, setopenState] = useState(false)

  return (
    <>
      <TitleBanner style={{ backgroundAttachment: "fixed" }}>
        <Container>
          <Headline banner>TimeTable</Headline>
        </Container>
      </TitleBanner>
      <MainContainer>
        <ParagraphWrapper  openState={openState}>
          <Paragraph>
            Mentor Education offer students a blend of study options including
            online-self paced courses, virtual classes and on-campus classes.
            Mentor Education is currently running online virtual classes and
            on-campus in class study for the following qualifications:
          </Paragraph>
          <a class="grey darken-3 waves-effect waves-light btn" onClick={()=>setopenState(!openState)}>Online Tutorials and Webinars<i class="material-icons left">play_circle_outline</i></a>
        </ParagraphWrapper>
        {courseArrayForTimetable.map((item, index)=>(
            openState ? (
                <Accordion key={index} item={item} />
            ) : (
                index < 3 && (
                    <Accordion key={index} item={item} />
                )
            )
        ))}
      </MainContainer>
    </>
  )
}

export default Timetable
