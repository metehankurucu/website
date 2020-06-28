import { useEffect, useState } from "react"

export const useTheme = (themes = ["dark"]) => {
  const isClient = typeof window !== `undefined`
  const initalTheme = isClient
    ? window.localStorage.getItem("theme")
    : themes[0]
  const [theme, setTheme] = useState(initalTheme)
  const [mountedComponent, setMountedComponent] = useState(false)

  const setMode = mode => {
    const themeMode = mode in themes ? mode : themes[0]
    if (isClient) {
      window.localStorage.setItem("theme", themeMode)
    }
    setTheme(themeMode)
  }

  const toggleTheme = () => {
    const length = themes.length
    const index = themes.indexOf(theme)

    setMode(themes[(index + 1) % length])
  }

  useEffect(() => {
    const localTheme = isClient
      ? window.localStorage.getItem("theme")
      : themes[0]
    if (localTheme && themes.includes(localTheme)) {
      setTheme(localTheme)
    } else {
      setMode(themes[0])
    }
    setMountedComponent(true)
  }, [])
  return [theme, toggleTheme, mountedComponent]
}
