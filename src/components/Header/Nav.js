import React, { forwardRef } from "react"
import { links } from "./links-array"
import { Link } from "gatsby"
import useActiveMenu from "../../hooks/ActiveMenu"
import {
  HeaderLink,
  LinksWrapper,
  LogoWrapepr,
  NavWrapper,
  IconWrapper,
  IconImg,
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

const Nav = ({ navbar }, ref) => {
  const { setMenuOpen } = useActiveMenu()
  const openMenu = () => {
    setMenuOpen(true)
  }
  return (
    <NavWrapper navbar={navbar}>
      <LogoWrapepr to={"/"}>
        <img
          src={mlogo}
          style={{ width: "69px", height: "47px", marginBottom: "0" }}
          alt="header-logo"
        />
      </LogoWrapepr>
      <DesktopContainer>
        <LinksWrapper>
          {links.map((link, i) => (
            <HeaderLink
              key={link.slug}
              className="border-bottom"
              to={`${link.slug}`}
              navbar={navbar}
            >
              {link.name}
            </HeaderLink>
          ))}
          <Link to="/">
            <SignInButton navbar={navbar}>STUDENT SIGN-IN</SignInButton>
          </Link>
        </LinksWrapper>
      </DesktopContainer>
      <MobileContainer>
        <IconWrapper>
          <IconImg src={phoneIcon} alt="phone-icon" />
          <IconImg src={mailIcon} alt="mail-icon" />
          <IconImg
            src={hamburgerIcon}
            onClick={() => openMenu()}
            alt="hamburger-icon"
          />
        </IconWrapper>
      </MobileContainer>
    </NavWrapper>
  )
}

export default forwardRef(Nav)
