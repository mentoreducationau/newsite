import React, { useEffect, useRef, useState } from "react"
import {
  HeaderWrapper,
} from "./header.css"
import Menu from "./Menu"
import Nav from "./Nav"
import ColorShapes from "./ColorShapes"

const Header = ({ siteTitle, pageName, background }) => {
  const ref = useRef(null)
  const wrapperRef = useRef(null)
  const [navbarPos, setNavbarPos] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setNavbarPos(position)
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

  return (
    <>
      <HeaderWrapper
        className="container-hero"
        ref={wrapperRef}
        background={background}
      >
        <Nav ref={ref} navbar={navbarPos} />
        {/* <div style={{ padding: "1rem 0" }}>
          <div style={{ margin: "0 auto 20px" }}>
            <DesktopContainer>
              <ColorShapeWrapper>
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
        </div> */}
        <ColorShapes pageName={pageName} />
        <Menu />
      </HeaderWrapper>
    </>
  )
}

export default Header
