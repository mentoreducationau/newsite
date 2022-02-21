import React from "react"
import { MobileFormWrapper } from "./index.css"
import { MobileFormTemplate } from "../../components/Forms/FormFieldComponent"

const MobileStickyForm = ({ show }) => {
  const handleSubmit = () => {}
  return (
    <MobileFormWrapper show={show}>
      <MobileFormTemplate
        // course={course}
        buttonText="buttonTitle"
        handleSubmit={handleSubmit}
      />
    </MobileFormWrapper>
  )
}

export default MobileStickyForm
