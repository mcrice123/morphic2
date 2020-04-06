import React from 'react';
import { Link } from 'gatsby';

require('./styles/slidemenu.scss');

export default ({ navLinks, isOpen }) => (
    <div id={"slideMenu"} className={isOpen}>
        <ul>
            {
                navLinks.map((nav) => {
                    const path = "/" + (nav !== "Home" ? nav.toLowerCase() + "/" : "");
                    return (
                        <li key={nav}>
                            <Link to={path}>{nav}</Link>
                        </li>
                    );
                })
            }
        </ul>
    </div>
);