///// Old Header //////

// import React from "react"
// import { links } from "./links-array"
// import { HeaderLink, LinksWrapper, LogoWrapepr, NavWrapper } from "./header.css"
// const Header = () => {
//   return (
//     <NavWrapper>
//       <LogoWrapepr to={"/"}>Mentor Education</LogoWrapepr>
//       <LinksWrapper>
//         {links.map((link, i) => (
//           <HeaderLink key={link.slug} className="border-bottom" to={`${link.slug}`}>
//             {link.name}
//           </HeaderLink>
//         ))}
//       </LinksWrapper>
//     </NavWrapper>
//   )
// }

// export default Header

////// New Header ////////

import React, { useEffect, useRef } from "react"
import { links } from "./links-array"
import {
  HeaderLink,
  LinksWrapper,
  LogoWrapepr,
  NavWrapper,
  HeaderWrapper,
  ColorShapeWrapper,
  ColorShape,
  TitleWrapper,
  BigTitle,
  SmallTitle,
  PageNameWrapper,
} from "./header.css"

const Header = ({ siteTitle, pageName }) => {
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

  const wrapperRef = useRef(null)
  useEffect(() => {
    const timer = setTimeout(() => {
      const pos =
        wrapperRef.current.getBoundingClientRect().bottom +
        window.pageYOffset -
        72
      window.scrollTo({ top: pos, behavior: "smooth" })
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <HeaderWrapper
        className="container-hero"
        ref={wrapperRef}
      >
        {/* header start */}
        <NavWrapper ref={ref}>
          <LogoWrapepr to={"/"}>Mentor Education</LogoWrapepr>
          <LinksWrapper>
            {links.map((link, i) => (
              <HeaderLink
                key={link.slug}
                className="border-bottom"
                to={`${link.slug}`}
              >
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
          <div className="row ">
            <ColorShapeWrapper className="col m12 l6 valign-wrapper">
              <ColorShape marginTop="0px" opacity="0.2" width="750px" />
              <ColorShape marginTop="-290px" opacity="0.4" width="690px" />
              <ColorShape
                marginTop="-290px"
                opacity="1"
                width="630px"
                style={{ position: "relative" }}
              >
                <TitleWrapper>
                  <SmallTitle>17 years</SmallTitle>
                  <SmallTitle marginLeft="20px">
                    Over 20,000 students graduated
                  </SmallTitle>
                  <SmallTitle marginLeft="40px">
                    Over 6,000 currently enrolled
                  </SmallTitle>
                  <PageNameWrapper>
                    <BigTitle marginLeft="60px" color="#132050" underline>
                      {pageName}
                    </BigTitle>
                    <SmallTitle marginLeft="20px">at</SmallTitle>
                  </PageNameWrapper>

                  <BigTitle marginLeft="80px">Mentor Education</BigTitle>
                </TitleWrapper>
              </ColorShape>
            </ColorShapeWrapper>
          </div>
        </div>
      </HeaderWrapper>

      <div className="container-hero-small show-on-small"></div>
    </>
  )
}

export default Header
