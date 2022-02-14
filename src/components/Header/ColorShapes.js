import React from "react"
import {
  ColorShapesContainer,
  ColorShapeWrapper,
  ColorShape,
  TitleWrapper,
  BigTitle,
  SmallTitle,
  PageNameWrapper,
  ColorRectWrapper,
  ColorRect,
} from "./header.css"
import {
  DesktopContainer,
  MobileContainer,
} from "../../styles/ContainerStyles.css"

const ColorShapes = ({ pageName }) => {
  return (
    <ColorShapesContainer>
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
    </ColorShapesContainer>
  )
}

export default ColorShapes
