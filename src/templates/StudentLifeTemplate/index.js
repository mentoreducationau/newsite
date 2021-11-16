import React from "react"

import { TitleBanner, MainContainer } from "./index.css"

import { Headline } from "../../styles/Typography.css"
import { StudentsWork } from "../../components"
import { Container } from "../../styles/ContainerStyles.css"
import { Paragraph } from "../../styles/Typography.css"
import {
  StudentInfoContainer,
  NameAndDate,
  NameAndDateContainer,
  StudentLifeTitle,
  StudentLifeSubtitle
} from "./index.css"

const StudentLifeTemplate = () => {
  const studentLife = {
    title: "Class Timetable",
    name: "Nicolay",
    date: "June 21 , 2021",
    content: [
      {
        subtitle: "Story 1",
        subcontent:
          "Not sure when your virtual class is on? Don't worry, we have an an up-to-date timetable for all students who have enrolled into Virtual Classes, tutorials or on-campus classes online, which can be found by visiting our Timetable website page.",
      },
      {
        subtitle: "Story 2",
        subcontent:
          "Not sure when your virtual class is on? Don't worry, we have an an up-to-date timetable for all students who have enrolled into Virtual Classes, tutorials or on-campus classes online, which can be found by visiting our Timetable website page.",
      },
      {
        subtitle: "Story 3",
        subcontent:
          "Not sure when your virtual class is on? Don't worry, we have an an up-to-date timetable for all students who have enrolled into Virtual Classes, tutorials or on-campus classes online, which can be found by visiting our Timetable website page.",
      },
    ],
  }

  return (
    <>
      <TitleBanner style={{ backgroundAttachment: "fixed" }}>
        <Container>
          <Headline banner>Student Life</Headline>
        </Container>
      </TitleBanner>
      <MainContainer>
        <StudentInfoContainer>
          <StudentLifeTitle>{studentLife.title}</StudentLifeTitle>
          {studentLife.content.map((item, index) => (
            <React.Fragment key={index}>
              <StudentLifeSubtitle>
                {item.subtitle}
              </StudentLifeSubtitle>
              <Paragraph>{item.subcontent}</Paragraph>
            </React.Fragment>
          ))}
          <NameAndDateContainer>
            <NameAndDate>{studentLife.name}</NameAndDate>
            <NameAndDate>{studentLife.date}</NameAndDate>
          </NameAndDateContainer>
        </StudentInfoContainer>
        <StudentsWork course="false" />
      </MainContainer>
    </>
  )
}

export default StudentLifeTemplate
