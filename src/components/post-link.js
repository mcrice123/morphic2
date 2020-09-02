import React from 'react'
import { Link, withPrefix } from 'gatsby'

export default ({title, date, link, img}) => {
  return (
    <Link to={link} className="post-link">
      <div className="link-image">
        <img src={withPrefix(img)} alt={title}></img>
      </div>
      <div className="link-text">
          <div>
            <strong>{title}</strong>
            <span>{date}</span>
          </div>
          <span className="mobile-only">Read now&nbsp;&raquo;</span>
      </div>
    </Link>
  );
};

