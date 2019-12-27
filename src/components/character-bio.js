import React, { Component } from "react";
import { withPrefix } from "gatsby";

require("./styles/character-bio.scss");

function toTitleCase(myString) {
  const lower = myString.toLowerCase();
  let first_lower;
  let final = "";
  let allParts = [myString];
  let mySymbol = " ";
  if (lower.includes("-")) {
    allParts = lower.split("-");
    mySymbol = "-";
  }
  if (lower.includes(" ")) {
    allParts = lower.split(" ");
  }

  for (var i = 0; i < allParts.length; i++) {
    if (allParts[i].length > 0) {
      first_lower = allParts[i][0];
      if (i !== 0) final += mySymbol;
      final += (first_lower.toUpperCase() + allParts[i].slice(1));
    }
  }
  return final;
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
          <div id={overlayId} className="bio-top-layer">
            <div className="bio-overlay" />
          </div>
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
              <table>
              <tbody>
                <tr className="first">
                  <th>
                    <strong>Species:</strong>
                  </th>
                  <td>
                    <b>{toTitleCase(species)}</b>
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
                  </td>
                </tr>
                <tr>
                  <th>
                    <strong>Hair:</strong>
                  </th>
                  <td>
                    {toTitleCase(hair)}
                  </td>
                </tr>

                <tr className="first">
                  <th>
                    <strong>Age:</strong>
                  </th>
                  <td>
                    {age !== "" ? age : "[Classified]"}
                  </td>
                </tr>
                <tr>
                  <th>
                    <strong>Eyes:</strong>
                  </th>
                  <td>
                    {toTitleCase(eyes)}
                  </td>
                </tr>
                {
                  rank > 0  
                  &&
                  <tr className="first">
                    <th>
                      <strong>Level:</strong>
                    </th>
                    <td>
                      {rank}
                    </td>
                    </tr>
                }
                {
                  glow !== "" 
                  &&
                  <tr>
                    <th>
                      <strong>Glow:</strong>
                    </th>
                    <td>
                      {toTitleCase(glow)}
                    </td>
                  </tr>
                }
                {
                  abilities.length > 0
                  &&
                  <tr className="first abilities">
                    <th>
                      <strong>Abilities:</strong>
                    </th>
                    <td colSpan="3">
                      <ul>
                      {
                          abilities.map((skill, index) => {
                            const key = name + "/" + skill + (index + 1);
                            return <li key={key}>{toTitleCase(skill)}</li>;
                          })
                      }
                      </ul>
                    </td>
                  </tr>
                }
                </tbody>
              </table>
            </div>
            <div className="bio-description" dangerouslySetInnerHTML={{ __html: this.props.bio.node.html }} />
          </div>

          </div>
        </div>
    );
  }
}
