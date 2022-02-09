import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  EnrolContainer,
  PriceContainer,
  PriceButton,
  EnrolText,
  PriceText,
  ClickHereWrapper,
  ClickHereText
} from "./index.css"

const EnrolNow = ({ price, excuteScroll }) => {
  return (
    <EnrolContainer>
      <StaticImage
        src="../../images/footer-img.jpg"
        alt="support"
        width={340}
      />
      <ClickHereWrapper>
        <ClickHereText onClick={() => excuteScroll()} click>Click here</ClickHereText>
        <ClickHereText>speak with an expert</ClickHereText>
      </ClickHereWrapper>
      <PriceContainer>
        <EnrolText>ENROL NOW FROM</EnrolText>
        <PriceText>${price}*</PriceText>
      </PriceContainer>
        <PriceButton>ENROL</PriceButton>
    </EnrolContainer>
  )
}

export default EnrolNow
