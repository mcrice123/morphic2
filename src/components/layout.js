import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Favicon from '../images/favicon.png'
import CurrentYear from './current-year'
import BackToTop from './back-to-top'

class Layout extends Component {
    constructor() {
        super();
        this.state = {
            menuOpen: false,
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.checkForMaxWidthReached = this.checkForMaxWidthReached.bind(this);
    }
    componentDidMount() {
        window.addEventListener('resize', this.checkForMaxWidthReached);
    }
    toggleMenu()
    {
        let menu = this.state.menuOpen;
        this.setState({ menuOpen: !menu });
    }
    closeMenu()
    {
        this.setState({menuOpen: false});
    }
    checkForMaxWidthReached() {
        if (window.innerWidth > 768) {
            this.closeMenu();
        }
    }

    render() {
        return (
            <div style={{ margin: `0 auto`, maxWidth: 944, position: "relative", backgroundColor: '#fff', width: '90%' }}>
                <StaticQuery
                    query={graphql`
                        query SiteTitleQuery {
                            site {
                                siteMetadata {
                                    title
                                    navLinks
                                    categories
                                    siteUrl
                                    description
                                    keywords
                                }
                            }
                        }
                    `}

            render={data => (
                <>
                    <Helmet
                        title={data.site.siteMetadata.title}
                        meta={[
                            {name: 'description', content: `${data.site.siteMetadata.description}`},
                            {name: 'keywords', content: `${data.site.siteMetadata.keywords}`},
                            {name: 'image', content: `${data.site.siteMetadata.siteUrl}` + '/seo/default.jpg'},
                            {
                                property: `og:title`,
                                content: data.site.siteMetadata.title,
                            },
                            {
                                property: `og:description`,
                                content: data.site.siteMetadata.description,
                            },
                            {
                                property: `og:type`,
                                content: `website`,
                            },
                            {
                                name: `twitter:creator`,
                                content: data.site.siteMetadata.author,
                            },
                            {
                                name: `twitter:title`,
                                content: data.site.siteMetadata.title,
                            },
                            {
                                name: `twitter:description`,
                                content: data.site.siteMetadata.description,
                            },
                        ]
                        .concat(
                        //    metaImage
                        //      ? [
                            [
                                  {
                                    property: "og:image",
                                    content: `${data.site.siteMetadata.siteUrl}` + '/seo/default.jpg',
                                  },
                                  {
                                    property: "og:image:width",
                                    content: 1200,
                                  },
                                  {
                                    property: "og:image:height",
                                    content: 630,
                                  },
                                  {
                                    name: "twitter:card",
                                    content: "summary_large_image",
                                  },
                                ]
                             // : [
                            //      {
                            //        name: "twitter:card",
                            //        content: "summary",
                            //      },
                            //    ]
                        )}
                        link={[
                            { rel: "icon", type: "image/png", sizes: "16x16", href: `${Favicon}` },
                            { rel: "icon", type: "image/png", sizes: "32x32", href: `${Favicon}` },
                            { rel: "shortcut icon", type: "image/png", href: `${Favicon}` },
                          ]}
                    >
                        <html lang="en"/>
                    </Helmet>
                    <Header
                        siteTitle={data.site.siteMetadata.title}
                        navLinks={data.site.siteMetadata.navLinks}
                        toggleMenu={this.toggleMenu}
                        closeMenu={this.closeMenu}
                        menuOpen={this.state.menuOpen}
                    />
                    <BackToTop />
                    <div
                         id={"allcontent"}
                         onClick={this.closeMenu}
                         style={{
                             margin: '0 auto',
                             maxWidth: 960,
                             padding: '0px 1.0875rem 1.45rem',
                             paddingTop: 0,
                         }}
                    >
                        {this.props.children}
                        <div id="copyright">&copy; Maria Rice <CurrentYear /></div>
                    </div>
                </>
            )}
        />
        </div>
        );
    }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
