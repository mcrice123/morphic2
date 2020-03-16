import React, { Component } from 'react'
import { Link } from 'gatsby'
import MenuIcon from './menuicon';
import SlideMenu from './slidemenu';
import BannerImage from '../images/banner.png';
import MorphicLogo from "../assets/morphic_logo.svg";
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
                            style={{ backgroundColor: this.props.menuOpen ? 'rgba(255, 255, 255, .2)' : 'transparent'}}
                        >
                            <MenuIcon/>
                        </div>
                        {
                            this.props.menuOpen &&
                            <SlideMenu
                                navLinks={navLinks}
                            />
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;

