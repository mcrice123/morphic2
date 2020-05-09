import React from 'react';
import { withPrefix } from "gatsby";

export default ({path}) => {
  return (
    <div className="blogImg">
      <img src={withPrefix(path)} alt={withPrefix(path)}></img>
    </div>
  );
};
