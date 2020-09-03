import React, { Component } from 'react';
import {StaticQuery, graphql, Link } from "gatsby";

import Layout from '../components/layout';
import PostLink from '../components/post-link';
import TabList from '../components/tablist';
import Preview from '../components/preview-image';
require('../components/styles/chapters.scss');
require('../components/styles/preview-img.scss');

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
        var items = categories.map((cat, index) => {
            return {
                value: cat.toLowerCase().replace(/\s+/g, ""),
                label: cat,
                onClick: () => this.changeTabs(index),
                selected: this.state.tabIndex === index,
            };
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
                                type
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
                    <div id={"chapters"}>
                      <TabList
                          items={this.generateTabItems(data.site.siteMetadata.categories)}
                      />
                      <div className="two-col">
                        <div className="col">
                          {
                            (this.state.tabIndex < data.site.siteMetadata.categories.length)
                            &&
                            data.allMarkdownRemark.edges
                            .filter(edge => {
                              const { categories, type } = edge.node.frontmatter;
                              const allCategories = data.site.siteMetadata.categories;
                              const currentTab = allCategories[this.state.tabIndex].toLowerCase().replace(/\s+/g, "");
                              if (type === "post" && categories.includes(currentTab)) {
                                return edge;
                              }
                              else return null;
                            })
                            .map(edge => {
                              const { title, date, preview } = edge.node.frontmatter;
                              const { slug } = edge.node.fields;
                              return (
                                  <PostLink 
                                    key={title} 
                                    title={title} 
                                    link={slug}
                                    img={preview}
                                    date={date}
                                  />
                              );
                            })
                          }
                        </div>
                      </div>
                    </div>
                }
            />
        );
    }

    render() {
        return (
            <Layout>
                <h1 className="gochi">Chapters</h1>
                {
                    this.renderTabs()
                }
            </Layout>
        );
    }
}
