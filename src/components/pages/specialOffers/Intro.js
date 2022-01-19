import React from "react"
import { SectionContainer } from "../../../styles/ContainerStyles.css"
import { HeadingText, IntroText } from "./offers.css"

const OffersIntro = () => {
  return (
    <SectionContainer marginBottom="42px" mobWidth="75%">
      <div style={{width: "50%", margin: "0 auto"}}>
        <HeadingText>Special Offers</HeadingText>
        <IntroText>
          Summer of Learning Special Intake Offers Must end Sunday January 16th
          2022 @ 11.59pm AEDT.
        </IntroText>
      </div>
    </SectionContainer>
  )
}
export default OffersIntro
