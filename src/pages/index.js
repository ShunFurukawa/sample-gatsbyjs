import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

// markup
const IndexPage = () => {
  return (
    <Layout>
      <h1>Sample Gatsbyjs</h1>
      <Link to="/contact/">Contact</Link>
    </Layout>
  )
}

export default IndexPage
