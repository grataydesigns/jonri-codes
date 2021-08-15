import React from 'react';
import styled from 'styled-components';

const Heading1 = styled.h1`
  font-size: var(--font-size-heading-level-1);
  font-weight: var(--font-weight-normal);
  margin: var(--space-stack-1-and-half-x);
`;

function H1({ children, ...props }) {
  return <Heading1 {...props}>{children}</Heading1>;
}

export default H1;
