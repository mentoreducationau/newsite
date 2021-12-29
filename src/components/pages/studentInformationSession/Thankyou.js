import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import {
  DescText,
  ThankyouWrapper,
  ThankyouContentWrapper,
  ThankyouTitleText,
  ViewLink,
  CancelWrapper,
  CancelText
} from "./sis.css"

export default function Thankyou({toggleModal}) {
  return (
    <ThankyouWrapper>
      <StaticImage
        src="../../../images/thanks-modal.png"
        style={{
          height: "100%",
          border: "none",
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
        }}
      />
      <ThankyouContentWrapper>
        <ThankyouTitleText>Thank you!</ThankyouTitleText>
        <DescText>
          You will receive a confirmation and reminders in your email
        </DescText>
        <ViewLink to="">View Session Details</ViewLink>
        <ViewLink to="">View Course Details</ViewLink>
      </ThankyouContentWrapper>
      <CancelWrapper>
        <StaticImage src="../../../images/svg/modal_cancel_icon.svg" style={{width: "100%"}} onClick={()=>toggleModal(0, true)} />
        <CancelText onClick={()=>toggleModal(0, true)}>Close</CancelText>
      </CancelWrapper>
    </ThankyouWrapper>
  )
}
