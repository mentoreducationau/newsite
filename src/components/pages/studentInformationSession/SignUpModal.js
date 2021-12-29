import React from "react"
import Modal from "styled-react-modal"
import { SignUpForm } from "./SignUpForm"
import { SignFormWrapper } from "./sis.css"

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

export default function SignUpModal({
  isOpen,
  opacity,
  afterOpen,
  beforeClose,
  toggleModal,
  zoomWebinarId,
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
        <SignFormWrapper>
          <SignUpForm zoomWebinarId={zoomWebinarId} />
        </SignFormWrapper>
      </StyledModal>
    </div>
  )
}
