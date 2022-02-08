import React from "react"
import Modal from "styled-react-modal"
import { StaticImage } from "gatsby-plugin-image"
import {
  DescText,
  ThankyouWrapper,
  ThankyouContentWrapper,
  ThankyouTitleText,
  ViewLink,
  CancelWrapper,
  CancelText,
  IconWrapper,
} from "./sis.css"

const StyledModal = Modal.styled`
  width: 904px;
  height: 429px;
  margin-top: 139px;
  display: flex;
  background-color: white;
  border: none;
  border-radius: 10px;
  opacity: 1;
  transition : all 0.3s ease-in-out;`

export default function ThankyouModal({
  isOpen,
  opacity,
  afterOpen,
  beforeClose,
  toggleModal,
  courseUrl,
  sessionUrl
}) {
  return (
    <div>
      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
      >
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
            {sessionUrl && <ViewLink to={"/student-information-session/"+sessionUrl} onClick={() => toggleModal()}>View Session Details</ViewLink>}
            {courseUrl && <ViewLink to={"/courses/"+courseUrl} onClick={() => toggleModal()}>View Course Details</ViewLink>}
          </ThankyouContentWrapper>
          <CancelWrapper>
            <IconWrapper>
              <StaticImage
                src="../../../images/svg/modal_cancel_icon.svg"
                onClick={() => toggleModal()}
              />
            </IconWrapper>

            <CancelText onClick={() => toggleModal()}>Close</CancelText>
          </CancelWrapper>
        </ThankyouWrapper>
      </StyledModal>
    </div>
  )
}
