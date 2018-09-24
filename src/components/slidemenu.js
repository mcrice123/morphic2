import React from 'react';
require('./styles/slidemenu.css');

export default ({ navLinks }) => (
    <div id={"slideMenu"}>
        <ul>
            {
                navLinks.map((nav) => {
                    return <li>{nav}</li>;
                })
            }
        </ul>
    </div>
);