import React from "react"
import { FormButton } from "./formComponent.css"

const SubmitButton = ({course, buttonText}) => {
  return <FormButton course={course}>{buttonText}</FormButton>
}

export default SubmitButton
