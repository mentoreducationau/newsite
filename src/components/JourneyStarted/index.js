import React, { forwardRef } from "react"
import { Title, Paragraph } from "../../styles/Typography.css"
import AdditionalSupportCard from "./AdditionalSupportCard"

import {
  IntroContainer,
  Intro,
  CardWrapper,
  DownloadWrapper,
  DownloadText,
} from "./index.css"
import SelfPacedPricingCard from "./SelfPacedPricingCard"
import WithTutorialsPricingCard from "./WithTutorialsPricingCard"

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
        <SelfPacedPricingCard
          pricing={pricing}
          courseCode={courseCode}
          title="Self Paced"
        />
        <WithTutorialsPricingCard
          pricing={pricing}
          courseCode={courseCode}
          title="With Tutorials"
        />
      </CardWrapper>
      <DownloadWrapper>
        <DownloadText>
          Want to read the full course guide?{" "}
          <span>
            <a href="">DOWNLOAD NOW</a>
          </span>
        </DownloadText>
      </DownloadWrapper>
      <AdditionalSupportCard pricing={pricing} />
    </>
  )
}

export default forwardRef(JourneyStarted)
