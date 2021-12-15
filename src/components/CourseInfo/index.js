import React from "react"
import Tab from "../Tab/Tab"
import Renderer from "../../rich-text-renderers/sample"

const CourseInfo = ({
  outcomes,
  entryRequirements,
  unitsDelivery,
  learningExperience,
  paymentOptions,
  landingIntro
}) => {

  const tabContentArray = [
    outcomes,
    entryRequirements,
    unitsDelivery,
    learningExperience,
    paymentOptions,
  ]
  return (
    <>
      <Renderer node={landingIntro} />
      <Tab tabContentArray={tabContentArray} />
    </>
  )
}

export default CourseInfo
