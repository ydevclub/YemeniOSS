module.exports = {
  siteMetadata: {
    title: `Yemen Contributors`,
    description: `قائمة بالمشاريع البرمجية اليمنية المفتوحة المصدر`,
    author: `@MajedBojan`,
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
        name: `Yemen Contributors`,
        short_name: `YemeniOSS`,
        start_url: `/`,
        background_color: `#FFC107`,
        theme_color: `#FFC107`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
