import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "./hero.css"
import { links } from "../../Header/links-array"

export const NavWrapper = styled.nav`
  width: 100%;
  height: 10vh;
  padding: 0 3rem;
  background: transparent;
  position: fixed;
  top: 0;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: none;
`

export const LogoWrapepr = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  color: red;
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;

  @media(max-width: 1100px) {
    white-space: unset;
    line-height: 34px;
  }
`

export const LinksWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
`

export const HeaderLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #2c2d2f;
  height: 50%;
  font-family: futura;
  font-size: 1rem;
  font-weight: 600;
  line-height: 0;
  margin: 0 0.5rem;
  padding: 0 1rem;

  :hover {
    border-bottom: 2px solid grey;
  }

  @media(max-width: 1400px) {
    padding: 0;
  }
`

export const SignInButton = styled.button`
  font-size: 1.5rem;
  padding: 0.5rem 2rem;
  border: 1px solid red;
  color: red;
  box-shadow: none;
`

const Hero = () => {
  const ref = useRef(null)
  const handleScroll = () => {
    const position = window.pageYOffset
    if (position > 0) {
      ref.current.style.background = "white"
    } else {
      ref.current.style.background = "transparent"
    }
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
        <NavWrapper ref={ref}>
          <LogoWrapepr to={"/"}>Mentor Education</LogoWrapepr>
          <LinksWrapper>
            {links.map((link, i) => (
              <HeaderLink key={link.slug} className="border-bottom" to={`${link.slug}`}>
                {link.name}
              </HeaderLink>
            ))}
          </LinksWrapper>
        </NavWrapper>
        {/*         
        <ul className="sidenav" id="mobile-demo">
          <li>
            <Link to="/about-us/">About Us</Link>
          </li>
          <li>
            <Link to="/courses/">Courses</Link>
          </li>
          <li>
            <Link to="/schools/">Schools</Link>
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
          <li className="center-align">
            <button
              className="btn-flat red darken-2"
              style={{ color: "white", fontStyle: "bold" }}
            >
              Sign-In{" "}
            </button>
          </li>
        </ul> */}
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
