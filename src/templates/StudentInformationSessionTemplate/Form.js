import React from "react"
import { CourseGuideContainer } from "./index.css"
import { VerticalFormTemplate } from "../../components/Forms/FormFieldComponent"
import { H3 } from "../../styles/Typography.css"

const Form = ({ course, title, buttonTitle, toggleModal, openDownloadWindow }) => {
  const handleSubmit = v => {
    toggleModal && toggleModal()
    openDownloadWindow && openDownloadWindow()
  }
  return (
    <CourseGuideContainer course={course}>
      <H3 style={{ marginTop: "0" }} course={course}>
        {title}
      </H3>
      <VerticalFormTemplate
        course={course}
        buttonText={buttonTitle}
        handleSubmit={handleSubmit}
      />
    </CourseGuideContainer>
  )
}

export default Form
