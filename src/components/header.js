import React from 'react'
import { Link } from 'gatsby'
//import MenuIcon from '../images/baseline-menu-24px.svg';
import MenuIcon from './menuicon';
require('./styles/header.css');

const Header = ({ siteTitle, navLinks }) => (
  <div
    style={{
      background: "#463299",
      //marginBottom: '1.45rem',
        display: 'inline-block',
        width: '100%',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: '910px',
          height: '100%',
        //padding: '1.45rem 1.0875rem',
          padding: '10px',
          display: 'inline',
          float: 'left',
      }}
    >
      <h1 style={{ margin: '0 0 0 10px' }}>
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
      <div id={"menuIcon"}
      >
        <MenuIcon />
      </div>
  </div>
)

export default Header

