import React from "react"
import { AboutUsContainer, HeadingText, IntroText } from "./index.css"

const AboutUsIntro = ({ heading, intro }) => {
  return (
    <AboutUsContainer marginBottom="1rem">
      <HeadingText>{heading}</HeadingText>
      {intro.map((item, index) => (
        <React.Fragment key={index}>
          <IntroText>{item}</IntroText>
        </React.Fragment>
      ))}
    </AboutUsContainer>
  )
}
export default AboutUsIntro
