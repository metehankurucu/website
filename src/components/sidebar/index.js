import React, { useState, useContext } from "react"

import styles from "./sidebar.module.css"

import MyAvatar from "../MyAvatar"
import Navigation from "../navigation"
import ThemeToggler from "../themeToggler"

import cn from "classnames"

import ThemeContext from "../../store/ThemeContext"
import { NAV_LINKS } from "../../data/links"

const Sidebar = ({ avatar, path, children }) => {
  const { toggleTheme } = useContext(ThemeContext)
  const [onMouse, setOnMouse] = useState(false)

  return (
    <div className={cn(styles.sidebar)}>
      <ThemeToggler toggleTheme={toggleTheme} />
      <MyAvatar {...avatar} smiling={onMouse} />
      <h2 className={cn("text-primary", styles.title)}></h2>
      <Navigation
        onMouseEnter={() => setOnMouse(true)}
        onMouseLeave={() => setOnMouse(false)}
        path={path}
        links={NAV_LINKS}
      />
    </div>
  )
}

export default Sidebar
