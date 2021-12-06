import React from "react"
import { Link } from "gatsby"
import { Paragraph } from "../../../styles/Typography.css"
import { CourseCardWrapper } from "../../ImageGrid/index.css"
import {
  RightWrapper,
  CardWrapper,
  LeftWrapper,
} from "./index.css"

const Card = ({ heading, link }) => {
  return (
    <CourseCardWrapper style={{ padding: "0", height: "135px" }}>
      <CardWrapper>
        <LeftWrapper>
          <Paragraph>
            <Link to={link}>{heading}</Link>
          </Paragraph>
        </LeftWrapper>
        <RightWrapper></RightWrapper>
      </CardWrapper>
    </CourseCardWrapper>
  )
}

export default Card
