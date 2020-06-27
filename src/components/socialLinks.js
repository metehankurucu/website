import React from "react"
import SocialLink from "./socialLink"

const SocialLinks = ({ links = [], ...props }) => {
  if (links.length === 0) return null
  return (
    <div style={{ margin: 20 }}>
      {links.map(({ url, icon }, index) => (
        <SocialLink
          key={"social-link-" + index}
          url={url}
          icon={icon}
          {...props}
        />
      ))}
    </div>
  )
}

export default SocialLinks
