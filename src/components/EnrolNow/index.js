import React from "react"
import {
  EnrolContainer,
  PriceContainer,
  PriceButton,
  EnrolText,
  PriceText,
  ClickHereWrapper,
  ClickHereText
} from "./index.css"

const EnrolNow = ({ price, excuteScrollToFooterForm, excuteScrollToCourseGuide }) => {
  return (
    <EnrolContainer>
      <ClickHereWrapper>
        <ClickHereText onClick={() => excuteScrollToFooterForm()} click>Click here</ClickHereText>
        <ClickHereText>speak with an expert</ClickHereText>
      </ClickHereWrapper>
      <PriceContainer>
        <EnrolText>ENROL NOW FROM</EnrolText>
        <PriceText>${price}*</PriceText>
      </PriceContainer>
        <PriceButton onClick={() => excuteScrollToCourseGuide()}>ENROL</PriceButton>
    </EnrolContainer>
  )
}

export default EnrolNow
