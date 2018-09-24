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
            <div
                style={{
                    background: "#463299",
                    display: 'inline-block',
                    width: '100%',
                }}
            >
                <div
                    style={{
                        margin: '0 auto',
                        maxWidth: '910px',
                        height: '100%',
                        padding: '10px',
                        display: 'inline',
                        float: 'left',
                    }}
                >
                    <h1 style={{margin: '0 0 0 10px'}}>
                        <Link
                            to="/"
                            style={{
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            {siteTitle}
                        </Link>
                    </h1>
                </div>
                <nav id={"navbar"}>
                    <ul>
                        {
                            navLinks.map((myLink) => {
                                return <li key={myLink}>{myLink}</li>;
                            })
                        }
                    </ul>
                </nav>
                <div
                    id={"menuIcon"}
                    onClick={() => this.toggleMenu()}
                    style={{ backgroundColor: this.state.menuOpen ? 'rgba(0,255,255,.2)' : 'transparent'}}
                >
                    <MenuIcon/>
                </div>
                {
                    this.state.menuOpen &&
                    <SlideMenu />
                }
            </div>
        );
    }
}

export default Header

