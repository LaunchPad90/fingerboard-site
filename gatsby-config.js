require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `509 Fingerboards`,
    siteUrl: `https://www.509fb.netlify.app`,
    description: `High quality, hand made fingerboards.`,
  },

  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
          typeName: `GraphCMS`,
          fieldName: `gcms`,
          url: process.env.GATSBY_GRAPH_CMS_URL,
          downloadLocalImages: true,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],   
}