import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Container } from "../components/layout";

export default ({ data }) => {
	const { frontmatter, body } = data.mdx;

	return (
		<Container>
			<h1>{frontmatter.title}</h1>
			<p>{frontmatter.date}</p>
			<Img sizes={frontmatter.cover.childImageSharp.sizes} />
			<MDXRenderer>{body}</MDXRenderer>
		</Container>
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
