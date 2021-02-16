import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <h1>Sample Gatsbyjs</h1>

      <h4>{data.allMarkdownRemark.totalCount}</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
          >
            <h3>{node.frontmatter.title}</h3>
            <p>{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
          excerpt
          html
        }
      }
    }
  }
`

export default IndexPage
