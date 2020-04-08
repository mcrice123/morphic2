import React from 'react';
import { withPrefix } from "gatsby";

export default ({path}) => {
  return (
    <div className="blogImg" style={{backgroundImage: `url(${withPrefix(path)})`}}>
    </div>
  );
};
