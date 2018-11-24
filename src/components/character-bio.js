import React from "react"

export default ({bio}) => {
    const {
      name,
      age,
      hair,
      eyes,
      date,
      firstpath,
      secpath
    } = bio.node.frontmatter;
    const { slug } = bio.node.fields;
    return (
        <div>
            <h3>{name}</h3>
            <ul>
              <li>{age}</li>
              <li>{hair}</li>
              <li>{eyes}</li>
            </ul>
        </div>
    );
};
