import React, { Component } from 'react';
import {StaticQuery, graphql, Link } from "gatsby";

import Layout from '../components/layout';
import TabList from '../components/tablist';
import Preview from '../components/preview-image';
require('../components/styles/archive.css');
require('../components/styles/preview-img.css');

export default class Archive extends Component {

    constructor() {
        super();

        this.state = {
            tabIndex: 0,
            tabItems: [],
        };
        this.generateTabItems = this.generateTabItems.bind(this);
        this.changeTabs = this.changeTabs.bind(this);
        this.renderTabs = this.renderTabs.bind(this);
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

    renderTabs() {
        return (
            <StaticQuery
                query={graphql`
                  query categoryQuery {
                    site {
                      siteMetadata {
                        categories
                      }
                    }
                    allMarkdownRemark(
                      sort: {fields: [frontmatter___date], order: ASC},
                    ) {
                        edges {
                          node {
                            frontmatter {
                                title
                                date(formatString: "MMMM DD, YYYY")
                                categories
                                preview
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
                    <div id={"archive"}>
                      <TabList
                          items={this.generateTabItems(data.site.siteMetadata.categories)}
                      />
                      <div id={"search-results"}>
                        <ul>
                          {
                            this.state.tabIndex !== data.site.siteMetadata.categories.length
                            ?
                            data.allMarkdownRemark.edges
                            .filter(edge => {
                              const { categories } = edge.node.frontmatter;
                              const allCategories = data.site.siteMetadata.categories;
                              const currentTab = allCategories[this.state.tabIndex].toLowerCase().replace(/\s+/g, "");
                              if (categories.includes(currentTab)) {
                                return edge;
                              }
                              else return null;
                            })
                            .map(edge => {
                              const { title, date, preview } = edge.node.frontmatter;
                              const { slug } = edge.node.fields;
                              return (
                                <li key={slug} style={{ display: 'inline-block'}}>
                                    <Link to={slug}>
                                        <Preview
                                          path={preview}
                                          alt={title}
                                          className="archive-preview-img"
                                          title={title}
                                          date={date}
                                          />
                                    </Link>
                                </li>
                              );
                            })
                            :
                            <div>
                              <input placeholder="Type a character's name"/>
                            </div>
                          }
                        </ul>
                      </div>
                    </div>
                }
            />
        );
    }

    render() {
        return (
            <Layout>
                <h1>Archive</h1>
                {
                    this.renderTabs()
                }
            </Layout>
        );
    }
}
