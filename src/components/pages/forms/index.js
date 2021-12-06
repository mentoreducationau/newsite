import React from "react"

import { TitleBanner, MainContainer } from "./index.css"
import { Headline, Title } from "../../../styles/Typography.css"
import { Container } from "../../../styles/ContainerStyles.css"
import Intro from "./Intro"
import { CardsWrapper } from "../../ImageGrid/index.css"
import CardWithBotton from "./CardWithBotton"

const StudentForms = () => {
  const data = [
    {
      title: "",
      cards: [
        {
          title: "",
          title_link: "",
          buttons: [
            {
              title: "",
              link: "",
            },
          ],
        },
      ],
    },
  ]
  return (
    <>
      <TitleBanner style={{ backgroundAttachment: "fixed" }}>
        <Container>
          <Headline banner>Student Forms And Documents</Headline>
        </Container>
      </TitleBanner>
      <MainContainer>
        <Intro />
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <Title style={{ textAlign: "center" }} course>{item.title}</Title>
            <CardsWrapper>
              {item.cards.map((it, idx)=>(
                  <CardWithBotton key={idx} card={it} />
              ))}
            </CardsWrapper>
          </React.Fragment>
        ))}
      </MainContainer>
    </>
  )
}

export default StudentForms
