import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { DescText, ThankyouWrapper, ThankyouContentWrapper, ThankyouTitleText } from "./sis.css"

export default function Thankyou() {
  return (
    <ThankyouWrapper>
      {/* <GatsbyImage image={getImage(thankyouHeroImage)} /> */}
      <ThankyouContentWrapper>
        <ThankyouTitleText>Thank you!</ThankyouTitleText>
        <DescText>
          You will receive a confirmation and reminders in your email
        </DescText>
        <Link to="" >View Session Details</Link>
        <Link to="" >View Course Details</Link>
      </ThankyouContentWrapper>
    </ThankyouWrapper>
  )
}
