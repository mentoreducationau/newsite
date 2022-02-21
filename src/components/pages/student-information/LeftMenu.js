import React from "react"
import {
  LeftMenuWrapper,
  MenuTitle,
  MenuLink,
  MenuText,
  LinkWrapper,
} from "./index.css"
import { studentInformationLeftMenu } from "../../../contents/student-information-left-menu"

const LeftMenu = ({ activePage, handleLeftMenu }) => {
  return (
    <LeftMenuWrapper>
      <MenuTitle>Student Information</MenuTitle>
      <LinkWrapper>
        {studentInformationLeftMenu.map((item, index) => (
          <React.Fragment key={item.link}>
            {index < 7 ? (
              <MenuText
                activeStatus={activePage === index}
                onClick={() => handleLeftMenu(index, item.link)}
              >
                {item.title}
              </MenuText>
            ) : (
              <MenuLink to={item.link}>{item.title}</MenuLink>
            )}
          </React.Fragment>
        ))}
      </LinkWrapper>
    </LeftMenuWrapper>
  )
}
export default LeftMenu
