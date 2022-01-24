import React from "react"
import { SectionContainer } from "../../../styles/ContainerStyles.css"
import { HeadingText, IntroText, IntroHeading } from "./faqs.css"

const FaqIntro = ({ heading, intro }) => {
  return (
    <SectionContainer marginBottom="15px" mobWidth="75%">
      <HeadingText>{heading}</HeadingText>
      {intro.map((item, index) => (
        <React.Fragment key={index}>
          <IntroHeading>{item.heading}</IntroHeading>
          <IntroText>{item.content}</IntroText>
        </React.Fragment>
      ))}
    </SectionContainer>
  )
}
export default FaqIntro
