import React from "react"
import { SectionContainer } from "../../../styles/ContainerStyles.css"
import { SearchText } from "./courses.css"
import DropDownSelect from "./DropDownSelect"

const CoursesSearch = ({options, excuteScroll}) => {
  return (
    <SectionContainer marginBottom="70px">
        <SearchText>heading</SearchText>
        <DropDownSelect options={options} excuteScroll={excuteScroll} />
    </SectionContainer>
  )
}
export default CoursesSearch
