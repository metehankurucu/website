import React from "react"

const SocialLink = ({ url, icon, ...props }) => {
  return (
    <a href={url} style={{ margin: 8 }} {...props}>
      {icon}
    </a>
  )
}

export default SocialLink
