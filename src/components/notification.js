import React from 'react'
import { Link, withPrefix } from 'gatsby'

export default ({style}) => {
    return (
        <Link to="https://www.morphicwebcomic.com/misc/2021-june/" id={"notification-banner"}>
            <span style={style}>
                <span><strong>NEXT POST:</strong>&nbsp;&nbsp;&nbsp;Saturday, July 10th &#124; <strong>Book 2 Completed</strong></span>
                <span className="highlight-btn">Read Latest Post</span>
            </span>
        </Link>
    );
};