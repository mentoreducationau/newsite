import React from "react"
import { Container } from "../../styles/ContainerStyles.css"
import { specialOffersArray } from "../../contents/courseArrayForSpecialOffers"
import { RedDecParagraph, SpecialOffersScrollMenuWrapper } from "./index.css"
import { StudentLifeSubtitle } from "../../templates/StudentLifeTemplate/index.css"

const SpecialOffersScrollMenu = ({ excuteScroll }) => {
  return (
    <Container style={{ marginTop: 0 }}>
      <StudentLifeSubtitle>Special Offers - Must end Thursday November 25th 2021 @ 4.00pm AEDT.</StudentLifeSubtitle>
      <SpecialOffersScrollMenuWrapper>
        {specialOffersArray.map((item, index) => (
          <RedDecParagraph key={index} onClick={() => excuteScroll(index)}>
            {"school " + (index + 1)}
          </RedDecParagraph>
        ))}
      </SpecialOffersScrollMenuWrapper>
    </Container>
  )
}

export default SpecialOffersScrollMenu
