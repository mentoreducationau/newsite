import React, { forwardRef } from "react"
import { StaticImage } from "gatsby-plugin-image"

import {
  InputForm,
  InputContainer,
  QuotedBoxRight,
  QuotedBoxLeft,
  InputLabel,
  Textarea,
  FooterFormbutton,
  FooterFormbuttonWrapper,
  FormIntroContainer,
  FormDescription,
  CourseContainer,
} from "./FooterForm.css"

import {
  DivHeavy,
  Paragraph,
  Subtitle,
  Title,
} from "../../styles/Typography.css"
import { Container } from "../../styles/ContainerStyles.css"

const FooterForm = (props, ref) => {
  return props.course ? (
    <CourseContainer ref={ref}>
      <Title course>
        Need more <span style={{ color: "#FF1010" }}>assistance</span> or to
        talk to an expert?
      </Title>
      <FormIntroContainer>
        <StaticImage src="../../images/footer-img.jpg" alt="form-image" />
        <FormDescription>
          <Subtitle>We understand</Subtitle>
          <DivHeavy>Help</DivHeavy>
          <Paragraph>
            Sometimes you just want to talk to someone who understands what all
            of this is information means and can explain it in a way you can
            understand.
          </Paragraph>
          <DivHeavy>Can’t find enough information?</DivHeavy>
          <Paragraph>
            If you have more questions or queries we have Education Advise
            experts waiting to answer any and all of your queries.
          </Paragraph>
        </FormDescription>
      </FormIntroContainer>
      <InputContainer>
        <QuotedBoxLeft>
          <InputLabel>Name</InputLabel>
          <InputForm />
        </QuotedBoxLeft>
        <QuotedBoxRight>
          <InputLabel>Phone</InputLabel>
          <InputForm />
        </QuotedBoxRight>
        <InputLabel>Email</InputLabel>
        <InputForm />
        <InputLabel>How can we help?</InputLabel>
        <Textarea />
        <FooterFormbuttonWrapper>
          <FooterFormbutton>REACH OUT</FooterFormbutton>
        </FooterFormbuttonWrapper>
      </InputContainer>
    </CourseContainer>
  ) : (
    <Container ref={ref}>
      <Title>
        Need more <span style={{ color: "#FF1010" }}>assistance</span> or to
        talk to an expert?
      </Title>
      <FormIntroContainer>
        <StaticImage src="../../images/footer-img.jpg" alt="form-image" />
        <FormDescription>
          <Subtitle>We understand</Subtitle>
          <DivHeavy>Help</DivHeavy>
          <Paragraph>
            Sometimes you just want to talk to someone who understands what all
            of this is information means and can explain it in a way you can
            understand.
          </Paragraph>
          <DivHeavy>Can’t find enough information?</DivHeavy>
          <Paragraph>
            If you have more questions or queries we have Education Advise
            experts waiting to answer any and all of your queries.
          </Paragraph>
        </FormDescription>
      </FormIntroContainer>
      <InputContainer>
        <QuotedBoxLeft>
          <InputLabel>Name</InputLabel>
          <InputForm />
        </QuotedBoxLeft>
        <QuotedBoxRight>
          <InputLabel>Phone</InputLabel>
          <InputForm />
        </QuotedBoxRight>
        <InputLabel>Email</InputLabel>
        <InputForm />
        <InputLabel>How can we help?</InputLabel>
        <Textarea />
        <FooterFormbuttonWrapper>
          <FooterFormbutton>REACH OUT</FooterFormbutton>
        </FooterFormbuttonWrapper>
      </InputContainer>
    </Container>
  )
}

export default forwardRef(FooterForm)
