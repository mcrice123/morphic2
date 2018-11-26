import React, { Component } from "react";
import { withPrefix } from "gatsby";

require("./styles/character-bio.css");

function toTitleCase(myString) {
  const lower = myString.toLowerCase();
  const first_char = lower[0];
  let first_lower;
  let second_lower;
  let after_first = lower.split(first_char)[1];
  if (after_first.includes("-")) {
    first_lower = after_first.split("-")[0];
    second_lower = after_first.split("-")[1];
    after_first = first_lower + "-" + toTitleCase(second_lower);
  }
  if (after_first.includes(" ")) {
    first_lower = after_first.split(" ")[0];
    second_lower = after_first.split(" ")[1];
    after_first = first_lower + " " + toTitleCase(second_lower);
  }
  return first_char.toUpperCase() + after_first;
}

export default class CharacterBio extends Component {

  render() {
    const {
      name,
      age,
      hair,
      eyes,
      glow,
      rank,
      subcategories,
      species,
      abilities,
      firstpath,
      secpath
    } = this.props.bio.node.frontmatter;
    const bioId = "bio/" + name;
    const overlayId = "overlay/" + name;
    return (
        <div id={bioId} className="bio">
          <div className="bio-content">
            <div className="bio-images">
              {
                firstpath !== ""
                &&
                <img src={withPrefix(firstpath)} alt={"bio/" + name} />
              }
              {
                secpath !== ""
                &&
                <img src={withPrefix(secpath)} alt={"bio/" + name + 2} />
              }
            </div>
          <div className="bio-text">
            <div className="bio-header">
              <h3>{name}</h3>
              <ul>
                <li>
                  <strong>Species:</strong>
                  {toTitleCase(species)}
                  {
                    subcategories.length > 0
                    &&
                    <ul>
                      {
                        subcategories.map(sub => {
                          const key = name + "/" + sub;
                          return <li key={key}>{toTitleCase(sub)}</li>;
                        })
                      }
                    </ul>
                  }
                </li>

                <li>
                  <strong>Age:</strong>
                  {age !== "" ? age : "[Classified]"}
                </li>
                {
                  rank > 0
                  &&
                  <li>
                    <strong>Level:</strong>
                    {rank}
                  </li>
                }
                {
                  abilities.length > 0
                  &&
                  <li>
                    <strong>Abilities:</strong>
                    <ul>
                    {
                        abilities.map((skill, index) => {
                          const key = name + "/" + skill + (index + 1);
                          return <li key={key}>{skill}</li>;
                        })
                    }
                    </ul>
                  </li>
                }
                <li>
                  <strong>Hair:</strong>
                  {toTitleCase(hair)}
                </li>
                <li>
                  <strong>Eyes:</strong>
                  {toTitleCase(eyes)}
                </li>
                {
                  glow !== ""
                  &&
                  <li>
                    <strong>Glow:</strong>
                    {toTitleCase(glow)}
                  </li>
                }
              </ul>
            </div>
            <div className="bio-description" dangerouslySetInnerHTML={{ __html: this.props.bio.node.html }} />
          </div>
          <div id={overlayId} className="bio-top-layer">
            <div className="bio-overlay" />
          </div>
          </div>
        </div>
    );
  }
}
