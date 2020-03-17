module.exports = {
  siteMetadata: {
    title: 'Morphic',
      navLinks: [
          'Home',
          'About',
          'Chapters',
          'Cast',
          'Subscribe'
      ],
      categories: [
          'Book 1',
          'Book 2',
          'Book 3',
          'Misc'
      ]
  },
  pathPrefix: `/static`, // Build with `gatsby build --prefix-paths`
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
    `gatsby-plugin-sass`,
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `src`,
            path: `${__dirname}/src/`,
        },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
        {
          resolve: "gatsby-remark-embed-video",
          options: {
            width: 800,
            ratio: 1.77,
            height: 400,
            related: false,
            noIframeBorder: true 
          }
        }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans', 'Gochi Hand']
        }
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    }
  ],
}
