import React from "react"

const SocialLink = ({ url, icon, ...props }) => {
  return (
    <a href={url} style={{ margin: 8 }} {...props}>
      {icon}
    </a>
  )
}

const SocialLinks = ({
  links = [],
  className = "",
  containerClassName = "",
  ...props
}) => {
  if (links.length === 0) return null
  return (
    <div className={containerClassName} style={{ margin: 20 }}>
      {links.map(({ url, icon }, index) => (
        <SocialLink
          key={"social-link-" + index}
          url={url}
          icon={icon}
          className={className}
          {...props}
        />
      ))}
    </div>
  )
}

export default SocialLinks
