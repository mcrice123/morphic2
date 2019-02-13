import React, { Component } from 'react'
import { Link } from 'gatsby'
import MenuIcon from './menuicon';
import SlideMenu from './slidemenu';
import BannerImage from '../images/banner.png';
require('./styles/header.css');

class Header extends Component {

    render() {
        const siteTitle = this.props.siteTitle;
        const navLinks = this.props.navLinks;
        return (
            <div id={"header"}>
                <div id={"header-banner"}>
                    <img src={BannerImage} alt="Morphic" />
                </div>
                <div id={"header-links"} onClick={this.props.closeMenu}>
                    <div className={"title"}>
                        <h1>
                            <Link to="/">
                                {siteTitle}
                            </Link>
                        </h1>
                    </div>
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
        );
    }
}

export default Header;

