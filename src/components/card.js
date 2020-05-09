import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
	max-width: 350px;
`;

const Card = ({ children }) => <CardContainer>{children}</CardContainer>;

export default Card;
