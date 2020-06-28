import React from "react"

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

const SocialLink = ({ url, icon, ...props }) => {
  return (
    <a href={url} style={{ margin: 8 }} {...props}>
      {icon}
    </a>
  )
}

export default SocialLinks
