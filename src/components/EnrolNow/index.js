import React from "react"
import { Link } from "gatsby"
import {
  Subtitle,
  Paragraph,
  ParagraphMedium,
} from "../../styles/Typography.css"
import {
  EnrolContainer,
  PriceContainer,
  Prices,
  PriceButton,
  ClickHereLink,
} from "./index.css"

const EnrolNow = ({ excuteScroll }) => {
  return (
    <EnrolContainer>
      {/* <StaticImage
        src="../../images/support.png"
        alt="support"
        width={340}
      /> */}
      <Paragraph style={{ fontSize: 18 }}>
        Need help? <Link to="#">Click here</Link> to speak with an expert
      </Paragraph>
      <PriceContainer>
        <Prices>
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
        </Prices>
      </PriceContainer>
      <PriceButton>ENROL NOW</PriceButton>
      <ParagraphMedium course style={{ margin: "8px" }}>
        Payment Plans also available
      </ParagraphMedium>
      <ClickHereLink course onClick={() => excuteScroll()}>
        Click Here
      </ClickHereLink>
    </EnrolContainer>
  )
}

export default EnrolNow
