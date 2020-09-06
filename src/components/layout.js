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
                    render={
                        data => {
                            const navLinks = data.site.siteMetadata.navLinks;
                            const title = this.props.title ? this.props.title + ' | ' + data.site.siteMetadata.title : data.site.siteMetadata.title;
                            const description = this.props.description && this.props.description.length ? this.props.description.join('') : data.site.siteMetadata.description.join('');
                            const keywords = data.site.siteMetadata.keywords.join(',') + ',' + this.props.keywords.join(',');
                            const siteUrl = data.site.siteMetadata.siteUrl;
                            const author = this.props.author ? this.props.author : data.site.siteMetadata.author;
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
                                            { rel: "icon", type: "image/png", sizes: "16x16", href: `${Favicon}` },
                                            { rel: "icon", type: "image/png", sizes: "32x32", href: `${Favicon}` },
                                            { rel: "shortcut icon", type: "image/png", href: `${Favicon}` },
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
                                        <div id="copyright">&copy; `${author}` <CurrentYear /></div>
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
    description: [],
    keywords: [],
    author: '',
    slug: '',
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    description: PropTypes.arrayOf(PropTypes.string),
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
    keywords: PropTypes.arrayOf(PropTypes.string),
    author: PropTypes.string.isRequired,
    image: PropTypes.string,
    slug: PropTypes.string.isRequired,
}

export default Layout
