import React from 'react';
import rgba from 'styled-components';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import {
  FaBookReader,
  FaFigma,
  FaGripHorizontal,
  FaLaptopCode,
  FaPlus,
} from 'react-icons/fa';
import { StaticImage } from 'gatsby-plugin-image';
import { breakpoint } from '../utils/breakpoint';
import { rhythm } from '../utils/typography';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Layout } from '../components/layout';
import { Container, Grid, GalleryGridWrapper } from '../components/grid';

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
      background-color: var(--color-primary-focused);
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

const StatCard = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.125rem;
  box-shadow: 0 0 0.25rem 0 ${rgba('#000000', 0.1)};
`;

const StatCardHeader = styled.div`
  align-items: center;
  display: flex;
  padding: 1.5rem;

  span {
    margin-left: 0.25rem;
  }

  .avatar {
    border-radius: 100%;
    height: 1.5rem;
    margin-left: auto;
    width: 1.5rem;
  }
`;

const StatCardBody = styled.div`
  padding: 1.5rem;
  h5 {
    font-weight: 500;
  }
`;

const StatCardTask = styled.div`
  background-color: ${(props) => (props.new ? 'transparent' : '#6e63ff')};
  border: ${(props) => (props.new ? '1px dotted #C2C2C2' : '')};
  border-radius: 1.5rem;
  color: ${(props) => (props.new ? '#C2C2C2' : '#ffffff')};
  display: flex;
  flex-direction: column;
  height: 9.375rem;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  width: 9.375rem;

  svg {
    margin-top: auto;
  }
`;

const StatCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  div:first-child {
    align-items: center;
    grid-column: 1;
    height: 8.125rem;
    justify-content: center;
    width: 8.125rem;

    svg {
      margin-top: 0;
    }
  }

  div:nth-child(2) {
    background-color: #7bdefb;
    grid-row: 2;
    justify-self: end;
  }

  div:last-child {
    align-self: end;
    background-color: #41485a;
    grid-row: 2;
    height: 8.125rem;
    justify-self: end;
    margin-bottom: 0;
    width: 8.125rem;
  }
`;

const GridItem = styled.section`
  grid-column: 1 / span 12;
  margin-bottom: 70px;

  @media ${breakpoint.tablet} {
    grid-column: span ${(props) => props.col};
  }
`;

const Home = ({ data }) => {
  const { description } = useSiteMetadata();
  return (
    <Layout>
      <Container>
        <Grid>
          <GridItem col={6}>
            <Billboard>Hello,</Billboard>
            <Headline>
              I'm currently a <span className="underline">UI Developer</span> at
              IBM
            </Headline>
            <SubHeadline>{description}</SubHeadline>
          </GridItem>
          <GridItem col={5}>
            <StatCard>
              <StatCardHeader>
                <FaGripHorizontal size={24} />
                <span>My Stats</span>
                <StaticImage
                  src="../../images/profile-pic.jpg"
                  alt="Jonri Rothwell"
                  className="avatar"
                />
              </StatCardHeader>
              <StatCardBody>
                <h3>What am I working on?</h3>
                <StatCardGrid>
                  <StatCardTask new>
                    <FaPlus size="1.2rem" />
                  </StatCardTask>
                  <StatCardTask>
                    <h5>Design</h5>
                    <FaFigma size="1.2rem" />
                  </StatCardTask>
                  <StatCardTask>
                    <h5>Coding</h5>
                    <FaLaptopCode size="1.2rem" />
                  </StatCardTask>
                  <StatCardTask>
                    <h5>Training</h5>
                    <FaBookReader size="1.2rem" />
                  </StatCardTask>
                </StatCardGrid>
              </StatCardBody>
            </StatCard>
          </GridItem>
        </Grid>
        <GalleryGridWrapper>
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
        </GalleryGridWrapper>
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
