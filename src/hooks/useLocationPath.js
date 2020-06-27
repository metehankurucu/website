import { useState, useEffect } from "react"

const useLocationPath = () => {
  const [path, setPath] = useState("")

  useEffect(() => {
    const findPath = () => {
      if (typeof window === "undefined") {
        return ""
      }
      const url = window.location.href
      const urls = url.split("/")
      return urls[urls.length - 1].split("?")[0]
    }
    const path = findPath()
    setPath("/" + path)
  }, [])

  return path
}

export default useLocationPath
