import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Favicon from '../images/favicon.png'
import CurrentYear from './current-year'
//import BackToTop from './back-to-top'

// Favicons
import Favicon57x57 from '../images/favicon/apple-icon-57x57.png';
import Favicon60x60 from '../images/favicon/apple-icon-60x60.png';
import Favicon72x72 from '../images/favicon/apple-icon-72x72.png';
import Favicon76x76 from '../images/favicon/apple-icon-76x76.png';
import Favicon114x114 from '../images/favicon/apple-icon-114x114.png';
import Favicon120x120 from '../images/favicon/apple-icon-120x120.png';
import Favicon144x144 from '../images/favicon/apple-icon-144x144.png';
import Favicon152x152 from '../images/favicon/apple-icon-152x152.png';
import Favicon180x180 from '../images/favicon/apple-icon-180x180.png';
import Favicon192x192 from '../images/favicon/android-icon-192x192.png';
import Favicon32x32 from '../images/favicon/favicon-32x32.png';
import Favicon96x96 from '../images/favicon/favicon-96x96.png';
import Favicon16x16 from '../images/favicon/favicon-16x16.png';
import FaviconManifest from '../images/favicon/manifest.json';
import TileImage from '../images/favicon/ms-icon-144x144.png';

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
                                    description2
                                    keywords
                                    author
                                }
                            }
                        }
                    `}
                    render={
                        data => {
                            const navLinks = data.site.siteMetadata.navLinks;
                            const title = this.props.title ? this.props.title + ' | ' + data.site.siteMetadata.title : data.site.siteMetadata.title;
                            const description = this.props.description2 && this.props.description2.length ? this.props.description2.join('') : data.site.siteMetadata.description2.join('');
                            const keywords = data.site.siteMetadata.keywords.join(',');
                            const siteUrl = data.site.siteMetadata.siteUrl;
                            const author = data.site.siteMetadata.author;
                            const metaImage = siteUrl + (this.props.image ? this.props.image : '/seo/default.jpg');
                            const slug = this.props.slug;
                            return (
                                <>
                                    <Helmet
                                        title={title}
                                        meta={
                                            [
                                                {name: 'description', content: description},
                                                {name: 'keywords', content: keywords},
                                                {name: 'image', content: metaImage},
                                                {name: "msapplication-TileColor", content: "#ffffff"},
                                                {name: "msapplication-TileImage", content: `${TileImage}`},
                                                {name: "theme-color", content: "#ffffff"},
                                                {
                                                    property: `og:title`,
                                                    content: title,
                                                },
                                                {
                                                    property: `og:description`,
                                                    content: description,
                                                },
                                                {
                                                    property: `og:type`,
                                                    content: `website`,
                                                },
                                                {
                                                    property: `og:url`,
                                                    content: siteUrl + slug,
                                                },
                                                {
                                                    name: `twitter:creator`,
                                                    content: author,
                                                },
                                                {
                                                    name: `twitter:title`,
                                                    content: title,
                                                },
                                                {
                                                    name: `twitter:description`,
                                                    content: description,
                                                },
                                            ]
                                            .concat(
                                                [
                                                    {
                                                        property: "og:image",
                                                        content: metaImage,
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
                                            )
                                            .concat(this.props.meta)
                                        }
                                        link={[
                                            { rel: "shortcut icon", type: "image/png", href: `${Favicon}` },
                                            { rel: "apple-touch-icon", sizes: "57x57", href: `${Favicon57x57}` },
                                            { rel: "apple-touch-icon", sizes: "60x60", href: `${Favicon60x60}` },
                                            { rel: "apple-touch-icon", sizes: "72x72", href: `${Favicon72x72}` },
                                            { rel: "apple-touch-icon", sizes: "76x76", href: `${Favicon76x76}` },
                                            { rel: "apple-touch-icon", sizes: "114x114", href: `${Favicon114x114}` },
                                            { rel: "apple-touch-icon", sizes: "120x120", href: `${Favicon120x120}` },
                                            { rel: "apple-touch-icon", sizes: "144x144", href: `${Favicon144x144}` },
                                            { rel: "apple-touch-icon", sizes: "152x152", href: `${Favicon152x152}` },
                                            { rel: "apple-touch-icon", sizes: "180x180", href: `${Favicon180x180}` },
                                            { rel: "icon", type: "image/png", sizes: "192x192", href: `${Favicon192x192}` },
                                            { rel: "icon", type: "image/png", sizes: "32x32", href: `${Favicon32x32}` },
                                            { rel: "icon", type: "image/png", sizes: "96x96", href: `${Favicon96x96}` },
                                            { rel: "icon", type: "image/png", sizes: "16x16", href: `${Favicon16x16}` },
                                        ]}
                                    >
                                        <html lang={this.props.lang} />
                                    </Helmet>
                                    <Header
                                        siteTitle={title}
                                        navLinks={navLinks}
                                        toggleMenu={this.toggleMenu}
                                        closeMenu={this.closeMenu}
                                        menuOpen={this.state.menuOpen}
                                    />
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
                                        <div id="copyright">&copy; {author} <CurrentYear /></div>
                                    </div>
                                </>
                            );
                        }
                    }
                />
            </div>
        );
    }
}

Layout.defaultProps = {
    lang: `en`,
    title: '',
    meta: [],
    description2: [],
    author: '',
    slug: '',
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    description2: PropTypes.arrayOf(PropTypes.string),
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string,
    slug: PropTypes.string.isRequired,
}

export default Layout
