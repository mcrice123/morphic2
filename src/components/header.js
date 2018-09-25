import React, { Component } from 'react'
import { Link } from 'gatsby'
import MenuIcon from './menuicon';
import SlideMenu from './slidemenu';
require('./styles/header.css');

class Header extends Component {
    constructor() {
        super();

        this.state = {
            menuOpen: false,
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu( )
    {
        let menu = this.state.menuOpen;
        this.setState({ menuOpen: !menu });
    }

    render() {
        const siteTitle = this.props.siteTitle;
        const navLinks = this.props.navLinks;
        return (
            <div id={"header"}>
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
                                return (<li key={myLink}>
                                        <div>
                                            {myLink}
                                        </div>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>
                <div
                    id={"menuIcon"}
                    onClick={() => this.toggleMenu()}
                    style={{ backgroundColor: this.state.menuOpen ? 'rgba(255, 255, 255, .2)' : 'transparent'}}
                >
                    <MenuIcon/>
                </div>
                {
                    this.state.menuOpen &&
                    <SlideMenu
                        navLinks={navLinks}
                    />
                }
            </div>
        );
    }
}

export default Header

