import { useEffect, useState } from "react"

export const useTheme = (themes = ["dark"]) => {
  const isClient = typeof window !== `undefined`
  const initalTheme = isClient
    ? window.localStorage.getItem("theme")
    : themes[0]
  const [theme, setTheme] = useState(() => {
    if (themes.includes(initalTheme)) {
      return initalTheme
    }
    return themes[0]
  })
  const [mountedComponent, setMountedComponent] = useState(false)

  const setMode = mode => {
    const themeMode = themes.includes(mode) ? mode : themes[0]
    if (isClient) {
      window.localStorage.setItem("theme", themeMode)
    }
    setTheme(themeMode)
  }

  const toggleTheme = () => {
    const length = themes.length
    const index = themes.indexOf(theme)
    if (false) {
    } else {
      setMode(themes[(index + 1) % length])
    }
  }

  useEffect(() => {
    const localTheme = isClient
      ? window.localStorage.getItem("theme")
      : themes[0]
    setTheme(localTheme)
    setMountedComponent(true)
  }, [])
  return [theme, toggleTheme, mountedComponent]
}
