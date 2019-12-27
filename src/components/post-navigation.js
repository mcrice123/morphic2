import React from 'react';

import { StaticQuery, graphql, Link } from "gatsby";
require('./styles/post-navigation.scss');

export default ({currentSlug, data}) => {
return (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark (
          sort: {fields: [frontmatter___date], order: ASC},
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

      let next = {};
      let previous = {};
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
          title: prevNode.frontmatter.title,
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
          title: nextNode.frontmatter.title,
        };
      }
      else next = {
        slug: "",
        title: "",
      };
      return (
        <div className="navigation">
          {
            previous.slug !== ""
            ?
            <Link to={previous.slug} className="previous">
              <div className="link">
                {previous.title}
              </div>
            </Link>
            :
            <div className="previous link invisible">
              {previous.title}
            </div>
          }
          <div className="title"><h3>{current.title}</h3></div>
          {
            next.slug !== ""
            ?
            <Link to={next.slug} className="next">
              <div className="link">
                {next.title}
              </div>
            </Link>
            :
            <div className="next link invisible">
              {next.title}
            </div>
          }
        </div>
      );
    }

    }
    />
  );
}
