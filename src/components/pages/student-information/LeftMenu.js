import React from "react"
import { LeftMenuWrapper, MenuTitle, MenuLink, LinkWrapper } from "./index.css"
import { studentInformationLeftMenu } from "../../../contents/student-information-left-menu"

const LeftMenu = () => {
  return (
    <LeftMenuWrapper>
      <MenuTitle>Student Information</MenuTitle>
      <LinkWrapper>
        {studentInformationLeftMenu.map(item => (
          <MenuLink to={item.link} key={item.link}>
            {item.title}
          </MenuLink>
        ))}
      </LinkWrapper>
    </LeftMenuWrapper>
  )
}
export default LeftMenu
