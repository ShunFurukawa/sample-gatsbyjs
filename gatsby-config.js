module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/contents/`,
        name: "articles"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600
            }
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "目次",
              tight: false,
              ordered: false,
              fromHeading: 2,
              toHeading: 6,
              className: "table-of-contents"
            }
          },
          `gatsby-remark-autolink-headers`
        ]
      }
    }
  ]
};
