import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Accordion from "../../components/Accordion/Accordion"
import {
  RightSideWrapper,
  Heading,
  IntroText,
} from "../../components/pages/student-information/index.css"

const ClassTimetable = ({activeState}) => {
  const timeTableData = useStaticQuery(graphql`
    query TimetableQuery {
      allContentfulTimetablePageContent {
        nodes {
          course {
            courseName
            sessionInformation
            sessionsList {
              classCode
              dateAndTime(formatString: "DD/MM/YYYY hh.mma")
              descripion
              duration
            }
          }
        }
      }
    }
  `)

  const data = timeTableData.allContentfulTimetablePageContent.nodes[0].course
  const heading = "Class Timetable"
  const intro =
    "2022 Calendar - Please note that unless listed below, tutorials recommence in the first week of February 2022. Mentor Education offer students a blend of study options including online-self paced courses, virtual classes and on-campus classes. Mentor Education is currently running online virtual classes and on-campus in class study for the following qualifications:"
  return (
    <RightSideWrapper activeState={activeState}>
      <Heading>{heading}</Heading>
      <IntroText>{intro}</IntroText>
      {data.map(item => (
        <Accordion key={item.courseName} item={item} />
      ))}
    </RightSideWrapper>
  )
}

export default ClassTimetable
