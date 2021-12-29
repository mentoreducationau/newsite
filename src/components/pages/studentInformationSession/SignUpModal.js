import React from "react"
import styled from "styled-components"
import Modal from "styled-react-modal"
import { SignUpForm } from "./SignUpForm"
import Thankyou from "./Thankyou"

const StyledModal = Modal.styled`
  width: 904px;
  height: 429px;
  margin-top: 139px;
  display: flex;
  background-color: white;
  border: none;
  padding: 39px 56px;
  border-radius: 10px;
  opacity: 1;
  transition : all 0.3s ease-in-out;`

export default function SignUpModal({
  isOpen,
  opacity,
  afterOpen,
  beforeClose,
  toggleModal,
  zoomWebinarId,
  signedUp,
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
        {signedUp ? (
          <Thankyou />
        ) : (
          <SignUpForm zoomWebinarId={zoomWebinarId} />
        )}
      </StyledModal>
    </div>
  )
}
