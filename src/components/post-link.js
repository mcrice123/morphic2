import React from 'react'
import { Link, withPrefix } from 'gatsby'

export default ({title, date, link, img}) => {
  return (
    <Link to={link} className="post-link">
      <img src={withPrefix(img)} alt={title}></img>
      <div>
          <strong>{title}</strong>
          <span>{date}</span>
      </div>
    </Link>
  );
};

