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

const JourneyCardWithTutorials = ({ pricing, courseCode, title }) => {
  return (
    <JourneyCardContainer>
      <JourneyTitle>{title}</JourneyTitle>
      <JourneyOldPrice>
        ${pricing.tutorialsRrp !== null ? pricing.tutorialsRrp : pricing.rrp}
      </JourneyOldPrice>
      <JourneyPrice>
        $
        {pricing.tutorialsSalePrice !== null
          ? pricing.tutorialsSalePrice
          : pricing.salePrice}
      </JourneyPrice>
      <PriceDes>Full payment</PriceDes>
      <PriceDes>Start anytime</PriceDes>
      <JourneyOldPrice>
        $
        {pricing.paymentPlanTutorialsRrp !== null
          ? pricing.paymentPlanTutorialsRrp
          : pricing.paymentPlan}
      </JourneyOldPrice>
      <JourneyPrice>
        $
        {pricing.paymentPlanTutorialsSalePrice !== null
          ? pricing.paymentPlanTutorialsSalePrice
          : pricing.paymentPlanSalePrice}
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

export default JourneyCardWithTutorials
