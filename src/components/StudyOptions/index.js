import { Link } from "gatsby"
import React from "react"
import { H3, Paragraph } from "../../styles/Typography.css"
import {
  IntroContainer,
  CourseOptionContainer,
  CourseOptionTable,
} from "./index.css"

const StudyOptions = () => {
  return (
    <>
      <IntroContainer>
        <H3 course>Fully flexible Study Options:</H3>
      </IntroContainer>
      <CourseOptionContainer>
        <CourseOptionTable>
          <tbody>
            <tr>
              <th colspan="2">
                A. Flexible Online Study
                <br /> Self-paced study
                <br /> (upfront)
              </th>
            </tr>
            <tr style={{ height: 150 }}>
              <td>
                <ul>
                  <li>Self-paced (for self-directed learners)</li>
                  <li>Start anytime</li>
                  <li>Phone and Email Support support</li>
                  <li>Enrol online</li>
                  <li>No hidden fees!</li>
                </ul>
                <br />
              </td>
              <td>
                <h2 className="price" style={{ color: "green" }}>
                  $960.00*
                </h2>
                <span className="oldprice">
                  <span style={{ textDecoration: "line-through" }}>
                    $2,400.00
                  </span>
                  <br />
                  Special
                  <br />
                  Offer!
                </span>
              </td>
            </tr>
            <tr>
              <td colspan="2" className="booknow">
                <p>
                  <input
                    type="submit"
                    className="nextbtn"
                    value="DOWNLOAD GUIDE"
                  />
                </p>
                <input
                  type="submit"
                  className="nextbtn"
                  value="ENROL ONLINE"
                  style={{ background: "#4CAF50" }}
                />
              </td>
            </tr>
            <tr>
              <th colspan="2">
                INTEREST-FREE EASY
                <br /> PAYMENT PLANS AVAILABLE
              </th>
            </tr>
            <tr style={{ height: 150 }}>
              <td>
                <ul>
                  <li>Interest free</li>
                  <li>Payment plan</li>
                  <li>Direct Debit</li>
                  <li>Enrol online</li>
                  <li>Start sooner</li>
                </ul>
                <br />
              </td>
              <td>
                <font style={{ color: "blacl" }}>
                  Fee: $1,250.00
                  <br />
                  ($250.00 Deposit and
                  <br />4 x $250 Monthly payments)
                </font>
                <br />
                <span className="oldprice">
                  <span style={{ textDecoration: "line-through" }}>
                    $2,400.00
                  </span>
                </span>
              </td>
            </tr>
            <tr>
              <td colspan="2" className="booknow">
                <p>
                  <input
                    type="submit"
                    className="nextbtn"
                    value="DOWNLOAD GUIDE"
                  />
                </p>
                <input
                  type="submit"
                  className="nextbtn"
                  value="ENROL ONLINE"
                  style={{ background: "#4CAF50" }}
                />
                <strong>
                  <br />
                  <br />
                  Need more info? <br />
                  <Link to="#">
                    <font style={{ color: "#c0202f" }}>
                      Click here to contact us today
                    </font>
                  </Link>
                </strong>
              </td>
            </tr>
          </tbody>
        </CourseOptionTable>
        <CourseOptionTable>
          <tbody>
            <tr>
              <th colspan="2">
                A. Flexible Online Study
                <br /> Self-paced study
                <br /> (upfront)
              </th>
            </tr>
            <tr style={{ height: 150 }}>
              <td>
                <ul>
                  <li>Self-paced (for self-directed learners)</li>
                  <li>Start anytime</li>
                  <li>Phone and Email Support support</li>
                  <li>Enrol online</li>
                  <li>No hidden fees!</li>
                </ul>
                <br />
              </td>
              <td>
                <h2 className="price" style={{ color: "green" }}>
                  $960.00*
                </h2>
                <span className="oldprice">
                  <span style={{ textDecoration: "line-through" }}>
                    $2,400.00
                  </span>
                  <br />
                  Special
                  <br />
                  Offer!
                </span>
              </td>
            </tr>
            <tr>
              <td colspan="2" className="booknow">
                <p>
                  <input
                    type="submit"
                    className="nextbtn"
                    value="DOWNLOAD GUIDE"
                  />
                </p>
                <input
                  type="submit"
                  className="nextbtn"
                  value="ENROL ONLINE"
                  style={{ background: "#4CAF50" }}
                />
              </td>
            </tr>
            <tr>
              <th colspan="2">
                INTEREST-FREE EASY
                <br /> PAYMENT PLANS AVAILABLE
              </th>
            </tr>
            <tr style={{ height: 150 }}>
              <td>
                <ul>
                  <li>Interest free</li>
                  <li>Payment plan</li>
                  <li>Direct Debit</li>
                  <li>Enrol online</li>
                  <li>Start sooner</li>
                </ul>
                <br />
              </td>
              <td>
                <font style={{ color: "blacl" }}>
                  Fee: $1,250.00
                  <br />
                  ($250.00 Deposit and
                  <br />4 x $250 Monthly payments)
                </font>
                <br />
                <span className="oldprice">
                  <span style={{ textDecoration: "line-through" }}>
                    $2,400.00
                  </span>
                </span>
              </td>
            </tr>
            <tr>
              <td colspan="2" className="booknow">
                <p>
                  <input
                    type="submit"
                    className="nextbtn"
                    value="DOWNLOAD GUIDE"
                  />
                </p>
                <input
                  type="submit"
                  className="nextbtn"
                  value="ENROL ONLINE"
                  style={{ background: "#4CAF50" }}
                />
                <strong>
                  <br />
                  <br />
                  Need more info? <br />
                  <Link to="#">
                    <font style={{ color: "#c0202f" }}>
                      Click here to contact us today
                    </font>
                  </Link>
                </strong>
              </td>
            </tr>
          </tbody>
        </CourseOptionTable>
      </CourseOptionContainer>
      <Paragraph>
        Option C. Online study with Additional Support is also available for
        this course.{" "}
        <Link style={{ color: "#c0202f" }} to="#">
          Click here to contact us today
        </Link>{" "}
        to find out more or call us on 1800 787 014.
      </Paragraph>
    </>
  )
}

export default StudyOptions
