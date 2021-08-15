import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: var(--font-size-text-lg);
  margin: var(--space-stack-1-and-half-x);
`;

function P({ children, ...props }) {
  return <Paragraph {...props}>{children}</Paragraph>;
}

export default P;
