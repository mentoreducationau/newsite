import React from "react"

import { TitleBanner, MainContainer } from "./index.css"
import { Headline, Title } from "../../../styles/Typography.css"
import { Container } from "../../../styles/ContainerStyles.css"
import Intro from "./Intro"
import { CardsWrapper } from "../../ImageGrid/index.css"
import CardWithBotton from "./CardWithBotton"

const StudentForms = ({ formsData }) => {
  console.log(formsData, "FFF")

  return (
    <>
      <TitleBanner style={{ backgroundAttachment: "fixed" }}>
        <Container>
          <Headline banner>Student Forms And Documents</Headline>
        </Container>
      </TitleBanner>
      <MainContainer>
        <Intro />
        {formsData.map((item, index) => (
          <React.Fragment key={index}>
            <Title style={{ textAlign: "center" }} course>
              {item.facultyName}
            </Title>
            <CardsWrapper>
              {item.course !== null &&
                item.course.map((it, idx) => (
                  <CardWithBotton key={idx} course={it} />
                ))}
            </CardsWrapper>
          </React.Fragment>
        ))}
      </MainContainer>
    </>
  )
}

export default StudentForms
