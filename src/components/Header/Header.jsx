import React, { useEffect, useRef, useState } from "react"
import { links } from "./links-array"
import { Link } from "gatsby"
import useActiveMenu from "../../hooks/ActiveMenu"
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
  IconWrapper,
  IconImg,
  ColorRectWrapper,
  ColorRect,
  SignInButton,
} from "./header.css"
import {
  DesktopContainer,
  MobileContainer,
} from "../../styles/ContainerStyles.css"
import hamburgerIcon from "../../images/svg/hamburger_icon.svg"
import mailIcon from "../../images/svg/mail_icon.svg"
import phoneIcon from "../../images/svg/phone_icon.svg"
import mlogo from "../../images/mlogo.png"
import Menu from "./Menu"

const Header = ({ siteTitle, pageName, background }) => {
  const wrapperRef = useRef(null)
  const { setMenuOpen } = useActiveMenu()

  // const [scrollMoving, setScrollMoving] = useState(false)
  // const handleScroll = () => {
  //   const position = window.pageYOffset
  //   if (position > 0) {
  //     setScrollMoving(true)
  //   } else {
  //     setScrollMoving(false)
  //   }
  // }


  const [navBar, setNavBar] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setNavBar(position)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

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

  const openMenu = () => {
    setMenuOpen(true)
  }

  return (
    <>
      <HeaderWrapper
        className="container-hero"
        ref={wrapperRef}
        background={background}
      >
        {/* <NavWrapper scrollMoving={scrollMoving}> */}
        <NavWrapper navBar={navBar}>
          <LogoWrapepr to={"/"}>
            <img
              src={mlogo}
              style={{ width: "69px", height: "47px", marginBottom: "0" }}
              alt="header-logo"
            />
          </LogoWrapepr>
          <LinksWrapper>
            {links.map((link, i) => (
              <HeaderLink
                key={link.slug}
                className="border-bottom"
                to={`${link.slug}`}
                // scrollMoving={scrollMoving}
                navBar={navBar}
              >
                {link.name}
              </HeaderLink>
            ))}
            <Link to="/">
              {/* <SignInButton scrollMoving={scrollMoving}>STUDENT SIGN-IN</SignInButton> */}
              <SignInButton navBar={navBar}>STUDENT SIGN-IN</SignInButton>
            </Link>
          </LinksWrapper>
          <IconWrapper>
            <IconImg src={phoneIcon} alt="phone-icon" />
            <IconImg src={mailIcon} alt="mail-icon" />
            <IconImg
              src={hamburgerIcon}
              onClick={() => openMenu()}
              alt="hamburger-icon"
            />
          </IconWrapper>
        </NavWrapper>
        <div style={{ padding: "1rem 0" }}>
          <div style={{ margin: "0 auto 20px" }}>
            <DesktopContainer>
              <ColorShapeWrapper style={{ display: "flex" }}>
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
            </DesktopContainer>
            <MobileContainer>
              <ColorRectWrapper>
                <ColorRect width="259px" />
                <ColorRect width="179px" />
                <ColorRect width="254px" />
                <ColorRect width="179px" />
              </ColorRectWrapper>
            </MobileContainer>
          </div>
        </div>
        <Menu />
      </HeaderWrapper>
    </>
  )
}

export default Header
