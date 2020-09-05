import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby";

import MainImage from '../components/main-image';
import PostNavigation from '../components/post-navigation';
//import SEO from "../components/seo";

require('../components/styles/blog-post.scss');

export default ({data}) => {
  const post = data.markdownRemark;
  const { title, date, featuredpath, seo, author, description, keywords } = post.frontmatter;
  const { slug } = post.fields;
  return (
    <Layout>
      <div>
          <PostNavigation currentSlug={slug} showTitleOnMobile={true} />
          <MainImage path={featuredpath} />
          <PostNavigation currentSlug={slug} showTitleOnMobile={false} />
          <hr/>
          <div className={"wrapper"}>
            <h1 className="post-title">{title}</h1>
            <p className="subtitle">{date}</p>
            <div className="post-body" dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredpath
        author
        description
        keywords
        seo
      }
      fields {
        slug
      }
    }
  }
`;
