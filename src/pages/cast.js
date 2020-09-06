import React, { Component } from 'react';
import {StaticQuery, graphql } from "gatsby";

import Layout from '../components/layout';
import CharacterBio from '../components/character-bio';
export default class Characters extends Component {

    renderList() {
        return (
            <StaticQuery
                query={graphql`
                  query characters {
                    allMarkdownRemark (
                      filter: {frontmatter: {type: { eq: "characters"}}},
                      sort: {fields: [frontmatter___date], order: ASC},
                    ){
                      edges {
                        node {
                          html
                          frontmatter {
                            type
                       			name
                            age
                            hair
                            eyes
                            glow
                            rank
                            subcategories
                            species
                            abilities
                            firstpath
                            secpath
                      		}
                      		fields {
                        		slug
                      		}
                    		}
                      }
                    }
                  }
            `}
                render={data =>
                    <div id={"characters"}>
                        <ul style={{ listStyle: "none"}}>
                          {
                            data.allMarkdownRemark.edges
                            .map(edge => {
                              const { slug } = edge.node.fields;
                              return (
                                <li key={slug}>
                                    <CharacterBio bio={edge}/>
                                </li>
                              );
                            })
                          }
                        </ul>
                      </div>
                }
            />
        );
    }

    render() {
      return (
        <Layout
          title="Cast"
          description={[
            "Work in Progress: Come back later to see a glimpse of each of the characters in the webcomic, Morphic!",
          ]}
          keywords={[
            "characters",
            "cast",
            "glimpse",
            "slideshow",
          ]}
        >
          <div class="post-body">
            <h1>Characters</h1>
            <p>Work in progress... <em>Check back later for more updates!</em></p>
          </div>
        </Layout>
    );
  }
}
