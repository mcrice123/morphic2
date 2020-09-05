module.exports = {
  siteMetadata: {
    title: 'Morphic',
    author: 'Maria Rice',
    description: `A plea for help from a mysterious girl sidetracks Errie Bright and Lane Valerie on their way to a local festival. Although they expect to see people dressed up as animals for the event, the girls soon realize that the people they meet in the woods that day are not in costume...`,
    navLinks: [
        'Home',
        'About',
        'Chapters',
        'Cast',
    ],
    categories: [
        'Book 1',
        'Book 2',
        'Book 3',
        'Misc'
    ],
    siteUrl: 'https://cocky-goldwasser-cbfcf1.netlify.app/'
  },
  pathPrefix: `/static`, // Build with `gatsby build --prefix-paths`
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cms',
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
          name: `pages`,
          path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
          name: `characters`,
          path: `${__dirname}/src/characters`,
      },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `book1`,
            path: `${__dirname}/src/pages/book1`,
        },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
          name: `book2`,
          path: `${__dirname}/src/pages/book2`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
          name: `book3`,
          path: `${__dirname}/src/pages/book3`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
          name: `misc`,
          path: `${__dirname}/src/pages/misc`,
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
          families: ['Open Sans', 'Open Sans Bold 700', 'Gochi Hand']
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
