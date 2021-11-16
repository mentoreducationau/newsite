import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import {
  BusinessInfo,
} from "./BusinessSkillSet.css"

import { Container, SplitContainer } from "../../styles/ContainerStyles.css"
import { Title, Subtitle, Paragraph } from "../../styles/Typography.css"

const BusinessSkillSet = () => {
  return (
    <Container>
      <Title>
        Find out what your education pathway could look like
      </Title>
      <SplitContainer>
        <StaticImage src="../../images/bus.jpg" alt="Education pathway" />
        <BusinessInfo>
          <Subtitle>Business Qualification Pathway</Subtitle>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Paragraph>
        </BusinessInfo>
      </SplitContainer>
    </Container>
  
  )
}

export default BusinessSkillSet
