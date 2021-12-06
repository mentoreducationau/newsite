import React from "react"
import { Link } from "gatsby"
import { Paragraph } from "../../../styles/Typography.css"
import { CourseCardWrapper } from "../../ImageGrid/index.css"
import {
  RightWrapper,
  CardWrapper,
  LeftWrapper,
} from "./index.css"

const Card = ({ card }) => {
  return (
    <CourseCardWrapper style={{ padding: "0", height: "135px" }}>
      <CardWrapper>
        <LeftWrapper>
          <Paragraph>
            <Link to={card.heading.toLowerCase().replaceAll(" & ", "-")}>{card.heading}</Link>
          </Paragraph>
        </LeftWrapper>
        <RightWrapper></RightWrapper>
      </CardWrapper>
    </CourseCardWrapper>
  )
}

export default Card
