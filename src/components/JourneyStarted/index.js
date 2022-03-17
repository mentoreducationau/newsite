import React, { forwardRef } from "react"
import { Title, Paragraph } from "../../styles/Typography.css"

import { IntroContainer, Intro, CardWrapper } from "./index.css"
import JourneyCard from "./JourneyCard"
import JourneyCardWithTutorials from "./JourneyCardWithTutorials"

const JourneyStarted = ({ pricing, courseCode }, ref) => {
  return (
    <>
      <Title>How to get your journey started</Title>
      <IntroContainer>
        <Intro>
          All courses are offered online and are self paced with your desired
          level of support.
        </Intro>
        <Paragraph>
          Mentor specialises in providing professional education and training
          services to you anywhere, any-time. We appreciate that learning needs
          differ for each individual and organisation, which is why we allow you
          to select the approach that works best for you.
        </Paragraph>
      </IntroContainer>
      <CardWrapper ref={ref}>
        <JourneyCard pricing={pricing} courseCode={courseCode} title="Self Paced" />
        <JourneyCardWithTutorials pricing={pricing} courseCode={courseCode} title="With Tutorials" />
      </CardWrapper>
    </>
  )
}

export default forwardRef(JourneyStarted)
