import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectsList from "../components/projects"

const ProjectsPage = ({ location }) => {
  return (
    <Layout path={location.pathname} title="Projects">
      <SEO title="Projects" />
      {/* <div style={{ textAlign: "center" }}>
        Also check out my{" "}
        <a href={"https://github.com/metehankurucu"} target="__blank"className='text-secondary' >
          Github
        </a>{" "}
        for small and side projects.
      </div> */}
      <ProjectsList />
    </Layout>
  )
}
export default ProjectsPage
