import React from "react"
import { SectionContainer } from "../../../styles/ContainerStyles.css"
import { CourseCollectionHeadingText, RequestButton, CourseTable } from "./offers.css"

const CardCollection = ({ cardCollection }) => {
  return (
    <SectionContainer marginBottom="59.5px" mobMarginBottom="137.5px">
      <CourseCollectionHeadingText>
        {cardCollection.sectionHeading}
      </CourseCollectionHeadingText>
      <CourseTable>
        {cardCollection.courses.map((item, idx) => (
          <>
            <tr>
              <td rowSpan="2" style={{textAlign: "center"}}>{item.courseCode}</td>
              <td rowSpan="2">
                {item.courseCode +
                  " - " +
                  item.studyLevel +
                  " " +
                  item.courseName}
              </td>
              <td>Self-Paced Study</td>
              <td>{`$ `+ item.pricing.salePrice + ` (save 59%)`}</td>
              <td>
                <RequestButton
                  width="120px"
                  height="33px"
                  fontSize="16px"
                  lineHeight="26px"
                  borderRadius="0"
                >
                  Enrol
                </RequestButton>
              </td>
            </tr>
            <tr>
              <td>Self-Paced {"&"} Live Tutorial Study</td>
              <td>{`$ `+ item.pricing.tutorialsSalePrice + ` (save 59%)`}</td>
              <td>
                <RequestButton
                  width="120px"
                  height="33px"
                  fontSize="16px"
                  lineHeight="26px"
                  borderRadius="0"
                >
                  Enrol
                </RequestButton>
              </td>
            </tr>
          </>
        ))}
      </CourseTable>
      <RequestButton
        width="250px"
        height="42px"
        fontSize="16px"
        lineHeight="26px"
        borderRadius="0"
      >
        REQUEST A CALL BACK
      </RequestButton>
    </SectionContainer>
  )
}
export default CardCollection
