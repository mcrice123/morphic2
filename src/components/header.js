// 3rd party
import React, { Component } from 'react'
import { Link } from 'gatsby'

// Components
import SlideMenu from './slidemenu';

// Images
import BannerImage from '../images/banner.jpg';

// SVGs
import MorphicLogo from "../assets/morphic_logo.svg";
import FacebookLogo from '../assets/facebook.svg';
import GithubLogo from '../assets/github.svg';
import RSSLogo from '../assets/rss.svg';

// Styles
require('./styles/header.scss');

class Header extends Component {

    render() {
        const siteTitle = this.props.siteTitle;
        const navLinks = this.props.navLinks;
        return (
            <div id={"header"}>
                <div id={"header-banner"} style={{ backgroundImage: `url(` + BannerImage + `)` }}>
                </div>
                <div id={"header-links"} onClick={this.props.closeMenu}>
                    <div className={"wrapper"}>
                        <Link id={"main-logo"} to="/">
                            <MorphicLogo />
                        </Link>
                        <nav id={"navbar"}>
                            <ul>
                                {
                                    navLinks.map((myLink) => {
                                        const path = "/" + (myLink !== "Home" ? myLink.toLowerCase() + "/" : "");
                                        return (<li key={myLink}>
                                                <Link to={path}>
                                                    {myLink}
                                                </Link>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </nav>
                        <div
                            id={"menuIcon"}
                            onClick={e => { this.props.toggleMenu(); e.stopPropagation();}}
                            className={ this.props.menuOpen ? 'active' : '' }
                        >
                            <div
                                id={"first-bar"}
                            />
                            <div
                                id={"second-bar"}
                            />
                            <div
                                id={"third-bar"}
                            />
                        </div>
                        {
                            this.props.menuOpen &&
                            <SlideMenu
                                navLinks={navLinks}
                            />
                        }
                    </div>
                </div>
                <div id="main-funnels">
                    <a id="start-reading" href="">
                        <span>Start Reading</span>
                    </a>
                    <a id="latest-post" href="">
                        <span>Latest Post</span>
                    </a>
                    <div id="social-media">
                        <div className={"media-title"}>
                            Social Media:
                        </div>
                        <div className={"media-links"}>
                            <a href="" target="_blank">
                                <FacebookLogo className={"icon"} />
                            </a>
                            <a href="" target="_blank">
                                <GithubLogo className={"icon"} />
                            </a>
                            <a href="" target="_blank">
                                <RSSLogo className={"icon"} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;

