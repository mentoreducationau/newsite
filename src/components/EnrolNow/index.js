import React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import {
//   Subtitle,
//   Paragraph,
//   ParagraphMedium,
// } from "../../styles/Typography.css"
import {
  EnrolContainer,
  PriceContainer,
  // Prices,
  PriceButton,
  EnrolText,
  PriceText,
  ClickHereWrapper,
  ClickHereText
} from "./index.css"

const EnrolNow = ({ price, excuteScroll }) => {
  return (
    <EnrolContainer>
      <StaticImage
        src="../../images/footer-img.jpg"
        alt="support"
        width={340}
      />
      <ClickHereWrapper>
        <ClickHereText onClick={() => excuteScroll()} click>Click here</ClickHereText>
        <ClickHereText>speak with an expert</ClickHereText>
      </ClickHereWrapper>
      <PriceContainer>
        {/* <Prices>
          <Paragraph>Self Paced</Paragraph>
          <ParagraphMedium
            style={{ textDecoration: "line-through", marginBottom: 0 }}
          >
            $990
          </ParagraphMedium>
          <Subtitle
            style={{
              textDecoration: "underline",
              color: "#CC4A28",
              marginTop: 0,
            }}
          >
            $960
          </Subtitle>
        </Prices>
        <Prices style={{ borderLeft: "1px solid" }}>
          <Paragraph>With Tutorials</Paragraph>
          <ParagraphMedium
            style={{ textDecoration: "line-through", marginBottom: 0 }}
          >
            $120
          </ParagraphMedium>
          <Subtitle
            style={{
              textDecoration: "underline",
              color: "#CC4A28",
              marginTop: 0,
            }}
          >
            $990
          </Subtitle>
        </Prices> */}
        <EnrolText>ENROL NOW FROM</EnrolText>
        <PriceText>${price}*</PriceText>
      </PriceContainer>
      {/* <a href="https://enrolments.mentor.edu.au/enrol-selfserve?course_code=${courseCode}&dc=courseadviser20"> */}
        <PriceButton>ENROL</PriceButton>
      {/* </a> */}
      {/* <ParagraphMedium course style={{ margin: "8px" }}>
        Payment Plans also available
      </ParagraphMedium>
      <ParagraphMedium course style={{ color: "#CC4A28" }}>
        Click Here
      </ParagraphMedium> */}
    </EnrolContainer>
  )
}

export default EnrolNow
