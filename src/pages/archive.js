import React, { Component } from 'react';
import {StaticQuery, graphql, Link} from "gatsby";

import Layout from '../components/layout';
import TabList from '../components/tablist';

export default class Archive extends Component {

    constructor() {
        super();

        this.state = {
            tab: '',
        };
    }

    generateTabItems(categories) {
        var items = categories.map(cat => {
            return {
                value: cat.toLowerCase().replace(/\s+/g, ""),
                label: cat,
                onClick: arg => console.log("whoopee " + arg),
            };
        });
        items.push({
            value: 'search',
            label: 'Search',
            onClick: () => console.log("search clicked"),
        });
        return items;
    }

    render() {
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
                        <div id={"category-tabs"}>

                            <TabList
                                items={this.generateTabItems(data.site.siteMetadata.categories)}
                            />

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
    }

}
