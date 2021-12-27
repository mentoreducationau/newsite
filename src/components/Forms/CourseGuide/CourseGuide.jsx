import React from "react"
import { CourseGuideContainer, ImageContainer } from "./CourseGuide.css"
import { CustomForm } from "../FormFieldComponent"
import { H3 } from "../../../styles/Typography.css"
import { StaticImage } from "gatsby-plugin-image"

const CourseGuide = ({ course, imgContained }) => {
  const handleSubmit = v => {
    console.log(v)
  }
  return (
    <CourseGuideContainer course={course}>
      <H3 style={{marginTop: "0"}} course={course}>Download a Course Guide</H3>
      {imgContained && (
        <ImageContainer>
          <StaticImage
            src="../../../images/download-bg.png"
            alt="downloadImg"
          />
        </ImageContainer>
      )}
      <CustomForm
        course={course}
        buttonText="Download"
        handleSubmit={handleSubmit}
      />
    </CourseGuideContainer>
  )
}

export default CourseGuide
