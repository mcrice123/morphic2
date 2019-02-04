import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

class Layout extends Component {
    constructor() {
        super();
        this.state = {
            menuOpen: false,
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
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
    render() {
        return (
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
                            {name: 'description', content: 'Sample'},
                            {name: 'keywords', content: 'sample, something'},
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
                    </div>
                </>
            )}
        />
        );
    }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
