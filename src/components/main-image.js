import React from 'react';
import { withPrefix } from "gatsby";
require('../components/styles/preview-img.css');

export default ({path, alt}) => {
  return (
    <div>
      <img src={withPrefix(path)} alt={alt} />
    </div>
  );
};
