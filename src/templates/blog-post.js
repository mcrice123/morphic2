import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby";

import MainImage from '../components/main-image';
import PostNavigation from '../components/post-navigation';

require('../components/styles/blog-post.scss');

export default ({data}) => {
  const post = data.markdownRemark;
  const { title, date, featuredpath, metaimage, author, description2 } = post.frontmatter;
  const keywords = post.frontmatter.keywords ? post.frontmatter.keywords : [];
  const { slug } = post.fields;
  return (
    <Layout 
      title={title}
      description={description2}
      keywords={keywords}
      author={author}
      image={metaimage}
      slug={slug}
    >
      <div>
          <PostNavigation currentSlug={slug} showTitleOnMobile={true} />
          <MainImage path={featuredpath} description={description2} title={title} />
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
        keywords
        metaimage
        description2
      }
      fields {
        slug
      }
    }
  }
`;
