import * as React from "react"
import { StyledHeader, TitleContainer, LeftSideContainer, BlurbLeft, BlurbRight, MobileContainer, MobileMenu } from "./header.css"
import { StaticImage } from "gatsby-plugin-image"

import headphoneIcon from '../../images/svg/header_headphone_icon.svg'
import mailIcon from '../../images/svg/header_mail_icon.svg'

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <TitleContainer>
      <LeftSideContainer>
        <a href="https://www.mentor.edu.au">
          <StaticImage
            src="../../images/mlogo.png"
            alt="logo"
            placeholder="blurred"
          />
        </a>{" "}
        <span />
        <BlurbLeft>
          Australia's largest privately owned finance, business and accounting
          education provider
        </BlurbLeft>
      </LeftSideContainer>
      <BlurbRight>
        <span>Prefer to speak over the phone? Call us</span>
        <span>
          <StaticImage
            src="../../images/phone.png"
            alt="phone"
            placeholder="blurred"
          />
          <a href="tel:1800787014">1800 787 014</a>
        </span>
        <span>International: +61 3 91 085 491</span>
      </BlurbRight>
      <MobileContainer>
        <div>
          <img src={headphoneIcon} alt="call us" />
          <img src={mailIcon} alt="email us" />
        </div>
        <MobileMenu />
      </MobileContainer>
    </TitleContainer>
  </StyledHeader>
)

export default Header