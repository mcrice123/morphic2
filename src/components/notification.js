import React from 'react'
import { Link, withPrefix } from 'gatsby'

export default ({style}) => {
    return (
        <Link to="https://www.morphicwebcomic.com/book2/book-2-page-74/" id={"notification-banner"}>
            <span style={style}>
                <span><strong>NEXT PAGE:</strong>&nbsp;&nbsp;&nbsp;Saturday, May 8th &#8213; <strong>LAST PAGE</strong> of Book 2!</span>
                <span className="highlight-btn">Read Latest Page</span>
            </span>
        </Link>
    );
};