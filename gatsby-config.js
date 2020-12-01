require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {

    plugins: [
      {
        resolve: `gatsby-plugin-styled-components`,
        options: {
          // Add any options here
        },
      },
    ],
    
  }