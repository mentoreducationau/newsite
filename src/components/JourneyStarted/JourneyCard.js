import React from "react"

import {
  JourneyCardContainer,
  JourneyTitle,
  JourneyOldPrice,
  JourneyPrice,
  PriceDes,
  PriceButton,
} from "./index.css"
import { NoneDecorationA } from "../../styles/ButtonStyles.css"

const JourneyCard = ({ pricing, courseCode, title }) => {
  console.log(pricing)
  return (
    <JourneyCardContainer>
      <JourneyTitle>{title}</JourneyTitle>
      <JourneyOldPrice>
        ${pricing.rrp !== null ? pricing.rrp : "990"}
      </JourneyOldPrice>
      <JourneyPrice>
        ${pricing.salePrice !== null ? pricing.salePrice : "990"}
      </JourneyPrice>
      <PriceDes>Full payment</PriceDes>
      <PriceDes>Start anytime</PriceDes>
      <JourneyOldPrice>
        ${pricing.paymentPlan !== null ? pricing.paymentPlan : "1200"}
      </JourneyOldPrice>
      <JourneyPrice>
        $
        {pricing.paymentPlanSalesPrice !== null
          ? pricing.paymentPlanSalesPrice
          : "1599"}
      </JourneyPrice>
      <PriceDes>Payment Plan</PriceDes>
      <PriceDes>Direct Debit</PriceDes>
      <PriceButton>Course Guide</PriceButton>
      <PriceButton>
        <NoneDecorationA
          href={
            `https://enrolments.mentor.edu.au/enrol-selfserve?course_code=` +
            courseCode +
            `&dc=courseadviser20`
          }
          style={{ width: "100%" }}
        >
          ENROL NOW
        </NoneDecorationA>
      </PriceButton>
    </JourneyCardContainer>
  )
}

export default JourneyCard
