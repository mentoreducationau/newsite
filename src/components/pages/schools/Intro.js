import React from "react"
import { SectionContainer } from "../../../styles/ContainerStyles.css"
import { HeadingText, IntroText } from "./schools.css"

const CoursesIntro = ({ heading, intro }) => {
  return (
    <SectionContainer marginBottom="70px">
        <HeadingText>{heading}</HeadingText>
        <IntroText>{intro}</IntroText>
    </SectionContainer>
  )
}
export default CoursesIntro
