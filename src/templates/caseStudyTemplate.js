import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Layout } from '../components/layout';

const CaseStudyTemplate = ({ data }) => {
  const { body } = data.mdx;

  return (
    <Layout>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};

export default CaseStudyTemplate;

export const query = graphql`
  query ProjectBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        photographer
        cover {
          publicURL
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1.7
              transformOptions: { fit: COVER }
              layout: CONSTRAINED
              width: 3100
              height: 1080
              placeholder: BLURRED
              blurredOptions: { width: 3100 }
            )
          }
        }
      }
      body
    }
  }
`;
