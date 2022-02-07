import React from "react"
import styled from "styled-components"
import Modal from "styled-react-modal"
import { DownloadForm } from "./DownloadForm"

const StyledModal = Modal.styled`
  width: 768px;
  height: 395px;
  margin-top: 200px;
  display: flex;
  background-color: white;
  border: none;
  border-radius: 10px;
  opacity: 1;
  transition : all 0.3s ease-in-out;`

export const FormWrapper = styled.div`
  padding: 39px 49px;
`

export default function DownloadModal({
  isOpen,
  opacity,
  afterOpen,
  beforeClose,
  toggleModal,
  zoomWebinarId,
  onDownload
}) {
  const handleSubmit = () => {
    onDownload()
    toggleModal()
  }
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
        <FormWrapper>
          <DownloadForm
            zoomWebinarId={zoomWebinarId}
            handleSubmit={handleSubmit}
          />
        </FormWrapper>
      </StyledModal>
    </div>
  )
}
