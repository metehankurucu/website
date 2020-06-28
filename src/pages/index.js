import React from "react"
import cn from "classnames"

import styles from "../styles/index.module.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Desktop from "../components/svg/desktop"
import SocialLinks from "../components/SocialLinks.js"

import { SOCIAL_LINKS } from "../data/links"

const IndexPage = ({ location }) => {
  return (
    <Layout path={location.pathname} title="">
      <SEO title="Home" />
      <div className={cn(styles.container)}>
        <h1 className={cn(styles.name)}>Hi, I'm Metehan.</h1>
        <h3 className={cn("text-default", styles.about)}>
          I am <span className={"text-primary"}>CSE</span> student at Marmara
          University. I am developing{" "}
          <span className={"text-primary"}>web</span> and{" "}
          <span className={"text-primary"}>mobile apps</span>,{" "}
          <span className={"text-primary"}>backend services</span>. I like
          learning technologies, concepts and developing projects.
        </h3>
        <SocialLinks
          links={SOCIAL_LINKS}
          className={cn(styles.socialicon, "socialicon")}
        />
        <Desktop className={cn(styles.desktop)} />
      </div>
    </Layout>
  )
}

export default IndexPage
