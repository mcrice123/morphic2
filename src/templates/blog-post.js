import React from "react"
import Layout from "../components/layout"
import { graphql} from "gatsby";

import MainImage from '../components/main-image';

export default ({data}) => {
    const post = data.markdownRemark;
    const { title, date, featuredpath } = post.frontmatter;
    return (
        <Layout>
            <div>
                <MainImage path={featuredpath} alt={title} />
                <h1>{title}</h1>
                <h3>{date}</h3>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
      }
    }
  }
`;
