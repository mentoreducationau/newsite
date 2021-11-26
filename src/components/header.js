import React, { Component } from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import "materialize-css/dist/css/materialize.min.css"
import { Typography } from "../styles/Typography.css"

if (typeof window !== "undefined") {
  require("materialize-css/dist/js/materialize.min.js")
}

class Header extends Component {
  componentDidMount() {
    const elem = document.querySelector(".sidenav")
    window.M.Sidenav.init(elem, {})
  }

  render() {
    return (
      <>
      <Typography />
      <Helmet>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Helmet>
      <div className="">
        <div
          className="navbar-fixed"
          style={{
            margin: `0`,
          }}
        >
          <nav style={{ padding: "0 20px 0 20px", background: `red` }}>
            <div className="nav-wrapper">
              <Link to="/">Mentor Education</Link>

              <a
                href="/"
                data-target="mobile-demo"
                className="sidenav-trigger right"
              >
                <i className="material-icons">menu</i>
              </a>
              <div
                className=""
                style={{
                  float: `right`,
                }}
              >
                <ul className=" hide-on-med-and-down row-flex">
                  <li>
                    <Link to="/about-us/">About Us</Link>
                  </li>
                  <li>
                    <Link to="/courses/">Courses</Link>
                  </li>
                  <li>
                    <Link to="/workshop-dates/">Timetable</Link>
                  </li>
                  {/* <li>
                    <Link to="/schools/">Schools</Link>
                  </li> */}
                  {/* <li>
                    <Link to="/courses/">Courses</Link>
                  </li> */}
                  <li>
                    <Link to="/student-information/">Student Information</Link>
                  </li>
                  <li>
                    <Link to="/student-life/">Student Life</Link>
                  </li>
                  <li>
                    <Link to="/special-offers/">Special Offers</Link>
                  </li>
                  <li>
                    <Link to="/lms-gateway-login/">MELMS Login</Link>
                  </li>
                  <li>
                    <Link to="/contact/">Contact</Link>
                  </li>
                  <li>
                    <button
                      className="btn-flat white"
                      style={{ color: "#37474f" }}
                    >
                      Sign-In{" "}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <ul className="sidenav" id="mobile-demo">
          <li>
            <Link to="/about/">About Us</Link>
          </li>
          <li>
            <Link to="/schools/">Schools</Link>
          </li>
          <li>
            <Link to="/courses/">Courses</Link>
          </li>
          <li>
            <Link to="/student-information/">Student Information</Link>
          </li>
          <li>
            <Link to="/special-offers/">Special Offers</Link>
          </li>
          <li>
            <Link to="/lms-gateway-login/">MELMS Login</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
          <li className="center-align">
            <button
              className="btn-flat red darken-2"
              style={{ color: "white", fontStyle: "bold" }}
            >
              Sign-In{" "}
            </button>
          </li>
        </ul>
      </div>
      </>
    )
  }
}

export default Header
