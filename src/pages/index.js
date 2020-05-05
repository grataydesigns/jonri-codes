import React from "react";
import styled from "styled-components";
import { rhythm } from "../utils/typography";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { Container, Grid } from "../components/layout";

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
		color: #8de1fd;
		display: inline-block;
		position: relative;

		&::after {
			background-color: rgba(123, 222, 251, 0.25);
			border-radius: 3px;
			bottom: -18px;
			content: "";
			position: absolute;
			width: 100%;
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

const GridItem = styled.div`
	grid-column: 1 / span 6;
	margin-top: 160px;
`;

export default () => {
	const { description } = useSiteMetadata();
	return (
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
		</Container>
	);
};
