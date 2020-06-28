import React from "react"

import { Link as GatbsyLink } from "gatsby"
import cn from "classnames"

import styles from "./navigation.module.css"

const NavLink = ({
  link,
  display,
  selected,
  iconLeft = null,
  iconRight = null,
  external,
}) => {
  const Link = external ? NavLinkExternal : NavLinkInternal

  return (
    <Link link={link} selected={selected}>
      <div className={cn(styles.navcontainer)}>
        {iconLeft ?? null}
        <h1 className={cn(styles.navtext)}>{display}</h1>
        {iconRight ?? null}
      </div>
    </Link>
  )
}

const NavLinkInternal = props => {
  return (
    <GatbsyLink
      to={props.link}
      className={cn(styles.navlink, "navlink", {
        selectedlink: props.selected,
      })}
    >
      {props.children}
    </GatbsyLink>
  )
}

const NavLinkExternal = props => {
  return (
    <a
      href={props.link}
      className={cn(styles.navlink, "navlink", {
        selectedlink: props.selected,
      })}
    >
      {props.children}
    </a>
  )
}

export default NavLink
