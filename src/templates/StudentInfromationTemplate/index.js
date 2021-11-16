import React from "react"

import { TitleBanner, MainContainer } from "./index.css"

import { Headline } from "../../styles/Typography.css"
import ImageGrid from "../../components/ImageGrid"
import { StudentsWork } from "../../components"
import { Container } from "../../styles/ContainerStyles.css"

const StudentInformationTemplate = () => {
  return (
    <>
      <TitleBanner style={{ backgroundAttachment: "fixed" }}>
        <Container>
          <Headline banner>Student Information</Headline>
        </Container>
      </TitleBanner>
      <MainContainer>
        <ImageGrid />
        <StudentsWork course="false" />
      </MainContainer>
    </>
  )
}

export default StudentInformationTemplate
