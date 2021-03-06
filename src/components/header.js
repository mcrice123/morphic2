// 3rd party
import React, { Component } from 'react'
import { Link } from 'gatsby'

// Components
import MainFunnels from './main-funnels';
import SlideMenu from './slidemenu';

// Images
import BannerImage from '../images/banner.jpg';

// SVGs
import MorphicLogo from "../assets/morphic_logo.svg";
import MenuLogo from "../assets/hamburger.svg";

// Styles
require('./styles/header.scss');

class Header extends Component {

    render() {
       // const siteTitle = this.props.siteTitle;
        const navLinks = this.props.navLinks;
        return (
            <div id={"header"}>
                <div id={"header-banner"} style={{ backgroundImage: `url(` + BannerImage + `)` }}>
                </div>
                <div id={"header-links"} onClick={this.props.closeMenu}>
                    <div className={"wrapper"}>
                        <Link id={"main-logo"} to="/" aria-label="Link to homepage">
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
                                <li key="subscribe">
                                    <a href={"http://eepurl.com/g8TzPb"} target="_blank">
                                        Subscribe
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <button
                            id={"menuIcon"}
                            onClick={e => { this.props.toggleMenu(); e.stopPropagation();}}
                            className={ this.props.menuOpen ? 'active' : '' }
                            aria-label={'Open the navigation menu'}
                        >
                            <MenuLogo />
                        </button>
                        <SlideMenu
                            navLinks={navLinks}
                            isOpen={this.props.menuOpen ? "isOpen" : ""}
                        />
                    </div>
                </div>
                <MainFunnels />
            </div>
        );
    }
}

export default Header;

