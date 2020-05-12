import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Container, Layout } from "../components/layout";

const ArticleHeader = styled.header`
	text-align: center;
`;

const ArticleBody = styled.div`
	margin: 0 auto;
	max-width: 46.875rem;
`;

export default ({ data }) => {
	const { frontmatter, body } = data.mdx;

	return (
		<Layout>
			<article>
				<ArticleHeader>
					<Container>
						<h1>{frontmatter.title}</h1>
						<p>{frontmatter.date}</p>
					</Container>
				</ArticleHeader>
				<Img sizes={frontmatter.cover.childImageSharp.sizes} />
				<p>Photo by Aaron Burden on Unsplash</p>
				<ArticleBody>
					<MDXRenderer>{body}</MDXRenderer>
				</ArticleBody>
			</article>
		</Layout>
	);
};

export const query = graphql`
	query PostBySlug($slug: String!) {
		mdx(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				date(formatString: "MMM DD, YYYY")
				cover {
					publicURL
					childImageSharp {
						sizes(maxWidth: 2000, traceSVG: { color: "#639" }) {
							...GatsbyImageSharpSizes_tracedSVG
						}
					}
				}
			}
			body
		}
	}
`;
