import React from "react"
import CountUp from "../CountUp/counter"
import Testimonials from "../Testimonial/Testimonial"

import {
  KnowmoreContainer,
  KnowmoreBoxes,
  KnowmoreBox,
  Percentage,
  KnowmoreCourseBox,
  MentorEducationContainer,
} from "./Knowmore.css"

import { DivHeavy, Subtitle, Title, H4 } from "../../styles/Typography.css"

const Knowmore = ({ course }) => {
  return course ? (
    <>
      <Subtitle>
        Want to know more about our{" "}
        <span style={{ color: "#FF0000" }}>Mentor Education</span> graduates?
      </Subtitle>
      <MentorEducationContainer>
        <KnowmoreBoxes course>
          <KnowmoreCourseBox>
            <div>
              <CountUp size="172px">92</CountUp>
              <Percentage course>%</Percentage>
            </div>
            <H4>
              Of graduates were employed or enrolled in further study after
              training.
            </H4>
          </KnowmoreCourseBox>
          <KnowmoreCourseBox>
            <div>
              <CountUp size="172px">91</CountUp>
              <Percentage course>%</Percentage>
            </div>
            <H4>Of students were overall quality of training</H4>
          </KnowmoreCourseBox>
        </KnowmoreBoxes>
        <Testimonials course />
      </MentorEducationContainer>
    </>
  ) : (
    <KnowmoreContainer>
      <Title>
        Want to know more about our{" "}
        <span style={{ color: "#FF0000" }}>Mentor Education</span> graduates?
      </Title>
      <KnowmoreBoxes>
        <KnowmoreBox>
          <div>
            <CountUp>92</CountUp>
            <Percentage>%</Percentage>
          </div>
          <DivHeavy>
            Of graduates were employed or enrolled in further study after
            training.
          </DivHeavy>
        </KnowmoreBox>
        <KnowmoreBox>
          <div>
            <CountUp>91</CountUp>
            <Percentage>%</Percentage>
          </div>
          <DivHeavy>Of students were overall quality of training</DivHeavy>
        </KnowmoreBox>
      </KnowmoreBoxes>
    </KnowmoreContainer>
  )
}

export default Knowmore
