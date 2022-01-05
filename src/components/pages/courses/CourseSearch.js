import React from "react"
import { SectionContainer } from "../../../styles/ContainerStyles.css"
import { SearchText } from "./courses.css"
import Dropdown from "./DropDown"
import DropDownSelect from "./DropDownSelect"

const CoursesSearch = ({options, setSearchText, excuteScroll}) => {
  return (
    <SectionContainer marginBottom="58px" row style={{alignItems: "baseline", gap: "35px", position: "relative"}}>
        <SearchText>Quick select field of study: </SearchText>
        {/* <DropDownSelect options={options} excuteScroll={excuteScroll} /> */}
        <Dropdown options={options} setSearchText={setSearchText} excuteScroll={excuteScroll} />
    </SectionContainer>
  )
}
export default CoursesSearch
