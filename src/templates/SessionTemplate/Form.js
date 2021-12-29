import React from "react"
import { CourseGuideContainer } from "./index.css"
import { CustomForm } from "../../components/Forms/FormFieldComponent"
import { H3 } from "../../styles/Typography.css"

const Form = ({ course, title, buttonTitle }) => {
  const handleSubmit = v => {
    console.log(v)
  }
  return (
    <CourseGuideContainer course={course}>
      <H3 style={{marginTop: "0"}} course={course}>{title}</H3>
      <CustomForm
        course={course}
        buttonText={buttonTitle}
        handleSubmit={handleSubmit}
      />
    </CourseGuideContainer>
  )
}

export default Form
