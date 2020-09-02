import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import PostLink from '../components/post-link'

const IndexPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
            allMarkdownRemark (
                sort: {fields: [frontmatter___date], order: DESC},
                filter: {frontmatter: {type: {ne: "characters"}}}
            ) {
            edges {
                node {
                frontmatter {
                    title
                    date(formatString: "MMMM DD, YYYY")
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
      render={data => {
        const { edges } = data.allMarkdownRemark;
        var firstIndex = edges.length - 1;
        var lastIndex = 0;

        let first = {
            slug: edges[firstIndex].node.fields.slug,
        };
        let last = {
            slug: edges[lastIndex].node.fields.slug,
            preview: edges[lastIndex].node.frontmatter.preview,
            title: edges[lastIndex].node.frontmatter.title,
            date: edges[lastIndex].node.frontmatter.date,
        };
        let fiveLast = edges.map((item, index) => {
          if (index < 6 && index != lastIndex) {
            return (
              <PostLink 
                key={item.node.frontmatter.title} 
                title={item.node.frontmatter.title} 
                link={item.node.fields.slug}
                img={item.node.frontmatter.preview}
                date={item.node.frontmatter.date}
              />
            );
          }
          else return;
        });
        return (
          <div id="home">
            <Layout>
              <div className="post-body">
                <h1>Welcome to my site!</h1>
                <p><Link to={first.slug}>Click here to read from the beginning</Link> or read the latest posts!</p>
                <div className="two-col">
                  <div className="col">
                    <a id="preview-last" href={last.slug}>
                      <img src={last.preview} alt={last.title}></img>
                      <div>
                        <strong>{last.title}</strong>
                        <span>{last.date}</span>
                      </div>
                    </a>
                  </div>
                  <div className="col">
                    {fiveLast}
                  </div>
                </div>
                <Link className="gochi" to="/chapters">See more posts &raquo;</Link>
              </div>
            </Layout>
          </div>
        );
      }}
    />
  );
}


/* (
  <Layout>
    <div class="post-body">
      <h1>Welcome to my site!</h1>
      <p><Link to="">Click here to read from the beginning</Link> or read the latest posts!</p>
      <div class="two-col">
        <div class="col"></div>
        <div class="col"></div>
      </div>
      <Link class="gochi" to="/chapters">See more posts &raquo;</Link>
    </div>
  </Layout>
)
*/
export default IndexPage;
