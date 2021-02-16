module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
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
        plugins: []
      }
    }
  ]
};
