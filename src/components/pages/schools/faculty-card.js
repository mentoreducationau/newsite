import React from "react"
import { Link } from "gatsby"
import AccountBalanceIcon from "@material-ui/icons/AccountBalance"

export default function FacultyCard() {
  return (
    <div>
      <Link to="/templates/schools/faculties/faculty-course-overview">
        <div className="row">
          <div
            className="cols12"
            style={{
              display: `flex`,
              justifyContent: `center`,
            }}
          >
            <div
              className="card-panel z-depth-1 "
              style={{
                margin: `0`,
                padding: `0`,
                width: `80%`,
                height: `4rem`,
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
              }}
            >
              <div
                className="facultyName"
                style={{
                  height: `100%`,
                  width: `100%`,
                  padding: `0`,
                  margin: `0`,
                  display: `flex`,
                  justifyContent: `center`,
                  alignItems: `center`,
                }}
              >
                <h4
                  style={{
                    margin: `0`,
                    padding: `10px`,
                    color: `black`,
                  }}
                >
                  Accounting and Bookkeeping Faculty
                </h4>
                <div
                  style={{
                    background: `red`,
                    height: `100%`,
                    width: `20%`,
                    display: `flex`,
                    justifyContent: `center`,
                    alignItems: `center`,
                  }}
                >
                  <AccountBalanceIcon style={{ color: `white` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
