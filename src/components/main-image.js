import React from 'react';
import { withPrefix } from "gatsby";

export default ({path, description, title}) => {
  return (
    <div className="blogImg">
      <img src={withPrefix(path)} alt={description && description.length > 0 ? description.join('') : title}></img>
    </div>
  );
};
