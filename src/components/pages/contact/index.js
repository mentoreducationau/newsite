import React from "react"
import { Link } from "gatsby"

import { TitleBanner, MainContainer, ParagraphWrapper } from "./index.css"
import { Headline, Title } from "../../../styles/Typography.css"
import { Container } from "../../../styles/ContainerStyles.css"
import { Paragraph } from "../../../styles/Typography.css"

const ContactUs = () => {
  return (
    <>
      <TitleBanner style={{ backgroundAttachment: "fixed" }}>
        <Container>
          <Headline banner>Contact Us</Headline>
        </Container>
      </TitleBanner>
      <MainContainer>
        <ParagraphWrapper>
          <Title course style={{ marginTop: "6rem" }}>
            For all administration, enrolments, sales and corporate sales
            enquiries:
          </Title>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Title course style={{ marginBottom: "1.5rem" }}>
            Head Office
          </Title>
          <Paragraph>Mentor Education Pty Ltd</Paragraph>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Paragraph>Level 5, Building K, 33 - 45 St John Street</Paragraph>
          <Paragraph>Windsor VIC 3181</Paragraph>
          <Paragraph>Australia</Paragraph>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Title course style={{ marginBottom: "1.5rem" }}>
            Phone
          </Title>
          <Paragraph><a href="tel:1300306146">1300 306 146</a> (Australia)</Paragraph>
          <Paragraph>0800 700 037 (New Zealand)</Paragraph>
          <Paragraph>International: +613 8317 2953 (International)</Paragraph>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Paragraph>
            Office hours: 9.00am to 5.00pm Monday to Friday (excluding public
            holidays) (Australian Eastern Time)
          </Paragraph>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Title course style={{ marginBottom: "1.5rem" }}>
            New Enquiries
          </Title>
          <Paragraph>
            Education Advice team members are available to assist with new
            student enquiries.
          </Paragraph>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Paragraph>P: <a href="tel:1300306146">1300 306 146</a> (Australia)</Paragraph>
          <Paragraph>E: <a href="https://courseconsultant@mentor.edu.au">courseconsultant@mentor.edu.au</a></Paragraph>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Title course style={{ marginBottom: "1.5rem" }}>
            Student Support
          </Title>
          <Paragraph>
            Training, assessment and student support staff are available to
            assist with current and alumni student enquiries.
          </Paragraph>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Paragraph>P: <a href="tel:1300306146">1300 306 146</a> (Australia)</Paragraph>
          <Paragraph>E: <a href="https://service@mentor.edu.au">service@mentor.edu.au</a></Paragraph>
          <Paragraph>
            B: <Link to="/bookings/">Click here</Link> to book an appointment with a Trainer and/or Assessor.
          </Paragraph>
        </ParagraphWrapper>
      </MainContainer>
    </>
  )
}

export default ContactUs
