import React from 'react';
import { withPrefix } from "gatsby";
require('../components/styles/preview-img.scss');

export default ({path, alt, className, title, date}) => {
  return (
    <div className={className}>
      <div className="main">
        <img src={withPrefix(path)} alt={alt} />
        <p><strong>{title}</strong></p>
        <p>{date}</p>
      </div>
      <div className="overlay" />
    </div>
  )
};
