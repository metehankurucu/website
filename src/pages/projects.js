import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectsList from "../components/ProjectsList"

const IndexPage = () => (
  <Layout title="Projects">
    <SEO title="Home" />
    <ProjectsList />
  </Layout>
)

export default IndexPage
