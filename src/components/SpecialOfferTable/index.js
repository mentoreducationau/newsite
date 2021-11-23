import React from "react"
import { Container } from "../../styles/ContainerStyles.css"
import "materialize-css/dist/css/materialize.min.css"

const SpecialOffersTable = ({ tableData }) => {
  return (
    <Container style={{ marginTop: 0 }}>
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
    </Container>
  )
}

export default SpecialOffersTable
