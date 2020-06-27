import React from "react"
import NavLink from "./NavLink"

const NavLinks = ({ links = [], path }) => {
  if (!links) return null
  return links.map(({ link, display, icon, selected, ...props }, index) => (
    <NavLink
      key={link}
      display={display}
      link={link}
      icon={icon}
      selected={path == link}
      {...props}
    />
  ))
}

export default NavLinks
