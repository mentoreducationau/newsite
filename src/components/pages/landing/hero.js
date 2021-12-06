import React, { useEffect, useState, useRef } from "react"
import { Link } from "gatsby"
import "./hero.css"

const Hero = () => {
  const ref = useRef(null)
  const ulRef = useRef(null)
  const btnRef = useRef(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    if (position > 0) {
      ref.current.style.background = "white"
      btnRef.current.style.background = "darkgray"
      btnRef.current.style.color = "white"
    } else {
      ref.current.style.background = "transparent"
      btnRef.current.style.background = "white"
      btnRef.current.style.color = "darkgray"
    }
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <div className="container-hero responsive-image hide-on-med-and-down">
        {/* header start */}
        <div
          className="navbar-fixed"
          style={{
            margin: `0`,
          }}
        >
          <nav
            style={{
              padding: "0 20px 0 20px",
              background: "transparent",
              boxShadow: "none"
            }}
            ref={ref}
          >
            <div className="nav-wrapper">
              <Link to="/" style={{ color: "red" }}>
                Mentor Education
              </Link>

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
                <ul className=" hide-on-med-and-down row-flex" ref={ulRef}>
                  <li>
                    <Link to="/about-us/">About Us</Link>
                  </li>
                  <li>
                    <Link to="/courses/">Courses</Link>
                  </li>
                  <li>
                    <Link to="/workshop-dates/">Timetable</Link>
                  </li>
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
                      className="btn-flat daken-2"
                      // style={{ color: "#37474f" }}
                      style={{ color: "darkgray" }}
                      ref={btnRef}
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
        {/* header end */}
        <div className="section ">
          <div
            className="row "
            style={{
              marginRight: "1.5rem",
            }}
          >
            <div className="col m12 l6" style={{ height: `50vh` }}></div>
            <div
              className="col m12 l6 valign-wrapper "
              style={{ height: `100vh` }}
            >
              <div
                className="row"
                style={{
                  marginLeft: `16%`,
                  marginTop: `8rem`,
                }}
              >
                <h1
                  className="center-align"
                  style={{
                    textAlign: `center`,
                    width: `100%`,
                    padding: `20px 10px`,
                    color: `white`,
                    background: `red`,
                    lineHeight: "2.5rem",
                  }}
                  data-sal="slide-up"
                  data-sal-delay="200"
                  data-sal-easing="ease"
                >
                  Excite your potential with Mentor Education
                </h1>

                <div className="center-align">
                  <div
                    className=""
                    data-sal="slide-left"
                    data-sal-delay="200"
                    data-sal-easing="ease"
                    data-sal-duration="500"
                  >
                    <p
                      className="btn-large"
                      style={{
                        width: `80%`,
                        fontSize: `130%`,
                        fontWeight: `bold`,
                        height: "100%",
                        background: `red`,
                        marginBottom: `.5rem`,
                      }}
                    >
                      Speak with an expert now
                    </p>
                  </div>
                  <div
                    className=""
                    data-sal="slide-left"
                    data-sal-delay="400"
                    data-sal-easing="ease"
                    data-sal-duration="500"
                  >
                    <p
                      className="btn-large"
                      style={{
                        width: `80%`,
                        fontWeight: `bold`,
                        height: "100%",
                        background: `red`,
                        marginBottom: `.5rem`,
                      }}
                    >
                      Download Course Guide
                    </p>
                  </div>
                  <div
                    className=""
                    data-sal="slide-left"
                    data-sal-delay="600"
                    data-sal-easing="ease"
                    data-sal-duration="500"
                  >
                    <p
                      className="btn-large"
                      style={{
                        width: `80%`,
                        fontWeight: `bold`,
                        height: "100%",
                        background: `red`,
                      }}
                    >
                      View Courses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-hero-small show-on-small">
        <div
          className="row hide-on-med-and-up"
          style={{
            marginBottom: "0",
          }}
        >
          <h1
            className="center-align"
            style={{
              textAlign: `center`,
              marginBottom: "0",
              width: `100%`,
              padding: `20px 10px`,
              color: `white`,
              background: `red`,
              lineHeight: "2.5rem",
            }}
          >
            Excite your potential with Mentor Education
          </h1>
          <div className="container-hero-small-img "></div>

          <div className="center-align section ">
            <p
              className="btn-large responsive-text"
              style={{
                width: `80%`,
                fontSize: `120%`,
                fontWeight: `bold`,
                height: "100%",
                background: `red`,
                marginBottom: `.5rem`,
                lineHeight: `2rem`,
                padding: ".5rem .5rem",
              }}
            >
              Speak with an expert now
            </p>
            <p
              className="btn-large"
              style={{
                width: `80%`,
                fontWeight: `bold`,
                height: "100%",
                background: `red`,
                marginBottom: `.5rem`,
              }}
            >
              Download Course Guide
            </p>
            <p
              className="btn-large"
              style={{
                width: `80%`,
                fontWeight: `bold`,
                height: "100%",
                background: `red`,
                marginBottom: `.1rem`,
              }}
            >
              View Courses
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
