import React from 'react';
import styled from 'styled-components';

const Heading2 = styled.h2`
  font-size: var(--font-size-heading-level-2);
  font-weight: var(--font-weight-normal);
  margin: var(--space-stack-1-and-half-x);
`;

function H2({ children, ...props }) {
  return <Heading2 {...props}>{children}</Heading2>;
}

export default H2;
