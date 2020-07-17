module.exports = {
  siteMetadata: {
    title: `Experimental Software`,
    description: `We are the team of software engineers and designers that will turn your idea into a product.`,
    author: `@alexanderqchen`,
    siteUrl: "https://experimental.software/",
    image: "/images/logo-banner.png",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-square-rounded.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-cname",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
