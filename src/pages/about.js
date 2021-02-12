import * as React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <Layout>
      <div style={{ color: `teal` }}>
        <h1>{ data.site.siteMetadata.title }</h1>
        <Header headerText="About" />
        <p>Such wow. Very React.</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
