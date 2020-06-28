import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectsList from "../components/projects"

const ProjectsPage = ({ location }) => {
  return (
    <Layout path={location.pathname} title="Projects">
      <SEO title="Projects" />
      <ProjectsList />
    </Layout>
  )
}
export default ProjectsPage
