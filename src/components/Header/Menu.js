import React from "react"
import useActiveMenu from "../../hooks/ActiveMenu"
import {
  LogoWrapepr,
  IconImg,
  TopBannerWrapper,
  MenuListWrapper,
  MenuLink,
  BottomLink,
  BottomWrapper,
  MenuContainer,
} from "./header.css"
import cancelIcon from "../../images/svg/cancel_icon.svg"

const Menu = () => {
  const { menuOpen, setMenuOpen } = useActiveMenu()
  const menuItems = [
    { title: "About Us", to: "/about-us" },
    { title: "Schools", to: "/schools" },
    { title: "Courses", to: "/courses" },
    { title: "Timetable", to: "/workshop-dates" },
    { title: "Student Information", to: "/student-information" },
    { title: "Student Life", to: "/student-life" },
    { title: "Special Offers", to: "special-offers" },
    { title: "Contact Us", to: "/contact-us" },
    { title: "MELMS Login", to: "/lms-gateway-login" },
  ]

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <MenuContainer menuOpen={menuOpen}>
        <TopBannerWrapper>
          <LogoWrapepr to={"/"} onClick={() => closeMenu()} mobileMenu>
            Mentor Education
          </LogoWrapepr>
          <IconImg
            src={cancelIcon}
            onClick={() => closeMenu()}
            alt="cancel-icon"
          />
        </TopBannerWrapper>
        <MenuListWrapper>
          {menuItems.map(item => (
            <MenuLink key={item.title} to={item.to} onClick={() => closeMenu()}>
              {item.title}
            </MenuLink>
          ))}
        </MenuListWrapper>
        <BottomWrapper>
          <BottomLink to="">support @mentor.edu.au</BottomLink>
          <BottomLink to="">1800 - 000 - 000</BottomLink>
        </BottomWrapper>
      </MenuContainer>
    </>
  )
}

export default Menu
