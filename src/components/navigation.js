import React from "react"

import styles from "./navigation.module.css"

import NavLinks from "./NavLinks"
import cn from "classnames"

const Navigation = ({ links, path, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      onMouseOver={onMouseEnter}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(styles.buttons, "navbar")}
    >
      <NavLinks path={path} links={links} />
    </div>
  )
}

export default Navigation
