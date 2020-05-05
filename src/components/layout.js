import React from "react";
import styled from "styled-components";

export const ContainerWrapper = styled.div`
	margin: 0 auto;
	max-width: 1140px;
`;

export const GridWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-gap: 30px;
`;

export const Container = ({ children }) => (
	<ContainerWrapper>{children}</ContainerWrapper>
);

export const Grid = ({ children }) => <GridWrapper>{children}</GridWrapper>;
