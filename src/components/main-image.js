import React from 'react';
import { withPrefix } from "gatsby";

export default ({path, description}) => {
  return (
    <div className="blogImg">
      <img src={withPrefix(path)} alt={description.join('')}></img>
    </div>
  );
};
