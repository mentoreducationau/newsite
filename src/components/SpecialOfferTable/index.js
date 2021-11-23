import React from "react"
import { Container } from "../../styles/ContainerStyles.css"
import "materialize-css/dist/css/materialize.min.css"
import { Paragraph } from "../../styles/Typography.css"
import { RedDecParagraph } from "../SpecialOffersScrollMenu/index.css"
import { Button } from "react-materialize"

const SpecialOffersTable = ({ tableData, excuteScroll }) => {
  return (
    <Container style={{ marginTop: "3.25rem" }}>
      <Paragraph>School Name</Paragraph>
      <table className="striped">
        <tr>
          <th>Course Code</th>
          <th>Course</th>
          <th>Self-Paced Study</th>
          <th>Enrol</th>
          <th>Self-Paced & Live Tutorial Study</th>
          <th>Enrol</th>
        </tr>
        {tableData.map((item, index) => (
          <tr key={index}>
            <td>{item.courseCode}</td>
            <td>{item.courseName}</td>
            <td>{item.SPS}</td>
            <td><a href={item.SPSEnrolURL} style={{ textDecoration: "underline", color: "#c0202f" }}>Enrol</a></td>
            <td>{item.SPSNTUTES}</td>
            <td><a href={item.SPSNTUTESURL} style={{ textDecoration: "underline", color: "#c0202f" }}>Enrol</a></td>
          </tr>
        ))}
      </table>
      <RedDecParagraph onClick={() => excuteScroll(0)}>Back to Top</RedDecParagraph>
      <Button>Request a Callback<i className="playlist_play"></i></Button>
    </Container>
  )
}

export default SpecialOffersTable
