/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const { default: themes } = require("./src/styles/themes")

// You can delete this file if you're not using it
exports.onClientEntry = () => {
  if (window && !window.localStorage.getItem("theme")) {
    window.localStorage.setItem("theme", Object.keys(themes)[0])
  }
}
