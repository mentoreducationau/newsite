import React from "react"

import {
  JourneyTitle,
  JourneyOldPrice,
  JourneyPrice,
  PriceDes,
  PriceButton,
  AdditionalSupportContainer,
  TitleWrapper,
  ContentWrapper,
  NoticeWrapper,
  NoticeText,
  PricingWrapper
} from "./index.css"

const AdditionalSupportCard = ({ pricing }) => {
  return (
    <AdditionalSupportContainer>
      <TitleWrapper>
        <JourneyTitle>Need additional Support?</JourneyTitle>
        <PriceDes bold>We’re here for you!</PriceDes>
      </TitleWrapper>
      <ContentWrapper>
        <NoticeWrapper>
          <NoticeText>- No hidden fees!</NoticeText>
          <NoticeText>- Self-paced, live tutorials & additional support</NoticeText>
          <NoticeText>- Start anytime</NoticeText>
          <NoticeText>- 1300 phone support</NoticeText>
          <NoticeText>- Call us now to see how we can make it happen for you!</NoticeText>
        </NoticeWrapper>
        <PricingWrapper>
          <PriceDes bold>Online Self Paced</PriceDes>
          <JourneyOldPrice>
            ${pricing.rrp !== null ? pricing.rrp : "990"}
          </JourneyOldPrice>
          <JourneyPrice>
            ${pricing.salePrice !== null ? pricing.salePrice : "990"}
          </JourneyPrice>
          <PriceDes bold>Payment Plan</PriceDes>
          <JourneyOldPrice>
            ${pricing.paymentPlan !== null ? pricing.paymentPlan : "1200"}
          </JourneyOldPrice>
          <JourneyPrice>
            $
            {pricing.paymentPlanSalesPrice !== null
            ? pricing.paymentPlanSalesPrice
            : "1599"}
          </JourneyPrice>
          <PriceButton>Contact us</PriceButton>
        </PricingWrapper>
      </ContentWrapper>
    </AdditionalSupportContainer>
  )
}

export default AdditionalSupportCard
