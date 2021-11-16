import React from "react"

import {
  JourneyCardContainer,
  JourneyTitle,
  JourneyOldPrice,
  JourneyPrice,
  PriceDes,
  PriceButton
} from "./index.css"

const JourneyCard = props => {
  return (
    <JourneyCardContainer>
      <JourneyTitle>{props.title}</JourneyTitle>
      <JourneyOldPrice>$990</JourneyOldPrice>
      <JourneyPrice>$990</JourneyPrice>
      <PriceDes>Full payment</PriceDes>
      <PriceDes>Start anytime</PriceDes>
      <JourneyOldPrice>$1200</JourneyOldPrice>
      <JourneyPrice>$1599</JourneyPrice>
      <PriceDes>Payment Plan</PriceDes>
      <PriceDes>Direct Debit</PriceDes>
      <PriceButton>Course Guide</PriceButton>
      <PriceButton>ENROL NOW</PriceButton>
    </JourneyCardContainer>
  )
}

export default JourneyCard
