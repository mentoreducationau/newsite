import React from "react"
import { SectionContainer } from "../../../styles/ContainerStyles.css"
import { SearchText } from "./schools.css"
import Dropdown from "./DropDown"

const CoursesSearch = ({options, setSearchText, excuteScroll}) => {
  return (
    <SectionContainer marginBottom="58px" row style={{alignItems: "baseline", gap: "35px", position: "relative"}}>
        <SearchText>Quick select field of study: </SearchText>
        <Dropdown options={options} setSearchText={setSearchText} excuteScroll={excuteScroll} />
    </SectionContainer>
  )
}
export default CoursesSearch
