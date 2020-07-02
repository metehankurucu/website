import React from "react"
import cn from "classnames"

import styles from "../styles/index.module.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Desktop from "../components/svg/desktop"
import SocialLinks from "../components/social-links.js"

import { SOCIAL_LINKS } from "../data/links"

const IndexPage = ({ location }) => {
  return (
    <Layout path={location.pathname} title="">
      <SEO title="Home" />
      <div className={cn(styles.container)}>
        <h1 className={cn(styles.name)}>Hi, I'm Metehan.</h1>
        <h3 className={cn("text-default", styles.about)}>
          I am <strong className={"text-primary"}>CSE</strong> student at
          Marmara University. I am developing{" "}
          <strong className={"text-primary"}>web</strong> and{" "}
          <strong className={"text-primary"}>mobile apps</strong>,{" "}
          <strong className={"text-primary"}>backend services</strong>. I like
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
