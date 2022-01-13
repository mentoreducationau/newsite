import React from "react"
import { SearchText, SearchWrapper } from "./courses.css"
import Dropdown from "./DropDown"

const CoursesSearch = ({options, setSearchText, excuteScroll}) => {
  return (
    <SearchWrapper row mobWidth="75%">
        <SearchText>Quick select field of study: </SearchText>
        <Dropdown options={options} setSearchText={setSearchText} excuteScroll={excuteScroll} />
    </SearchWrapper>
  )
}
export default CoursesSearch
