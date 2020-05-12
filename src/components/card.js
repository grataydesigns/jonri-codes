import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const CardContainer = styled.div`
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 2px;
	display: flex;
	flex-direction: column;
	max-width: 350px;
	position: relative;

	:hover {
		box-shadow: 0 0 0.25rem 0 rgba(0, 0, 0, 0.1);
	}

	a {
		color: #323232;
		text-decoration: none;

		&::after {
			content: "";
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
		}
	}
`;

const CardImage = styled.div`
	clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 1rem));
	height: 12.5rem;
`;

const CardBody = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	padding: 1.25rem;

	:last-child {
		margin-top: auto;
	}

	> * + * {
		margin-top: 0.75rem;
	}
`;

const Card = ({ excpert, title, image, date, url }) => (
	<CardContainer>
		<CardImage>
			<Img sizes={image} />
		</CardImage>
		<CardBody>
			<h3>
				<Link to={url}>{title}</Link>
			</h3>
			<p>{date}</p>
			<p>{excpert}</p>
		</CardBody>
	</CardContainer>
);

export default Card;
