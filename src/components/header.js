import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { rhythm } from "../utils/typography";
import Logo from "../../images/logo.svg";

const HeaderWrapper = styled.header`
	margin-bottom: 8.125rem;
`;

const HeaderContainer = styled.div`
	align-items: center;
	display: flex;
	height: 4rem;
	margin: 0 auto;
	max-width: 71.25rem;
`;

const SiteTitle = styled.h1`
	margin-bottom: 0;

	a {
		align-items: center;
		color: #4b5165;
		font-size: 1.25rem;
		display: inline-flex;
		text-decoration: none;
	}

	img {
		margin-bottom: 0;
		margin-right: ${rhythm(1)};
	}
`;

const Header = () => (
	<HeaderWrapper>
		<HeaderContainer>
			<SiteTitle>
				<Link to="/">
					<img src={Logo} alt="Jonri Codes Logo" />
					<span>jonri.codes</span>
				</Link>
			</SiteTitle>
		</HeaderContainer>
	</HeaderWrapper>
);

export default Header;
