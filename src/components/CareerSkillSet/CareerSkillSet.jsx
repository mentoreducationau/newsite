import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { CareerInfo, CourseContainer } from "./Careerskillset.css"

import { Container, SplitContainer } from "../../styles/ContainerStyles.css"
import { Title, Subtitle, Paragraph } from "../../styles/Typography.css"

const CareerSkillSket = ({ title, course }) => {
  return course ? (
    <CourseContainer>
      <Title course>{title}</Title>
      <SplitContainer>
        <StaticImage src="../../images/career.jpg" alt="career-img" />
        <CareerInfo>
          <Subtitle>Career Skillsets</Subtitle>
          <Paragraph>
            This role looks after the administrative side of contracts within
            project management, with all relevant stakeholders. This involves
            assisting in the contract process from start to finish, and requires
            strong communication skills, as well as attention to detail and
            written skills.
          </Paragraph>
        </CareerInfo>
      </SplitContainer>
    </CourseContainer>
  ) : (
    <Container>
      <Title>{title}</Title>
      <SplitContainer>
        <StaticImage src="../../images/career.jpg" alt="career-img" />
        <CareerInfo>
          <Subtitle>Career Skillsets</Subtitle>
          <Paragraph>
            This role looks after the administrative side of contracts within
            project management, with all relevant stakeholders. This involves
            assisting in the contract process from start to finish, and requires
            strong communication skills, as well as attention to detail and
            written skills.
          </Paragraph>
        </CareerInfo>
      </SplitContainer>
    </Container>
  )
}

export default CareerSkillSket
