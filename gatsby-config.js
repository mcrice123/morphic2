module.exports = {
  siteMetadata: {
    title: 'Morphic',
      navLinks: [
          'Home',
          'About',
          'Archive',
          'Characters'
      ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#463299',
        theme_color: '#463299',
        display: 'minimal-ui',
        //icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
      {
          resolve: `gatsby-plugin-typography`,
          options: {
              pathToConfigModule: `src/utils/typography.js`,
          },
      },
      `gatsby-plugin-sass`,
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `src`,
              path: `${__dirname}/src/`,
          },
      },
      `gatsby-transformer-remark`,
  ],
}
