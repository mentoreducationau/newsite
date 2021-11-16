import React from "react"
import { DownloadFreeContainer } from "./index.css"
import { CustomForm } from "../FormFieldComponent"
import { H3, Paragraph } from "../../../styles/Typography.css"

const DownloadFree = ({ course }) => {
  const handleSubmit = v => {
    console.log(v)
  }
  return (
    <DownloadFreeContainer course={course}>
      <H3 course={course}>
        NEED MORE INFO? DOWNLOAD YOUR FREE COURSE GUIDE <br /> AND REQUEST A
        FREE COURSE CONSULTATION.
      </H3>
      <Paragraph>
        Please feel free to complete and submit the online form below <br />
        or give us a call on <strong>1800 787 014</strong>.
      </Paragraph>
      <CustomForm
        course={course}
        buttonText="Download"
        handleSubmit={handleSubmit}
      />
    </DownloadFreeContainer>
  )
}

export default DownloadFree
