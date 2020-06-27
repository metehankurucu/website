import React from "react"
import styles from "./theme-toggler.module.css"
import { IoMdColorWand } from "react-icons/io"

const ThemeToggler = ({ toggleTheme }) => {
  return <IoMdColorWand className={styles.icon} onClick={toggleTheme} />
}

export default ThemeToggler
