import React from 'react'
import { Link } from 'gatsby'
//import MenuIcon from '../images/baseline-menu-24px.svg';
import MenuIcon from './menuicon';

const Header = ({ siteTitle }) => (
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
      <div id={"menu-icon"} style={{
          float: 'right',
          margin: 'auto 0',
          padding: '10px',
          display: 'inline',
          height: '60px',
          width: '60px',
      }}>
        <MenuIcon/>
      </div>
  </div>
)

export default Header
