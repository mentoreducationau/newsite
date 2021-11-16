import React from "react"

import { TitleBanner, MainContainer } from "./index.css"

import { Headline } from "../../styles/Typography.css"
import MentorLoginImageGrid from "../../components/MentorLoginImageGrid"
import { Container } from "../../styles/ContainerStyles.css"

const MELMSLoginTemplate = () => {
  return (
    <>
      <TitleBanner style={{ backgroundAttachment: "fixed" }}>
        <Container>
          <Headline banner>Mentor Education Learning Management System & Additional Information</Headline>
        </Container>
      </TitleBanner>
      <MainContainer>
        <MentorLoginImageGrid />
      </MainContainer>
    </>
  )
}

export default MELMSLoginTemplate
