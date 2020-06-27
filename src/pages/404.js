import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout title="404: NOT FOUND">
    <SEO title="404: Not found" />
    <p style={{ textAlign: "center" }}>
      You just hit a route that doesn&#39;t exist... the sadness.
    </p>
  </Layout>
)

export default IndexPage
