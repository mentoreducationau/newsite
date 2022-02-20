import React from "react"
import { FormTable, Heading, ReturnText, TableWrapper } from "./index.css"
import { RequestButton } from "../specialOffers/offers.css"

const FormsTable = ({ courses, hiddenTable, setShowGrid }) => {
  return (
    <TableWrapper hiddenTable={hiddenTable}>
      <Heading marginBottom="4px" tAlign="left">
        Qualification Names
      </Heading>
      <ReturnText onClick={() => setShowGrid(true)}>Return To Menu</ReturnText>
      {(courses !== null && courses.length > 0) && (
        <FormTable hiddenTable={hiddenTable}>
          {courses.map(item => (
            <React.Fragment key={item.courseCode}>
              <tbody>
                <tr>
                  <td style={{ textAlign: "center" }}>{item.courseCode}</td>
                  <td>
                    {item.courseCode +
                      " - " +
                      item.studyLevel +
                      " " +
                      item.courseName}
                  </td>
                  <td>
                    <RequestButton
                      height="40px"
                      fontSize="11px"
                      lineHeight="16px"
                      borderRadius="0"
                    >
                      BROCHURE
                    </RequestButton>
                  </td>
                  <td>
                    <RequestButton
                      width="120px"
                      height="40px"
                      fontSize="11px"
                      lineHeight="16px"
                      borderRadius="0"
                    >
                      ENROL ONLINE
                    </RequestButton>
                  </td>
                  <td>
                    <RequestButton
                      height="40px"
                      fontSize="11px"
                      lineHeight="16px"
                      borderRadius="0"
                    >
                      ENROLEMENT FORM
                    </RequestButton>
                  </td>
                </tr>
              </tbody>
            </React.Fragment>
          ))}
        </FormTable>
      )}
    </TableWrapper>
  )
}
export default FormsTable
