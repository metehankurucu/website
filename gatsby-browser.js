/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const themeModes = require("./src/styles/themes").default

// You can delete this file if you're not using it
exports.onClientEntry = () => {
  if (typeof window !== "undefined") {
    const theme = window.localStorage.getItem("theme")
    const themes = Object.keys(themeModes)
    if (!theme || !themes.includes(theme)) {
      window.localStorage.setItem("theme", themes[0])
    }
  }
}
