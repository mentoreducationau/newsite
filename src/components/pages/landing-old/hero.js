import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
// import "./hero.css"
import { links } from "../../Header/links-array"
import { Headline } from "../../../styles/Typography.css"
import bgImg from "../../../images/header-hero.jpeg"

export const HeaderWrapper = styled.div`
  min-height: 91vh;
  background: url(${bgImg});
  background-size: cover;
  background-color: #cccccc;
  margin: 0 auto;
`

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

  @media (max-width: 1100px) {
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

  @media (max-width: 1400px) {
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
export const ColorShapeWrapper = styled.div`
  height: 100vh;
  width: 100% !important;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 4.5rem;
  padding: 0 !important;
`
export const ColorShape = styled.div`
  border-left: 90px solid transparent;
  border-right: 0 solid transparent;
  border-top: 340px solid red;
  width: ${props => (props.width ? props.width : "100%")};
  opacity: ${props => (props.opacity ? props.opacity : "1")};
  margin-top: ${props => (props.marginTop ? props.marginTop : "0")};
  height: 200px;
`
export const TitleWrapper = styled.div`
  position: absolute;
  top: -310px;
  left: -40px;
`
export const SmallTitle = styled.h3`
  font-size: 35px;
  color: white;
  margin-left: ${props => (props.marginLeft ? props.marginLeft : "0")};
  margin-bottom: 0.8rem;
`
export const BigTitle = styled(Headline)`
  font-size: 50px;
  color: white;
  margin-left: ${props => (props.marginLeft ? props.marginLeft : "0")};
  color: ${props => (props.color ? props.color : "0")};
  text-decoration: ${props => (props.underline ? "underline" : "none")};
  margin-bottom: 0.8rem;
  text-underline-offset: 7px;
  text-decoration-thickness: 4px;
  line-height: 45px;
`
export const PageNameWrapper = styled.div`
  display: flex;
  align-items: baseline;
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
        className="container-hero responsive-image"
        ref={wrapperRef}
      >
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
                      Student Life
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
    </>
  )
}

export default Hero
