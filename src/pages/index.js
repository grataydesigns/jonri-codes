import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { breakpoint } from '../utils/breakpoint';
import { rhythm } from '../utils/typography';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Container, Grid, Layout } from '../components/layout';

import Card from '../components/card';

const Billboard = styled.h1`
  color: #393939;
  font-size: 5.0625rem;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: ${rhythm(1)};
`;

const Headline = styled.h2`
  color: #393939;
  font-size: 3.75rem;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: ${rhythm(2)};

  .underline {
    color: #6c63ff;
    display: inline-block;
    margin-bottom: 24px;
    position: relative;

    &::after {
      background-color: rgba(108, 99, 255, 0.5);
      border-radius: 3px;
      bottom: -18px;
      content: '';
      position: absolute;
      width: 95%;
      height: 8px;
      left: 0;
    }
  }
`;

const SubHeadline = styled.p`
  color: #b4b4b4;
  font-size: 1.125rem;
  line-height: 1.5;
`;

const GridItem = styled.section`
  grid-column: 1 / span 12;
  margin-bottom: 70px;

  @media ${breakpoint.tablet} {
    grid-column: 1 / span 6;
  }
`;

const Home = ({ data }) => {
  const { description } = useSiteMetadata();
  return (
    <Layout>
      <Container>
        <Grid>
          <GridItem>
            <Billboard>Hello,</Billboard>
            <Headline>
              I'm currently a <span className="underline">UI Developer</span> at
              IBM
            </Headline>
            <SubHeadline>{description}</SubHeadline>
          </GridItem>
        </Grid>
        {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }) => (
          <Card
            url={`/blog${fields.slug}`}
            title={frontmatter.title}
            date={frontmatter.date}
            excpert={excerpt}
            image={frontmatter.cover}
            key={fields.slug}
          />
        ))}
      </Container>
    </Layout>
  );
};

export default Home;

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "MMM DD, YYYY")
          cover {
            publicURL
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`;
