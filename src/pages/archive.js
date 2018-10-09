import React, { Component } from 'react';
import {StaticQuery, graphql, Link} from "gatsby";

import Layout from '../components/layout';
import TabList from '../components/tablist';

export default class Archive extends Component {

    constructor() {
        super();

        this.state = {
            tabIndex: 0,
        };
        this.generateTabItems = this.generateTabItems.bind(this);
        this.changeTabs = this.changeTabs.bind(this);
    }

    changeTabs(index) {
        this.setState({ tabIndex: index });
    }

    generateTabItems(categories) {
        var lastIndex = 0;
        var items = categories.map((cat, index) => {
            lastIndex = index;
            return {
                value: cat.toLowerCase().replace(/\s+/g, ""),
                label: cat,
                onClick: () => this.changeTabs(index),
                selected: this.state.tabIndex === index,
            };
        });
        items.push({
            value: 'search',
            label: 'Search',
            onClick: () => this.changeTabs(lastIndex + 1),
            selected: this.state.tabIndex === lastIndex + 1,
        });
        return items;
    }

    renderArchiveQuery() {
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

      }
`}
            render={data =>

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
            }
        />
        );
    }

    renderCategories() {
        return (
            <StaticQuery
                query={graphql`
                  query categoryQuery {
                    site {
                      siteMetadata {
                        categories
                      }
                    }
                  }
            `}
                render={data =>
                    <TabList
                        items={this.generateTabItems(data.site.siteMetadata.categories)}
                    />
                }
            />
        );
    }
    //}

    render()
{
    /*return (
        <StaticQuery
            query={graphql`
      query mainQuery {
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
    );*/
        return (
            <Layout>
                <h1>Archive</h1>
                <div id={"category-tabs"}>
                    {
                        this.renderCategories()
                    }
                </div>
                <div id={"search-results"}>
                    {
                        this.renderArchiveQuery()
                    }
                </div>
            </Layout>
        );
    }
}
