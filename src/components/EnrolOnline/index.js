import React from "react"
import { H3, Paragraph } from "../../styles/Typography.css"
import { EnrolContainer, OnlineButton, PriceButton } from "./index.css"

const EnrolOnline = ({ virtual, support }) => {
  return (
    <EnrolContainer>
      {virtual ? (
        <H3 course>
          ENROL <br /> A. Flexible Online Study Self-paced study with Virtual
          Online Classes
        </H3>
      ) : (
        <H3 course>
          ENROL <br /> A. Flexible Online Study Self-paced study
        </H3>
      )}
      {support ? (
        <Paragraph>Call us on 1800 787 014 to enrol.</Paragraph>
      ) : (
        <>
          <OnlineButton>ENROL ONLINE</OnlineButton>
          <PriceButton>ENROL - PAYMENT PLAN</PriceButton>
        </>
      )}
    </EnrolContainer>
  )
}

export default EnrolOnline
