import React from "react"
import { Link } from "gatsby"
import { Paragraph } from "../../../styles/Typography.css"
import { CourseCardWrapper } from "../../ImageGrid/index.css"
import {
  ButtonWrapper,
  RightWrapper,
  CardWrapper,
  LeftWrapper,
} from "./index.css"

const Card = ({ card }) => {
  return (
    <CourseCardWrapper style={{ padding: "0" }}>
      <CardWrapper>
        <LeftWrapper>
          <Paragraph>
            <Link to={card.title_link}>{card.title}</Link>
          </Paragraph>
          {card.buttons.map((btn, index) => (
            <ButtonWrapper key={index}>
              <Link to={btn.link}>
                <button className="waves-effect waves-light btn red">
                {btn.title}
                  <i className="material-icons right">play_circle_outline</i>
                </button>
              </Link>
            </ButtonWrapper>
          ))}
        </LeftWrapper>
        <RightWrapper></RightWrapper>
      </CardWrapper>
    </CourseCardWrapper>
  )
}

export default Card
