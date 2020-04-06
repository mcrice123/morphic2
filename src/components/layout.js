import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Favicon from '../images/favicon.png'
import CurrentYear from './current-year'

class Layout extends Component {
    constructor() {
        super();
        this.state = {
            menuOpen: false,
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.checkForMaxWidthReached = this.checkForMaxWidthReached.bind(this);
       // this.getYear = this.getYear.bind(this);
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
    /*getYear() {
        return <span>{(new Date().getFullYear())}</span>;
    }*/
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
                  }
                }
              }
            `}

            render={data => (
                <>
                    <Helmet
                        title={data.site.siteMetadata.title}
                        meta={[
                            {name: 'description', content: 'Morphic Graphic Novel Series: Erica Bright crosses paths with people who take the form of animals--and have other hidden abilities.'},
                            {name: 'keywords', content: 'morphic, Maria, Rice, comic, graphic, novel, series'},
                        ]}
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
