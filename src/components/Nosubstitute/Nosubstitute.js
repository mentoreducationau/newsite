import React from "react"
import { StaticImage } from 'gatsby-plugin-image'

import {
  FoundersDetailGrid,
  QuotedPara,
  FounderDetails
} from "./Nosubstitute.css"

import { Container } from "../../styles/ContainerStyles.css"
import { Paragraph, Title, Subtitle, SpanHeavy } from "../../styles/Typography.css"
import { QuoteSvg } from '../../images/svg/quotations'

const Nosubsitute = () => {
  return (
    <Container>
      <Title>
        There is no substitute for{" "}
        <span style={{ color: "#FF1010" }}>quality</span> training
      </Title>
      <FoundersDetailGrid>
        <QuotedPara>
          <QuoteSvg left />
          OVER 15 YEARS AS A TRUSTED EDUCATOR IS A PROUD LEGACY THAT WE AIM TO
          UPHOLD TODAY AND FOR THE NEXT GENERATION OF FINANCIAL AND BUSINESS
          PROFESSIONALS
          <QuoteSvg right />
        </QuotedPara>
        <StaticImage src="../../../static/mark-sinclair.jpg" alt="mark-sinclair" />
        <FounderDetails>
          <Subtitle>Mark Sinclair</Subtitle>
          <SpanHeavy>Founder of Mentor Education PTY LTD</SpanHeavy>
          <Paragraph>
            We concentrate on what we do best. We believe our quality training
            will provide you with the outcomes you desire, be it a better job,
            an increased income, increased skills or gaining professional
            recognition.<br></br>
            <br></br> Concentrating on Accounting, Bookkeeping, Business,
            Financial Planning, Mortgage Broking and RG146 Compliance because it
            is what we know best and it is our passion. We are just as
            passionate about you our students; we want you to succeed. Work with
            us and we will get you through to graduation.<br></br>
            <br></br> We subscribe to best practice assessment standards
            ensuring you graduate at the leading edge of your field. You will be
            equipped with the skill and knowledge gained from an
            industry-leading training course that will fast track your finance,
            accounting and business services career.
          </Paragraph>
        </FounderDetails>
      </FoundersDetailGrid>
    </Container>
  )
}

export default Nosubsitute



