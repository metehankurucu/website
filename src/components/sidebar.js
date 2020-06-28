import React, { useState } from "react"
import MyAvatar from "./MyAvatar"
import styles from "./sidebar.module.css"
import { NAV_LINKS } from "../data/links"
import Navigation from "./navigation"
import ThemeToggler from "./theme-toggler"
import cn from "classnames"
import { useContext } from "react"
import ThemeContext from "../store/ThemeContext"

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
