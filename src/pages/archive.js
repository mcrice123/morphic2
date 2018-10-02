import React from 'react';

import Layout from '../components/layout';
import {StaticQuery, graphql, Link} from "gatsby";

export default () => {
        return (
            <StaticQuery
                query={graphql`
              query archiveQuery {
                allMarkdownRemark {
                    edges {
                      node {
                        frontmatter {
                            title
                            date(formatString: "MMMM DD, YYYY")
                            categories
                        }
                        fields {
                            slug
                         }
                      }
                    }
                }
                site {
                  siteMetadata {
                    categories
                  }
                }
              }
        `}
                render={data =>
                    <Layout>
                        <h1>Archive</h1>
                        <div id={"category-select"} style={{width: '100px'}}>
                            <select style={{width: '100%'}}>
                                {
                                    data.site.siteMetadata.categories.map(cat => {
                                        const key = cat.toLowerCase().replace(/\s+/g, '');
                                        return <option
                                            value={key}
                                            key={key}
                                        >{cat}</option>;
                                    })
                                }
                            </select>
                        </div>
                        <ul>
                            {
                                data.allMarkdownRemark.edges.map((edge) => {
                                    return <li key={edge.node.fields.slug}>
                                        <Link to={edge.node.fields.slug}>
                                            {edge.node.frontmatter.title} [{edge.node.frontmatter.date}]
                                        </Link>
                                    </li>;
                                })
                            }
                        </ul>
                    </Layout>
                }
            />
        );

};
