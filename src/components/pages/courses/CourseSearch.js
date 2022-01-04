import React from "react"
import { SectionContainer } from "../../../styles/ContainerStyles.css"
import { SearchText } from "./courses.css"
import DropDownSelect from "./DropDownSelect"

const CoursesSearch = ({options, excuteScroll}) => {
  return (
    <SectionContainer marginBottom="58px" row style={{alignItems: "baseline", gap: "35px"}}>
        <SearchText>Quick select field of study: </SearchText>
        <DropDownSelect options={options} excuteScroll={excuteScroll} />
    </SectionContainer>
  )
}
export default CoursesSearch
