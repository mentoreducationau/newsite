import React, { useState } from "react"
import MobileStickyForm from "./MobileStickyForm"
import { Button } from "../../styles/ButtonStyles.css"
import {
  MobileStickyBarWrapper,
  BottomWrapper,
  CloseIconImg,
  PriceWrapper,
  PriceText,
} from "./index.css"
import mobileCloseIcon from "../../images/svg/mobile_sticky_close_icon.svg"

const MobileStickyBar = ({ price, excuteScroll }) => {
  const [showForm, setShowForm] = useState(false)
  return (
    <MobileStickyBarWrapper>
      <CloseIconImg
        src={mobileCloseIcon}
        show={showForm}
        onClick={() => setShowForm(false)}
      />
      <MobileStickyForm show={showForm} />
      <BottomWrapper>
        <PriceWrapper>
          <PriceText>Current Price</PriceText>
          <PriceText color="#DF2F16">$ {price}</PriceText>
        </PriceWrapper>
        <Button
          width="130px"
          height="31px"
          fontSize="18px"
          lineHeight="24px"
          borderRadius="3px"
          textTransform="none"
          onClick={() => setShowForm(true)}
        >
          Course Guide
        </Button>
        <Button
          width="99px"
          height="31px"
          fontSize="18px"
          lineHeight="24px"
          borderRadius="3px"
          onClick={() => excuteScroll()}
        >
          ENROL
        </Button>
      </BottomWrapper>
    </MobileStickyBarWrapper>
  )
}

export default MobileStickyBar
