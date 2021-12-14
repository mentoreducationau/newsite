import React from "react"
import { links } from "./links-array"
import { HeaderLink, LinksWrapper, LogoWrapepr, NavWrapper } from "./header.css"
const Header = () => {
  return (
    <NavWrapper>
      <LogoWrapepr to={"/"}>Mentor Education</LogoWrapepr>
      <LinksWrapper>
        {links.map((link, i) => (
          <HeaderLink className="border-bottom" to={`${link.slug}`}>
            {link.name}
          </HeaderLink>
        ))}
      </LinksWrapper>
    </NavWrapper>
  )
}

export default Header
