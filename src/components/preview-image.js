import React from 'react';
import { withPrefix } from "gatsby";
require('../components/styles/preview-img.css');

export default ({path, alt, className, title, date}) => {
  return (
    <div className={className}>
      <img src={withPrefix(path)} alt={alt} />
      <p><strong>{title}</strong></p>
      <p>{date}</p>
    </div>
  )
};
