import React from 'react';

import { StaticQuery, graphql, Link } from "gatsby";
require('./styles/post-navigation.scss');

export default ({currentSlug, showTitleOnMobile, data}) => {
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

      let next = {};
      let previous = {};
      let first = {
        slug: edges[0].node.fields.slug,
      };
      let last = {
        slug: edges[lastIndex].node.fields.slug,
      };
      let current = {
        slug: currentSlug,
        title: "",
      };
      let index = -1;

      edges.map((edge,i) => {
        const { node } = edge;
        const { slug } = node.fields;
        const { title } = node.frontmatter;

        if (slug === currentSlug) {
          current.title = title;
          index = i;
        }
        return null;
      });

      if (index > 0) {
        let prevNode = edges[index - 1].node;
        previous = {
          slug: prevNode.fields.slug,
        };
      }
      else previous = {
        slug: "",
        title: "",
      };

      if (index < edges.length - 1) {
        let nextNode = edges[index + 1].node;
        next = {
          slug: nextNode.fields.slug,
        };
      }
      else next = {
        slug: "",
        title: "",
      };
      return (
        <div className="navigation">
          <div className={"wrapper"}>
            <div className={"page-nav"}>
              {
                previous.slug !== ""
                ? 
                <Link to={first.slug} className="previous">
                  &laquo;<span className="desktop-only"> First</span>
                </Link>
                :
                <div className="previous link invisible">
                  &laquo;<span className="desktop-only"> First</span>
                </div>
              }
              {
                previous.slug !== ""
                ?
                <Link to={previous.slug} className="previous">
                    &lt; <span className="desktop-only"> Previous</span>
                </Link>
                :
                <div className="previous link invisible">
                    &lt; <span className="desktop-only"> Previous</span>
                </div>
              }
              {
                showTitleOnMobile
                ?
                <div className="title"><h3>{current.title}</h3></div>
                :
                <div className="title desktop-only"><h3>{current.title}</h3></div>
              }
              {
                next.slug !== ""
                ?
                <Link to={next.slug} className="next">
                    <span className="desktop-only">Next </span>&gt;
                </Link>
                :
                <div className="next link invisible">
                    <span className="desktop-only">Next </span>&gt;
                </div>
              }
              {
                next.slug !== ""
                ?
                <Link to={last.slug} className="next">
                  <span className="desktop-only">Last </span>&raquo;
                </Link>
                :
                <div className="next link invisible">
                  <span className="desktop-only">Last </span>&raquo;
                </div>
              }
            </div>
          </div>
        </div>
      );
    }

    }
    />
  );
}
