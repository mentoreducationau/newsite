import React from "react"
import { AboutUsContainer, IntroText, SomeInfoContent, SomeInfoWrapper } from "./index.css"

const SomeInfo = ({ something }) => {
  return (
    <AboutUsContainer>
      {something.map((item, index) => (
        <SomeInfoWrapper key={index}>
          <h2>{item.title}</h2>
          <SomeInfoContent>
            <IntroText>{item.content}</IntroText>
          </SomeInfoContent>
        </SomeInfoWrapper>
      ))}
    </AboutUsContainer>
  )
}
export default SomeInfo
