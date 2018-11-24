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
                          frontmatter {
                            type
                       			name
                            age
                            hair
                            eyes
                            glow
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
                        <ul>
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
        <Layout>
            <h1>Characters</h1>
            {
              this.renderList()
            }
        </Layout>
    );
  }
}
