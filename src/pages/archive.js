import React from 'react';

import Layout from '../components/layout';
import {StaticQuery, graphql, Link} from "gatsby";

export default () => {
        console.log("inside archive");
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
                    <Layout>
                        <h1>Archive</h1>
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
