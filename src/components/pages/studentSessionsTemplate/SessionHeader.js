import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import { links } from "../../Header/links-array.js"
import useActiveMenu from "../../../hooks/ActiveMenu"
import {
  HeaderLink,
  LinksWrapper,
  LogoWrapepr,
  NavWrapper,
  HeaderWrapper,
  IconWrapper,
  IconImg,
  ColorRectWrapper,
  ContentContainer,
  TitleText,
  SessionDateText,
  IntroText,
  HostWrapper,
  PhotoWrapper,
  NameAndRoleWrapper,
  NameText,
  HostText,
  FormWrapper,
  TipText,
  SignInButton,
  Wrapper,
  MoreInfoText,
  MoreInfoWrapper,
  MoreInfo,
} from "./index.css"
import {
  DesktopContainer,
  MobileContainer,
} from "../../../styles/ContainerStyles.css"
import hamburgerIcon from "../../../images/svg/hamburger_icon.svg"
import mailIcon from "../../../images/svg/mail_icon.svg"
import phoneIcon from "../../../images/svg/phone_icon.svg"
import mlogo from "../../../images/mlogo.png"
import moreInfoIcon from "../../../images/svg/moreinfo_icon.svg"
import Menu from "../../Header/Menu"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { SessionHeaderForm } from "./SessionHeaderForm.js"

const SessionHeader = ({ siteTitle, background, sessionData, status }) => {
  const ref = useRef(null)
  const wrapperRef = useRef(null)
  const { setMenuOpen } = useActiveMenu()

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
        <NavWrapper ref={ref}>
          <LogoWrapepr to={"/"}>
            <img
              src={mlogo}
              style={{ width: "69px", height: "47px", marginBottom: "0" }}
              alt="session-header"
            />
          </LogoWrapepr>
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
            <Link to="/">
              <SignInButton>STUDENT SIGN-IN</SignInButton>
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
        <div className="section ">
          <div className="row ">
            <DesktopContainer>
              <Wrapper>
                <ContentContainer>
                  <TitleText>
                    {sessionData.course.courseCode +
                      " - " +
                      sessionData.course.studyLevel +
                      " " +
                      sessionData.course.courseName}
                  </TitleText>
                  <SessionDateText>{sessionData.sessionDate}</SessionDateText>
                  <IntroText>
                    i’m baby hoodie air plant squid hashtag. street art hexagon
                    pok pok, man bun try-hard knausgaard marfa. brunch photo
                    booth pour-over, art party tumeric yuccie chambray. offal
                    quinoa kitsch woke single-origin coffee chia bitters hella
                    narwhal put a bird on it beard cold-pressed tousled poutine.
                    yuccie seitan mixtape paleo.
                  </IntroText>
                  <HostWrapper>
                    <HostText>Join your hosts:</HostText>
                    {sessionData.hosts.map((item, index) => (
                      <PhotoWrapper key={index}>
                        <GatsbyImage
                          image={getImage(item.portrait)}
                          style={{
                            border: "none",
                            borderRadius: "50%",
                            width: "80px",
                            height: "80px",
                          }}
                          alt="host-image"
                        />
                        <NameAndRoleWrapper>
                          <NameText>{item.name}</NameText>
                          <NameText>{item.role}</NameText>
                        </NameAndRoleWrapper>
                      </PhotoWrapper>
                    ))}
                  </HostWrapper>
                  <FormWrapper status={status}>
                    <SessionHeaderForm course buttonText="Register Now" />
                    <TipText>
                      **Include your phone number to receive a free call with
                      one of our course advisors.
                    </TipText>
                  </FormWrapper>
                </ContentContainer>
                <MoreInfoWrapper status={status}>
                  <MoreInfo>
                    <MoreInfoText>MOREINFO</MoreInfoText>
                    <IconImg
                      src={moreInfoIcon}
                      style={{ marginLeft: "3px" }}
                      alt="moreinfo-icon"
                    />
                  </MoreInfo>
                </MoreInfoWrapper>
              </Wrapper>
            </DesktopContainer>
            <MobileContainer>
              <ColorRectWrapper>
                {/* <ColorRect width="259px" />
                <ColorRect width="179px" />
                <ColorRect width="254px" />
                <ColorRect width="179px" /> */}
              </ColorRectWrapper>
            </MobileContainer>
          </div>
        </div>
        <Menu />
      </HeaderWrapper>
    </>
  )
}

export default SessionHeader
