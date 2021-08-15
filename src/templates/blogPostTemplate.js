import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Container } from '../components/grid';
import { BodyText } from '../components/Typography/BodyText';
import { H1 } from '../components/Typography/Heading';
import { Layout } from '../components/layout';

const ArticleHeader = styled.header`
  margin: var(--space-stack-2-x);
`;

const ArticleBody = styled.div`
  margin: 0 auto;
  max-width: 46.875rem;
`;

const BlogPostTemplate = ({ data }) => {
  const { frontmatter, body } = data.mdx;
  const image = getImage(frontmatter.cover);

  return (
    <Layout>
      <article>
        <ArticleHeader>
          <Container>
            <H1 gutterBottom={6}>{frontmatter.title}</H1>
            <BodyText type="md">{frontmatter.date}</BodyText>
          </Container>
        </ArticleHeader>
        <GatsbyImage image={image} />
        <BodyText type="sm" gutterBottom={3}>
          {frontmatter.photographer}
        </BodyText>
        <ArticleBody>
          <MDXRenderer>{body}</MDXRenderer>
        </ArticleBody>
      </article>
    </Layout>
  );
};

export default BlogPostTemplate;

export const query = graphql`
  query PostBySlug($slug: String!) {
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
