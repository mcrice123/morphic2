import React from 'react'
import { Link, withPrefix } from 'gatsby'

export default ({style}) => {
    return (
        <Link to="https://www.morphicwebcomic.com/book2/book-2-page-74/" id={"notification-banner"}>
            <span style={style}>
                <span><strong>NEXT POST:</strong>&nbsp;&nbsp;&nbsp;Saturday, June 5th &#124; <strong>Book 2 Completed</strong></span>
                <span className="highlight-btn">Read Latest Page</span>
            </span>
        </Link>
    );
};