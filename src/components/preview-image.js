import React from 'react';
import { withPrefix } from "gatsby";

require('./styles/preview-img.css');

export default ({path, alt}) => {
  return (
    <div className="preview-img">
      <img src={withPrefix(path)} alt={alt}/>
    </div>
  )
};
