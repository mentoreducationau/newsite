import React from "react"
import { Container } from "../../styles/ContainerStyles.css"
import { Paragraph } from "../../styles/Typography.css"
import { RedDecParagraph } from "../SpecialOffersScrollMenu/index.css"

const SpecialOffersTable = ({ tableData, excuteScroll }) => {
  return (
    <Container style={{ marginTop: "3.25rem" }}>
      <Paragraph>School Name</Paragraph>
      <table className="striped centered">
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
      <RedDecParagraph onClick={() => excuteScroll(999)}>Back to Top</RedDecParagraph>
      <button className="waves-effect waves-light btn">Request a Callback<i className="material-icons right">play_circle_outline</i></button>
    </Container>
  )
}

export default SpecialOffersTable
