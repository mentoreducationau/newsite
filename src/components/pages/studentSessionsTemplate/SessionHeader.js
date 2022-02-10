import React, { useEffect, useRef } from "react"
import useActiveMenu from "../../../hooks/ActiveMenu"
import {
  HeaderWrapper,
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
  Wrapper,
  MoreInfoText,
  MoreInfoWrapper,
  MoreInfo,
  TipTextWrapper
} from "./index.css"
import {
  DesktopContainer,
  MobileContainer,
} from "../../../styles/ContainerStyles.css"
import moreInfoIcon from "../../../images/svg/moreinfo_icon.svg"
import Menu from "../../Header/Menu"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { SessionHeaderForm } from "./SessionHeaderForm.js"
import Nav from "../../Header/Nav.js"

const SessionHeader = ({ siteTitle, background, sessionData, status }) => {
  const ref = useRef(null)
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
        background={background}
      >
        <Nav ref={ref} navbar="10" />
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
                  <SessionDateText>{sessionData.sessionDate} AEST</SessionDateText>
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
                    <TipTextWrapper>
                      <TipText>**</TipText>
                      <TipText>
                        Include your phone number to receive a free call with
                        one of our course advisors.
                      </TipText>
                    </TipTextWrapper>
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
