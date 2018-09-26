import React from 'react';
import { Link } from 'gatsby';

require('./styles/slidemenu.css');

export default ({ navLinks }) => (
    <div id={"slideMenu"}>
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