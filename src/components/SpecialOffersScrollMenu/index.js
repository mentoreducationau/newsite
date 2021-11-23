import React from "react"
import { Container } from "../../styles/ContainerStyles.css"
import { specialOffersArray } from "../../contents/courseArrayForSpecialOffers"
import { RedDecParagraph, SpecialOffersScrollMenuWrapper } from "./index.css"

const SpecialOffersScrollMenu = ({ excuteScroll }) => {
  console.log(specialOffersArray)
  return (
    <Container style={{ marginTop: 0 }}>
      <SpecialOffersScrollMenuWrapper>
        {specialOffersArray.map((item, index) => (
          <RedDecParagraph key={index} onClick={() => excuteScroll(index)}>
            {"school " + (index + 1)}
          </RedDecParagraph>
        ))}
        {/* <RedDecParagraph onClick={() => excuteScroll(0)}>{"school 1"}</RedDecParagraph>
        <RedDecParagraph onClick={() => excuteScroll(1)}>{"school 2"}</RedDecParagraph>
        <RedDecParagraph onClick={() => excuteScroll(2)}>{"school 3"}</RedDecParagraph>
        <RedDecParagraph onClick={() => excuteScroll(3)}>{"school 4"}</RedDecParagraph>
        <RedDecParagraph onClick={() => excuteScroll(4)}>{"school 5"}</RedDecParagraph>
        <RedDecParagraph onClick={() => excuteScroll(5)}>{"school 6"}</RedDecParagraph> */}
      </SpecialOffersScrollMenuWrapper>
    </Container>
  )
}

export default SpecialOffersScrollMenu
