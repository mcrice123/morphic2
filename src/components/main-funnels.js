import React from 'react';

import { StaticQuery, graphql, Link } from "gatsby";

// SVGs
import FacebookLogo from '../assets/facebook.svg';
import GithubLogo from '../assets/github.svg';
import RSSLogo from '../assets/rss.svg';

// Styles
require('./styles/post-navigation.scss');


export default () => {
    return (
        <StaticQuery
            query={graphql`
            query {
                allMarkdownRemark (
                    sort: {fields: [frontmatter___date], order: ASC},
                    filter: {frontmatter: {type: {ne: "characters"}}}
                ) {
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
            render={data => {
                const { edges } = data.allMarkdownRemark;
                var lastIndex = edges.length - 1;

                let first = {
                    slug: edges[0].node.fields.slug,
                };
                let last = {
                    slug: edges[lastIndex].node.fields.slug,
                };
                return (
                    <div id="main-funnels">
                        <Link to={first.slug} id="start-reading">
                            <span>Start Reading</span>
                        </Link>
                        <Link to={last.slug} id="latest-post">
                            <span>Latest Post</span>
                        </Link> 
                        <div id="social-media">
                            <div className={"media-title"}>
                                Social Media:
                            </div>
                            <div className={"media-links"}>
                                <a href="" target="_blank">
                                    <FacebookLogo className={"icon"} />
                                </a>
                                <a href="" target="_blank">
                                    <GithubLogo className={"icon"} />
                                </a>
                                <a href="" target="_blank">
                                    <RSSLogo className={"icon"} />
                                </a>
                            </div>
                        </div>
                    </div>
                );
            }}
        />
    );
}
            