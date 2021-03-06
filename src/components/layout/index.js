import React from "react"
import cn from "classnames"

import { GlobalStyles } from "../../styles/global"
import "./layout.css"
import styles from "./layout.module.css"

import Sidebar from "../sidebar"

import ThemeContext from "../../store/ThemeContext"
import themes from "../../styles/themes"
import { useTheme } from "../../hooks/useTheme"
import { desktopMode, windowPartsForAvatar } from "../../styles"

const fakeMouseHook = (ref, options) => {
  return { clientX: 0, clientY: 0, elementHeight: 0, elementWidth: 0 }
}

const isClient = typeof window !== "undefined"
const useMouse = isClient
  ? require("@react-hook/mouse-position").default
  : fakeMouseHook

const Layout = ({ title, path, children }) => {
  const [theme, toggleTheme] = useTheme(Object.keys(themes))
  let ref = React.useRef(null)

  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  })

  const calcPositions = ({ clientX, clientY, elementHeight, elementWidth }) => {
    let eyeX, eyeY
    if (elementWidth < desktopMode) {
      //Mobile
      eyeY = clientY ? clientY / (elementHeight / windowPartsForAvatar) - 1 : 0
      eyeX = clientX
        ? clientX / (elementWidth / windowPartsForAvatar) -
          windowPartsForAvatar / 2
        : 0
    } else {
      //Desktop
      eyeY = clientY
        ? clientY / (elementHeight / windowPartsForAvatar) -
          windowPartsForAvatar / 2
        : 0
      eyeX = clientX
        ? clientX / (elementWidth / windowPartsForAvatar) -
          windowPartsForAvatar +
          1
        : 0
    }

    return {
      x: eyeX,
      y: eyeY,
    }
  }

  const { x, y } = calcPositions(mouse)

  return (
    <ThemeContext.Provider value={{ theme: themes[theme], toggleTheme }}>
      <GlobalStyles theme={(themes && themes[theme]) || themes.dark} />
      <div ref={ref} className={styles.layout}>
        <div className={cn(styles.main, "sideborder")}>
          <div className={styles.content}>
            <h1 className={styles.pagetitle}>{title}</h1>
            {children}
          </div>
          <footer className={styles.footer}></footer>
        </div>
        <div className={cn(styles.sidebar, "sidebar")}>
          <Sidebar path={path} avatar={{ eyes: { x, y } }} />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default Layout
